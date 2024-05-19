<?php

// Kết nối đến cơ sở dữ liệu SQL Server
$serverName = "DUYVPRO";
$connectionOptions = array(
    "Database" => "nasa",
    "Uid" => "sa",
    "PWD" => "makaeenm1"
);
$conn = sqlsrv_connect($serverName, $connectionOptions);

// Kiểm tra kết nối
if (!$conn) {
    die("Kết nối không thành công: " . sqlsrv_errors());
}

// Gọi procedure SelectAllMarsRoverPhotos
$tsql = "EXEC SelectAllMarsRoverPhotos";
$getResults = sqlsrv_query($conn, $tsql);

// Kiểm tra và hiển thị kết quả dưới dạng JSON
if ($getResults === false) {
    die("Lỗi khi thực thi procedure: " . sqlsrv_errors());
}

$data = array();

while ($row = sqlsrv_fetch_array($getResults, SQLSRV_FETCH_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'sol' => $row['sol'],
        'full_name' => $row['full_name'],
        'img_src' => $row['img_src'],
        'total_photos' => $row['total_photos'],
        'earth_date' => $row['earth_date']->format('Y-m-d'), // Chuyển đổi DateTime thành chuỗi
        'launch_date' => $row['launch_date']->format('Y-m-d'), // Chuyển đổi DateTime thành chuỗi
        'landing_date' => $row['landing_date']->format('Y-m-d') // Chuyển đổi DateTime thành chuỗi
    );
}

// Đóng kết nối
sqlsrv_free_stmt($getResults);
sqlsrv_close($conn);

// Trả về kết quả dưới dạng JSON
echo json_encode($data);

?>
