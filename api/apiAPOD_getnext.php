<?php
$serverName = "DUYVPRO";
$connectionOptions = array(
    "Database" => "nasa",
    "Uid" => "sa",
    "PWD" => "makaeenm1"
);

// Kết nối đến cơ sở dữ liệu
$conn = sqlsrv_connect($serverName, $connectionOptions);

// Kiểm tra kết nối
if ($conn === false) {
    echo json_encode(array("error" => "Kết nối thất bại: " . sqlsrv_errors()));
    exit;
}

// Lấy ngày hiện tại
$currentDate = isset($_GET['current_date']) ? $_GET['current_date'] : date('Y-m-d');

// Gọi stored procedure
$sql = "{CALL GetNextApodData(?)}";
$params = array(&$currentDate);
$stmt = sqlsrv_query($conn, $sql, $params);

// Kiểm tra lỗi
if ($stmt === false) {
    echo json_encode(array("error" => "Lỗi khi thực thi stored procedure: " . sqlsrv_errors()));
    exit;
}

// Lấy dữ liệu từ kết quả
$data = array();
while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    $data[] = $row;
}

// Đóng kết nối và giải phóng bộ nhớ
sqlsrv_free_stmt($stmt);
sqlsrv_close($conn);

// Trả về dữ liệu dưới dạng JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
