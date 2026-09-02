<?php
/**
 * Brother's Fashion - Admin Authentication & Password Management API
 */

require_once __DIR__ . '/config.php';
$pdo = get_db_connection();

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $input = get_json_input();
    $action = $input['action'] ?? 'login';

    // Action 1: Change Password
    if ($action === 'change_password') {
        $currentPassword = $input['currentPassword'] ?? '';
        $newPassword = $input['newPassword'] ?? '';

        if (empty($currentPassword) || empty($newPassword)) {
            json_response(['success' => false, 'error' => 'Current password and new password are required'], 400);
        }

        if (strlen($newPassword) < 6) {
            json_response(['success' => false, 'error' => 'New password must be at least 6 characters long'], 400);
        }

        if (!verify_admin_password($pdo, $currentPassword)) {
            json_response(['success' => false, 'error' => 'Current password is incorrect'], 401);
        }

        // Update password in database & generate new token
        $newToken = update_admin_password($pdo, $newPassword);

        json_response([
            'success' => true,
            'token' => $newToken,
            'message' => 'Admin password updated successfully! Please keep it secure.'
        ]);
    }

    // Action 2: Standard Login
    $password = $input['password'] ?? '';
    if (empty($password)) {
        json_response(['success' => false, 'error' => 'Password is required'], 400);
    }

    if (verify_admin_password($pdo, $password)) {
        $token = get_current_admin_token($pdo);
        json_response([
            'success' => true,
            'token' => $token,
            'message' => 'Admin authenticated successfully'
        ]);
    } else {
        json_response([
            'success' => false,
            'error' => 'Invalid admin password'
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
