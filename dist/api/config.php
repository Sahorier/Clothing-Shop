<?php
/**
 * Brother's Fashion - Central Database Connection & Core API Handler
 * Compatible with Namecheap Stellar Shared Hosting (PHP 8.x + SQLite/MySQL PDO)
 */

// 1. HTTP Headers & CORS
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, X-Admin-Token');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 2. Database Connection Configuration
// By default, uses zero-configuration SQLite stored securely in api/data/store.db
// To switch to MySQL on cPanel, define MySQL parameters below or in environment.
define('DB_TYPE', getenv('DB_TYPE') ?: 'sqlite'); // 'sqlite' or 'mysql'
define('DB_HOST', getenv('DB_HOST') ?: 'localhost');
define('DB_NAME', getenv('DB_NAME') ?: 'brothers_fashion');
define('DB_USER', getenv('DB_USER') ?: 'root');
define('DB_PASS', getenv('DB_PASS') ?: '');

function get_db_connection() {
    static $pdo = null;
    if ($pdo !== null) {
        return $pdo;
    }

    try {
        if (DB_TYPE === 'mysql') {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
            $pdo = new PDO($dsn, DB_USER, DB_PASS, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false
            ]);
        } else {
            // SQLite Database File
            $dataDir = __DIR__ . '/data';
            if (!is_dir($dataDir)) {
                mkdir($dataDir, 0755, true);
            }
            $dbPath = $dataDir . '/store.db';
            $pdo = new PDO("sqlite:" . $dbPath, null, null, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ]);
            // Enable Foreign Keys and WAL journal mode for high concurrency
            $pdo->exec("PRAGMA foreign_keys = ON;");
            $pdo->exec("PRAGMA journal_mode = WAL;");
        }

        // Initialize schema if not exists
        init_database_schema($pdo);

        return $pdo;
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'error' => 'Database connection failed: ' . $e->getMessage()
        ]);
        exit;
    }
}

// 3. Schema Initialization
function init_database_schema($pdo) {
    // Products Table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS products (
            id TEXT PRIMARY KEY,
            sku TEXT,
            title TEXT NOT NULL,
            subtitle TEXT,
            category TEXT NOT NULL,
            price REAL NOT NULL,
            originalPrice REAL,
            stock INTEGER NOT NULL DEFAULT 0,
            badge TEXT,
            isFeatured INTEGER DEFAULT 0,
            isNew INTEGER DEFAULT 0,
            rating REAL DEFAULT 5.0,
            reviewCount INTEGER DEFAULT 0,
            images TEXT, -- JSON array of image URLs
            sizes TEXT,  -- JSON array of size strings
            colors TEXT, -- JSON array of color objects {name, hex}
            tags TEXT,   -- JSON array of tag strings
            description TEXT,
            fabric TEXT,
            deliveryInfo TEXT,
            hasCustomDesign INTEGER DEFAULT 0,
            createdAt TEXT,
            updatedAt TEXT
        );
    ");

    // Orders Table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS orders (
            id TEXT PRIMARY KEY,
            customerName TEXT NOT NULL,
            customerPhone TEXT NOT NULL,
            customerEmail TEXT,
            customerAddress TEXT NOT NULL,
            customerCity TEXT NOT NULL,
            customerDistrict TEXT,
            customerPostalCode TEXT,
            deliveryLocation TEXT,
            items TEXT NOT NULL, -- JSON array of ordered items with quantities & variants
            subtotal REAL NOT NULL,
            shippingFee REAL NOT NULL,
            discount REAL DEFAULT 0,
            discountCode TEXT,
            tax REAL DEFAULT 0,
            total REAL NOT NULL,
            paymentMethod TEXT NOT NULL,
            paymentStatus TEXT DEFAULT 'Pending',
            orderStatus TEXT DEFAULT 'Pending', -- 'Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'
            trackingNumber TEXT,
            customNotes TEXT,
            createdAt TEXT NOT NULL,
            updatedAt TEXT
        );
    ");

    // Store Settings Table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS settings (
            settingKey TEXT PRIMARY KEY,
            settingValue TEXT NOT NULL
        );
    ");

    // Coupons Table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS coupons (
            id TEXT PRIMARY KEY,
            code TEXT UNIQUE NOT NULL,
            discountType TEXT NOT NULL, -- 'percentage' or 'fixed'
            discountValue REAL NOT NULL,
            minSpend REAL DEFAULT 0,
            expiryDate TEXT,
            isActive INTEGER DEFAULT 1,
            description TEXT
        );
    ");
}

// 4. Utility Functions
function json_response($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function get_json_input() {
    $raw = file_get_contents('php://input');
    if (!$raw) return [];
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

function verify_admin_auth() {
    // Check Authorization header, X-Admin-Token header, or session
    $headers = getallheaders();
    $token = $headers['X-Admin-Token'] ?? $headers['x-admin-token'] ?? '';
    
    if (!$token && isset($_SERVER['HTTP_AUTHORIZATION'])) {
        $token = str_replace('Bearer ', '', $_SERVER['HTTP_AUTHORIZATION']);
    }

    // Default admin secret or accepted passwords
    $validPasswords = ['admin123', 'brothers', 'admin', 'rajshahi', 'elegant'];
    if (in_array($token, $validPasswords) || $token === 'brothers_admin_token_2026') {
        return true;
    }

    return false;
}
