<?php
/**
 * Brother's Fashion - Products & Stock Management API Endpoint
 */

require_once __DIR__ . '/config.php';
$pdo = get_db_connection();

$method = $_SERVER['REQUEST_METHOD'];

// Helper to seed initial products if database is newly created
function seed_initial_products_if_empty($pdo) {
    $stmt = $pdo->query("SELECT COUNT(*) as count FROM products");
    $row = $stmt->fetch();
    if ($row && $row['count'] > 0) {
        return;
    }

    $initialFile = __DIR__ . '/initial_products.json';
    if (file_exists($initialFile)) {
        $json = file_get_contents($initialFile);
        $products = json_decode($json, true);
        if (is_array($products)) {
            $insertStmt = $pdo->prepare("
                INSERT INTO products (
                    id, sku, title, subtitle, category, price, originalPrice, stock, badge,
                    isFeatured, isNew, rating, reviewCount, images, sizes, colors, tags,
                    description, fabric, deliveryInfo, hasCustomDesign, createdAt, updatedAt
                ) VALUES (
                    :id, :sku, :title, :subtitle, :category, :price, :originalPrice, :stock, :badge,
                    :isFeatured, :isNew, :rating, :reviewCount, :images, :sizes, :colors, :tags,
                    :description, :fabric, :deliveryInfo, :hasCustomDesign, :createdAt, :updatedAt
                )
            ");

            foreach ($products as $p) {
                $insertStmt->execute([
                    ':id' => $p['id'],
                    ':sku' => $p['sku'] ?? '',
                    ':title' => $p['title'],
                    ':subtitle' => $p['subtitle'] ?? '',
                    ':category' => $p['category'] ?? "Men's Collection",
                    ':price' => $p['price'] ?? 0,
                    ':originalPrice' => $p['originalPrice'] ?? null,
                    ':stock' => $p['stock'] ?? 10,
                    ':badge' => $p['badge'] ?? null,
                    ':isFeatured' => !empty($p['isFeatured']) ? 1 : 0,
                    ':isNew' => !empty($p['isNew']) ? 1 : 0,
                    ':rating' => $p['rating'] ?? 5.0,
                    ':reviewCount' => $p['reviewCount'] ?? 10,
                    ':images' => json_encode($p['images'] ?? []),
                    ':sizes' => json_encode($p['sizes'] ?? []),
                    ':colors' => json_encode($p['colors'] ?? []),
                    ':tags' => json_encode($p['tags'] ?? []),
                    ':description' => $p['description'] ?? '',
                    ':fabric' => $p['fabric'] ?? '',
                    ':deliveryInfo' => $p['deliveryInfo'] ?? '',
                    ':hasCustomDesign' => !empty($p['hasCustomDesign']) ? 1 : 0,
                    ':createdAt' => date('c'),
                    ':updatedAt' => date('c')
                ]);
            }
        }
    }
}

// 1. GET: Fetch Products
if ($method === 'GET') {
    seed_initial_products_if_empty($pdo);

    $category = $_GET['category'] ?? '';
    $search = $_GET['search'] ?? '';

    $sql = "SELECT * FROM products WHERE 1=1";
    $params = [];

    if ($category && $category !== 'all') {
        $sql .= " AND LOWER(category) = LOWER(:category)";
        $params[':category'] = $category;
    }

    if ($search) {
        $sql .= " AND (LOWER(title) LIKE :search OR LOWER(sku) LIKE :search OR LOWER(tags) LIKE :search)";
        $params[':search'] = '%' . strtolower($search) . '%';
    }

    $sql .= " ORDER BY isFeatured DESC, isNew DESC, id DESC";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $rows = $stmt->fetchAll();

    // Decode JSON fields
    $products = array_map(function ($row) {
        $row['images'] = json_decode($row['images'] ?? '[]', true) ?: [];
        $row['sizes'] = json_decode($row['sizes'] ?? '[]', true) ?: [];
        $row['colors'] = json_decode($row['colors'] ?? '[]', true) ?: [];
        $row['tags'] = json_decode($row['tags'] ?? '[]', true) ?: [];
        $row['isFeatured'] = (bool) $row['isFeatured'];
        $row['isNew'] = (bool) $row['isNew'];
        $row['hasCustomDesign'] = (bool) $row['hasCustomDesign'];
        $row['price'] = (float) $row['price'];
        $row['stock'] = (int) $row['stock'];
        if ($row['originalPrice'] !== null) {
            $row['originalPrice'] = (float) $row['originalPrice'];
        }
        return $row;
    }, $rows);

    json_response([
        'success' => true,
        'count' => count($products),
        'products' => $products
    ]);
}

// 2. POST: Add or Update Product
if ($method === 'POST') {
    if (!verify_admin_auth()) {
        json_response(['success' => false, 'error' => 'Unauthorized admin access'], 401);
    }

    $input = get_json_input();
    if (empty($input['title']) || !isset($input['price'])) {
        json_response(['success' => false, 'error' => 'Title and Price are required'], 400);
    }

    $id = !empty($input['id']) ? $input['id'] : 'prod-' . time() . '-' . rand(100, 999);
    $sku = $input['sku'] ?? 'BF-' . strtoupper(substr(preg_replace('/[^A-Za-z0-9]/', '', $input['title']), 0, 4)) . '-' . rand(100, 999);
    $title = trim($input['title']);
    $subtitle = $input['subtitle'] ?? '';
    $category = $input['category'] ?? "Men's Collection";
    $price = floatval($input['price']);
    $originalPrice = isset($input['originalPrice']) && $input['originalPrice'] !== '' ? floatval($input['originalPrice']) : null;
    $stock = isset($input['stock']) ? intval($input['stock']) : 10;
    $badge = $input['badge'] ?? null;
    $isFeatured = !empty($input['isFeatured']) ? 1 : 0;
    $isNew = !empty($input['isNew']) ? 1 : 0;
    $rating = isset($input['rating']) ? floatval($input['rating']) : 5.0;
    $reviewCount = isset($input['reviewCount']) ? intval($input['reviewCount']) : 0;
    $images = json_encode($input['images'] ?? []);
    $sizes = json_encode($input['sizes'] ?? []);
    $colors = json_encode($input['colors'] ?? []);
    $tags = json_encode($input['tags'] ?? []);
    $description = $input['description'] ?? '';
    $fabric = $input['fabric'] ?? '';
    $deliveryInfo = $input['deliveryInfo'] ?? '';
    $hasCustomDesign = !empty($input['hasCustomDesign']) ? 1 : 0;
    $now = date('c');

    $stmt = $pdo->prepare("
        INSERT INTO products (
            id, sku, title, subtitle, category, price, originalPrice, stock, badge,
            isFeatured, isNew, rating, reviewCount, images, sizes, colors, tags,
            description, fabric, deliveryInfo, hasCustomDesign, createdAt, updatedAt
        ) VALUES (
            :id, :sku, :title, :subtitle, :category, :price, :originalPrice, :stock, :badge,
            :isFeatured, :isNew, :rating, :reviewCount, :images, :sizes, :colors, :tags,
            :description, :fabric, :deliveryInfo, :hasCustomDesign, :createdAt, :updatedAt
        )
        ON CONFLICT(id) DO UPDATE SET
            sku = excluded.sku,
            title = excluded.title,
            subtitle = excluded.subtitle,
            category = excluded.category,
            price = excluded.price,
            originalPrice = excluded.originalPrice,
            stock = excluded.stock,
            badge = excluded.badge,
            isFeatured = excluded.isFeatured,
            isNew = excluded.isNew,
            images = excluded.images,
            sizes = excluded.sizes,
            colors = excluded.colors,
            tags = excluded.tags,
            description = excluded.description,
            fabric = excluded.fabric,
            deliveryInfo = excluded.deliveryInfo,
            hasCustomDesign = excluded.hasCustomDesign,
            updatedAt = excluded.updatedAt
    ");

    $stmt->execute([
        ':id' => $id,
        ':sku' => $sku,
        ':title' => $title,
        ':subtitle' => $subtitle,
        ':category' => $category,
        ':price' => $price,
        ':originalPrice' => $originalPrice,
        ':stock' => $stock,
        ':badge' => $badge,
        ':isFeatured' => $isFeatured,
        ':isNew' => $isNew,
        ':rating' => $rating,
        ':reviewCount' => $reviewCount,
        ':images' => $images,
        ':sizes' => $sizes,
        ':colors' => $colors,
        ':tags' => $tags,
        ':description' => $description,
        ':fabric' => $fabric,
        ':deliveryInfo' => $deliveryInfo,
        ':hasCustomDesign' => $hasCustomDesign,
        ':createdAt' => $now,
        ':updatedAt' => $now
    ]);

    json_response([
        'success' => true,
        'message' => 'Product saved successfully',
        'id' => $id
    ]);
}

// 3. DELETE: Remove Product
if ($method === 'DELETE') {
    if (!verify_admin_auth()) {
        json_response(['success' => false, 'error' => 'Unauthorized admin access'], 401);
    }

    $id = $_GET['id'] ?? '';
    if (!$id) {
        $input = get_json_input();
        $id = $input['id'] ?? '';
    }

    if (!$id) {
        json_response(['success' => false, 'error' => 'Missing product ID'], 400);
    }

    $stmt = $pdo->prepare("DELETE FROM products WHERE id = :id");
    $stmt->execute([':id' => $id]);

    json_response([
        'success' => true,
        'message' => 'Product deleted successfully'
    ]);
}

json_response(['error' => 'Method not allowed'], 405);
