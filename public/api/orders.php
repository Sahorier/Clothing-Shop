<?php
/**
 * Brother's Fashion - Orders & Automated Inventory Management API Endpoint
 */

require_once __DIR__ . '/config.php';
$pdo = get_db_connection();

$method = $_SERVER['REQUEST_METHOD'];

// 1. GET: Fetch Orders (Admin Only)
if ($method === 'GET') {
    if (!verify_admin_auth()) {
        json_response(['success' => false, 'error' => 'Unauthorized admin access'], 401);
    }

    $status = $_GET['status'] ?? '';
    $search = $_GET['search'] ?? '';

    $sql = "SELECT * FROM orders WHERE 1=1";
    $params = [];

    if ($status && $status !== 'all') {
        $sql .= " AND LOWER(orderStatus) = LOWER(:status)";
        $params[':status'] = $status;
    }

    if ($search) {
        $sql .= " AND (LOWER(id) LIKE :search OR LOWER(customerName) LIKE :search OR LOWER(customerPhone) LIKE :search OR LOWER(customerEmail) LIKE :search)";
        $params[':search'] = '%' . strtolower($search) . '%';
    }

    $sql .= " ORDER BY createdAt DESC";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $rows = $stmt->fetchAll();

    $orders = array_map(function ($row) {
        $items = json_decode($row['items'] ?? '[]', true) ?: [];
        $names = explode(' ', $row['customerName'] ?? 'Customer', 2);
        return [
            'id' => $row['id'],
            'customer' => [
                'firstName' => $names[0] ?? 'Customer',
                'lastName' => $names[1] ?? '',
                'phone' => $row['customerPhone'],
                'email' => $row['customerEmail'] ?? '',
                'address' => $row['customerAddress'],
                'city' => $row['customerCity'],
                'district' => $row['customerDistrict'] ?? $row['customerCity'],
                'postalCode' => $row['customerPostalCode'] ?? '',
                'country' => 'Bangladesh'
            ],
            'items' => $items,
            'subtotal' => (float) $row['subtotal'],
            'shippingFee' => (float) $row['shippingFee'],
            'discount' => (float) $row['discount'],
            'discountCode' => $row['discountCode'] ?? '',
            'tax' => (float) $row['tax'],
            'total' => (float) $row['total'],
            'deliveryLocation' => $row['deliveryLocation'],
            'paymentMethod' => $row['paymentMethod'],
            'paymentStatus' => $row['paymentStatus'],
            'orderStatus' => $row['orderStatus'],
            'trackingNumber' => $row['trackingNumber'] ?? '',
            'customNotes' => $row['customNotes'] ?? '',
            'createdAt' => $row['createdAt'],
            'updatedAt' => $row['updatedAt']
        ];
    }, $rows);

    json_response([
        'success' => true,
        'count' => count($orders),
        'orders' => $orders
    ]);
}

// 2. POST: Create Order & Auto-Decrement Inventory Stock
if ($method === 'POST') {
    $input = get_json_input();

    if (empty($input['items']) || !is_array($input['items'])) {
        json_response(['success' => false, 'error' => 'No items in order'], 400);
    }

    $customer = $input['customer'] ?? [];
    $firstName = trim($customer['firstName'] ?? 'Customer');
    $lastName = trim($customer['lastName'] ?? '');
    $customerName = trim($firstName . ' ' . $lastName);
    $phone = trim($customer['phone'] ?? '');
    $email = trim($customer['email'] ?? '');
    $address = trim($customer['address'] ?? '');
    $city = trim($customer['city'] ?? 'Rajshahi Sadar');
    $district = trim($customer['district'] ?? $city);
    $postalCode = trim($customer['postalCode'] ?? '');

    if (empty($phone) || empty($address)) {
        json_response(['success' => false, 'error' => 'Phone number and delivery address are required'], 400);
    }

    $items = $input['items'];
    $subtotal = floatval($input['subtotal'] ?? 0);
    $shippingFee = floatval($input['shippingFee'] ?? 80);
    $discount = floatval($input['discount'] ?? 0);
    $discountCode = $input['discountCode'] ?? '';
    $tax = floatval($input['tax'] ?? 0);
    $total = floatval($input['total'] ?? ($subtotal + $shippingFee - $discount + $tax));
    $deliveryLocation = $input['deliveryLocation'] ?? 'Inside Rajshahi (৳80)';
    $paymentMethod = $input['paymentMethod'] ?? 'Cash on Delivery';
    $customNotes = $input['customNotes'] ?? '';

    $orderId = 'BF-' . strtoupper(substr(uniqid(), -5)) . rand(10, 99);
    $trackingNumber = 'BF-RAJ-' . rand(10000, 99999);
    $now = date('c');

    try {
        // Start Atomic Database Transaction
        $pdo->beginTransaction();

        // Check stock availability & decrement for each item
        $checkStockStmt = $pdo->prepare("SELECT id, title, stock FROM products WHERE id = :id FOR UPDATE");
        $updateStockStmt = $pdo->prepare("UPDATE products SET stock = stock - :qty, updatedAt = :now WHERE id = :id");

        foreach ($items as $item) {
            $productId = $item['productId'] ?? $item['id'] ?? null;
            $quantity = intval($item['quantity'] ?? 1);

            if ($productId) {
                $checkStockStmt->execute([':id' => $productId]);
                $productRow = $checkStockStmt->fetch();

                if ($productRow) {
                    $currentStock = (int) $productRow['stock'];
                    if ($currentStock < $quantity) {
                        $pdo->rollBack();
                        json_response([
                            'success' => false,
                            'error' => "Insufficient stock for '{$productRow['title']}'. Only {$currentStock} remaining."
                        ], 400);
                    }

                    // Decrement stock
                    $updateStockStmt->execute([
                        ':qty' => $quantity,
                        ':now' => $now,
                        ':id' => $productId
                    ]);
                }
            }
        }

        // Insert Order Record
        $insertOrderStmt = $pdo->prepare("
            INSERT INTO orders (
                id, customerName, customerPhone, customerEmail, customerAddress,
                customerCity, customerDistrict, customerPostalCode, deliveryLocation,
                items, subtotal, shippingFee, discount, discountCode, tax, total,
                paymentMethod, paymentStatus, orderStatus, trackingNumber, customNotes,
                createdAt, updatedAt
            ) VALUES (
                :id, :customerName, :customerPhone, :customerEmail, :customerAddress,
                :customerCity, :customerDistrict, :customerPostalCode, :deliveryLocation,
                :items, :subtotal, :shippingFee, :discount, :discountCode, :tax, :total,
                :paymentMethod, :paymentStatus, :orderStatus, :trackingNumber, :customNotes,
                :createdAt, :updatedAt
            )
        ");

        $insertOrderStmt->execute([
            ':id' => $orderId,
            ':customerName' => $customerName,
            ':customerPhone' => $phone,
            ':customerEmail' => $email,
            ':customerAddress' => $address,
            ':customerCity' => $city,
            ':customerDistrict' => $district,
            ':customerPostalCode' => $postalCode,
            ':deliveryLocation' => $deliveryLocation,
            ':items' => json_encode($items, JSON_UNESCAPED_UNICODE),
            ':subtotal' => $subtotal,
            ':shippingFee' => $shippingFee,
            ':discount' => $discount,
            ':discountCode' => $discountCode,
            ':tax' => $tax,
            ':total' => $total,
            ':paymentMethod' => $paymentMethod,
            ':paymentStatus' => ($paymentMethod === 'Cash on Delivery') ? 'Pending' : 'Pending Verification',
            ':orderStatus' => 'Pending',
            ':trackingNumber' => $trackingNumber,
            ':customNotes' => $customNotes,
            ':createdAt' => $now,
            ':updatedAt' => $now
        ]);

        $pdo->commit();

        json_response([
            'success' => true,
            'message' => 'Order placed successfully',
            'orderId' => $orderId,
            'trackingNumber' => $trackingNumber,
            'order' => [
                'id' => $orderId,
                'customer' => [
                    'firstName' => $firstName,
                    'lastName' => $lastName,
                    'phone' => $phone,
                    'email' => $email,
                    'address' => $address,
                    'city' => $city
                ],
                'items' => $items,
                'total' => $total,
                'orderStatus' => 'Pending',
                'trackingNumber' => $trackingNumber,
                'createdAt' => $now
            ]
        ], 201);

    } catch (Exception $e) {
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }
        json_response([
            'success' => false,
            'error' => 'Failed to process order: ' . $e->getMessage()
        ], 500);
    }
}

// 3. PUT/PATCH: Update Order Status (Admin Only)
if ($method === 'PUT' || $method === 'PATCH') {
    if (!verify_admin_auth()) {
        json_response(['success' => false, 'error' => 'Unauthorized admin access'], 401);
    }

    $input = get_json_input();
    $orderId = $input['orderId'] ?? $input['id'] ?? '';
    $newStatus = $input['orderStatus'] ?? '';
    $paymentStatus = $input['paymentStatus'] ?? null;
    $trackingNumber = $input['trackingNumber'] ?? null;

    if (!$orderId) {
        json_response(['success' => false, 'error' => 'Order ID required'], 400);
    }

    // Check existing order
    $stmt = $pdo->prepare("SELECT * FROM orders WHERE id = :id");
    $stmt->execute([':id' => $orderId]);
    $order = $stmt->fetch();

    if (!$order) {
        json_response(['success' => false, 'error' => 'Order not found'], 404);
    }

    $oldStatus = $order['orderStatus'];
    $now = date('c');

    try {
        $pdo->beginTransaction();

        // If newly Cancelled, restore product stock back to inventory!
        if (strtolower($newStatus) === 'cancelled' && strtolower($oldStatus) !== 'cancelled') {
            $items = json_decode($order['items'] ?? '[]', true) ?: [];
            $restoreStockStmt = $pdo->prepare("UPDATE products SET stock = stock + :qty, updatedAt = :now WHERE id = :id");
            foreach ($items as $item) {
                $pId = $item['productId'] ?? $item['id'] ?? null;
                $qty = intval($item['quantity'] ?? 1);
                if ($pId) {
                    $restoreStockStmt->execute([
                        ':qty' => $qty,
                        ':now' => $now,
                        ':id' => $pId
                    ]);
                }
            }
        }

        // Update Order
        $updateSql = "UPDATE orders SET updatedAt = :now";
        $params = [':now' => $now, ':id' => $orderId];

        if ($newStatus) {
            $updateSql .= ", orderStatus = :orderStatus";
            $params[':orderStatus'] = $newStatus;
        }
        if ($paymentStatus !== null) {
            $updateSql .= ", paymentStatus = :paymentStatus";
            $params[':paymentStatus'] = $paymentStatus;
        }
        if ($trackingNumber !== null) {
            $updateSql .= ", trackingNumber = :trackingNumber";
            $params[':trackingNumber'] = $trackingNumber;
        }

        $updateSql .= " WHERE id = :id";
        $updateStmt = $pdo->prepare($updateSql);
        $updateStmt->execute($params);

        $pdo->commit();

        json_response([
            'success' => true,
            'message' => 'Order updated successfully',
            'orderId' => $orderId,
            'orderStatus' => $newStatus ?: $oldStatus
        ]);
    } catch (Exception $e) {
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }
        json_response(['success' => false, 'error' => 'Failed to update order: ' . $e->getMessage()], 500);
    }
}

json_response(['error' => 'Method not allowed'], 405);
