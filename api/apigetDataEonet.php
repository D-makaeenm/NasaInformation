<?php

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

$sql = "EXEC [dbo].[SelectEonetEvents]";
$stmt = sqlsrv_query($conn, $sql);

if ($stmt === false) {
    die(print_r(sqlsrv_errors(), true));
} else {
    $events = array();
    while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
        $events[] = $row;
    }

    header('Content-Type: application/json');
    echo json_encode($events);
}

sqlsrv_free_stmt($stmt);
sqlsrv_close($conn);

?>
