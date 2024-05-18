<?php
$serverName = "DUYVPRO";
$connectionOptions = array(
    "Database" => "nasa",
    "Uid" => "sa",
    "PWD" => "makaeenm1"
);
$conn = sqlsrv_connect($serverName, $connectionOptions);

if (!$conn) {
    echo "Kết nối thất bại: " . sqlsrv_errors();
    exit;
}

$sql = "EXEC SelectEonetEvents";
$stmt = sqlsrv_query($conn, $sql);

if ($stmt === false) {
    die(print_r(sqlsrv_errors(), true));
} else {
    $events = array();
    while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
        // Trích xuất ngày từ đối tượng DateTime và định dạng lại
        $date_eonet = $row['date_eonet']->format('Y-m-d');
        $row['date_eonet'] = $date_eonet;
        $events[] = $row;
    }

    header('Content-Type: application/json');
    echo json_encode($events);
}

sqlsrv_free_stmt($stmt);
sqlsrv_close($conn);
?>
