<?php
/**
 * Brother's Fashion - Secure Product Image Upload API Endpoint
 */

require_once __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    if (!verify_admin_auth()) {
        json_response(['success' => false, 'error' => 'Unauthorized admin access'], 401);
    }

    $uploadsDir = __DIR__ . '/../uploads';
    if (!is_dir($uploadsDir)) {
        mkdir($uploadsDir, 0755, true);
    }

    $uploadedImages = [];
    $errors = [];

    // Helper to process a single uploaded file
    $processFile = function($tmpName, $originalName, $fileSize, $fileError) use ($uploadsDir, &$uploadedImages, &$errors) {
        if ($fileError !== UPLOAD_ERR_OK) {
            $errors[] = "Upload error code: $fileError for file $originalName";
            return;
        }

        // Max 10MB
        if ($fileSize > 10 * 1024 * 1024) {
            $errors[] = "File '$originalName' exceeds 10MB limit.";
            return;
        }

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $tmpName);
        finfo_close($finfo);

        $allowedMimes = [
            'image/jpeg' => 'jpg',
            'image/png'  => 'png',
            'image/webp' => 'webp',
            'image/gif'  => 'gif'
        ];

        if (!isset($allowedMimes[$mimeType])) {
            $errors[] = "File '$originalName' is not a supported image type ($mimeType).";
            return;
        }

        $extension = $allowedMimes[$mimeType];
        $safeName = 'prod_' . time() . '_' . substr(bin2hex(random_bytes(6)), 0, 8) . '.' . $extension;
        $targetPath = $uploadsDir . '/' . $safeName;

        if (move_uploaded_file($tmpName, $targetPath)) {
            $uploadedImages[] = './uploads/' . $safeName;
        } else {
            $errors[] = "Failed to move uploaded file '$originalName'.";
        }
    };

    // Check multiple files in $_FILES['images']
    if (isset($_FILES['images']) && is_array($_FILES['images']['name'])) {
        $files = $_FILES['images'];
        $count = count($files['name']);
        for ($i = 0; $i < $count; $i++) {
            if (!empty($files['name'][$i])) {
                $processFile(
                    $files['tmp_name'][$i],
                    $files['name'][$i],
                    $files['size'][$i],
                    $files['error'][$i]
                );
            }
        }
    } 
    // Check single file in $_FILES['image'] or $_FILES['file']
    else {
        $fileKey = isset($_FILES['image']) ? 'image' : (isset($_FILES['file']) ? 'file' : null);
        if ($fileKey && !empty($_FILES[$fileKey]['tmp_name'])) {
            $processFile(
                $_FILES[$fileKey]['tmp_name'],
                $_FILES[$fileKey]['name'],
                $_FILES[$fileKey]['size'],
                $_FILES[$fileKey]['error']
            );
        }
    }

    if (empty($uploadedImages) && !empty($errors)) {
        json_response(['success' => false, 'error' => implode(' | ', $errors)], 400);
    }

    json_response([
        'success' => true,
        'images' => $uploadedImages,
        'primaryUrl' => $uploadedImages[0] ?? null,
        'warnings' => $errors
    ]);
}

json_response(['error' => 'Method not allowed'], 405);
