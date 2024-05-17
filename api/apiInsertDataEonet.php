<?php

// Kết nối đến cơ sở dữ liệu
$serverName = "DUYVPRO";
$connectionOptions = array(
    "Database" => "nasa",
    "Uid" => "sa",
    "PWD" => "makaeenm1"
);

$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}

// Đọc nội dung JSON từ URL
$json_url = 'http://127.0.0.1:1880/eonet';
$json = file_get_contents($json_url);

// Kiểm tra xem dữ liệu JSON có được đọc thành công không
if ($json === false) {
    die("Không thể đọc dữ liệu JSON từ URL.");
}

$data = json_decode($json, true);

// Gọi stored procedure để chèn dữ liệu vào cơ sở dữ liệu
foreach ($data as $item) {
    // Kiểm tra từng trường và gán giá trị null nếu trường đó là null trong JSON
    $id = $item['id'] ?? null;
    $title = $item['title'] ?? null;
    $descriptions = $item['descriptions'] ?? null;
    $link = $item['link'] ?? null;
    $closed = $item['closed'] ?? null;
    $date = $item['date'] ?? null;
    $magnitudeValue = $item['magnitudeValue'] ?? null;
    $magnitudeUnit = $item['magnitudeUnit'] ?? null;
    $urls = $item['urls'] ?? null;

    // Gọi stored procedure để chèn dữ liệu
    $sql = "{CALL InsertEonetEvents (?, ?, ?, ?, ?, ?, ?, ?, ?)}";
    $params = array(
        array($id, SQLSRV_PARAM_IN),
        array($title, SQLSRV_PARAM_IN),
        array($descriptions, SQLSRV_PARAM_IN),
        array($link, SQLSRV_PARAM_IN),
        array($closed, SQLSRV_PARAM_IN),
        array($date, SQLSRV_PARAM_IN),
        array($magnitudeValue, SQLSRV_PARAM_IN),
        array($magnitudeUnit, SQLSRV_PARAM_IN),
        array($urls, SQLSRV_PARAM_IN)
    );

    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        die(print_r(sqlsrv_errors(), true));
    }

    sqlsrv_free_stmt($stmt);
}

// Đóng kết nối
sqlsrv_close($conn);

?>
