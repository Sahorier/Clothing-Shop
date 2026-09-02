<?php
/**
 * Brother's Fashion - Settings & CMS API Endpoint
 */

require_once __DIR__ . '/config.php';
$pdo = get_db_connection();

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $stmt = $pdo->query("SELECT settingKey, settingValue FROM settings");
    $rows = $stmt->fetchAll();

    $settings = [];
    foreach ($rows as $row) {
        $settings[$row['settingKey']] = json_decode($row['settingValue'], true) ?? $row['settingValue'];
    }

    json_response([
        'success' => true,
        'settings' => $settings
    ]);
}

if ($method === 'POST') {
    if (!verify_admin_auth()) {
        json_response(['success' => false, 'error' => 'Unauthorized admin access'], 401);
    }

    $input = get_json_input();
    $stmt = $pdo->prepare("
        INSERT INTO settings (settingKey, settingValue)
        VALUES (:key, :val)
        ON CONFLICT(settingKey) DO UPDATE SET settingValue = excluded.settingValue
    ");

    foreach ($input as $key => $val) {
        $stmt->execute([
            ':key' => $key,
            ':val' => is_array($val) ? json_encode($val, JSON_UNESCAPED_UNICODE) : (string) $val
        ]);
    }

    json_response([
        'success' => true,
        'message' => 'Settings saved successfully'
    ]);
}

json_response(['error' => 'Method not allowed'], 405);
