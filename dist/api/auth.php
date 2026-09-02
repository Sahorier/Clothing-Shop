<?php
/**
 * Brother's Fashion - Admin Authentication API
 */

require_once __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $input = get_json_input();
    $password = $input['password'] ?? '';

    $validPasswords = ['admin123', 'brothers', 'admin', 'rajshahi', 'elegant'];

    if (in_array($password, $validPasswords)) {
        $token = 'brothers_admin_token_2026';
        json_response([
            'success' => true,
            'token' => $token,
            'message' => 'Admin authenticated successfully'
        ]);
    } else {
        json_response([
            'success' => false,
            'error' => 'Invalid password'
        ], 401);
    }
}

if ($method === 'GET') {
    if (verify_admin_auth()) {
        json_response(['authenticated' => true]);
    } else {
        json_response(['authenticated' => false], 401);
    }
}

json_response(['error' => 'Method not allowed'], 405);
