<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

// Загружаем конфиг
$config = require __DIR__ . '/../../config/mail.php';

// CORS
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === $config['allowed_origin']) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
}
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Метод не поддерживается']);
    exit;
}

// Читаем JSON
$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success'=>false,'message'=>'Некорректный JSON']);
    exit;
}

$name = trim((string)($data['name'] ?? ''));
$email    = trim((string)($data['email'] ?? ''));

// простая валидация
if (mb_strlen($name) < 2) {
    echo json_encode(['success'=>false,'message'=>'Некорректное имя']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success'=>false,'message'=>'Некорректный email']);
    exit;
}

$fromEmail = $config['from_email'];
$fromName  = $config['from_name'];

// Письмо админу
$adminBody = "Новая заявка:\n\nФИО: {$name}\nEmail: {$email}\nВремя: " . date('Y-m-d H:i:s');

$adminHeaders = "MIME-Version: 1.0\r\n";
$adminHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";
$adminHeaders .= 'From: "' . $fromName . '" <' . $fromEmail . '">' . "\r\n";
$adminHeaders .= 'Reply-To: ' . $email . "\r\n";

$adminOk = mail($config['admin_email'], $config['admin_subject'], $adminBody, $adminHeaders);

// Автоответ
$userBody = "Здравствуйте, {$name}!\n\nМы получили вашу заявку.\nМы свяжемся с вами в ближайшее время.\n\nС уважением,\n{$fromName}";

$userHeaders = "MIME-Version: 1.0\r\n";
$userHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";
$userHeaders .= 'From: "' . $fromName . '" <' . $fromEmail . '">' . "\r\n";

mail($email, $config['user_subject'], $userBody, $userHeaders);

echo json_encode(['success'=> $adminOk]);
exit;