<?php
// Nhận dữ liệu từ yêu cầu POST và chuyển đổi nó thành mảng PHP
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Chuyển đổi mảng PHP thành chuỗi JSON
$jsonData = json_encode($data);

// Phản hồi lại chuỗi JSON
echo $jsonData;
?>
