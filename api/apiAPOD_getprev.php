<?php
$serverName = "DUYVPRO";
$connectionOptions = array(
    "Database" => "nasa",
    "Uid" => "sa",
    "PWD" => "makaeenm1"
);
$conn = sqlsrv_connect($serverName, $connectionOptions);

// Check connect
if (!$conn) {
    echo "Kết nối thất bại: " . sqlsrv_errors();
    exit;
}

$sql = "EXEC GetYesterdayApodData";
$stmt = sqlsrv_query($conn, $sql);

if ($stmt === false) {
    echo "Lỗi khi thực thi stored procedure: " . sqlsrv_errors();
    exit;
}

// Khởi tạo mảng để lưu trữ dữ liệu
$data = array();

// Lặp qua kết quả trả về từ stored procedure và thêm vào mảng
while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    $data[] = $row;
}

// Đóng kết nối
sqlsrv_free_stmt($stmt);
sqlsrv_close($conn);

// Trả về dữ liệu dưới dạng JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
