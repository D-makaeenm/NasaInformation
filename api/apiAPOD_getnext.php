<?php
$serverName = "DUYVPRO";
$connectionOptions = array(
    "Database" => "nasa",
    "Uid" => "sa",
    "PWD" => "makaeenm1"
);
$conn = sqlsrv_connect($serverName, $connectionOptions);

// Kiểm tra kết nối
if ($conn === false) {
    echo "Kết nối thất bại: " . sqlsrv_errors();
    exit;
}

// Lấy ngày từ tham số được truyền từ JavaScript
$currentDate = isset($_GET['current_date']) ? $_GET['current_date'] : date('Y-m-d');
// Chuẩn bị câu truy vấn
$sql = "EXEC GetNextApodData @TargetDate = ?";
$params = array(&$currentDate);
$stmt = sqlsrv_query($conn, $sql, $params);

// Kiểm tra và thực thi câu truy vấn
if ($stmt === false) {
    $errors = sqlsrv_errors();
    if ($errors !== null) {
        echo "Lỗi khi thực thi stored procedure: ";
        foreach ($errors as $error) {
            echo "SQLSTATE: " . $error['SQLSTATE'] . ", code: " . $error['code'] . ", message: " . $error['message'];
        }
    } else {
        echo "Lỗi khi thực thi stored procedure nhưng không có thông tin lỗi được trả về.";
    }
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
