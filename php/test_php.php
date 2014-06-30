<?php

ini_set('display_errors',true);
error_reporting(E_ALL);

$http_origin = $_SERVER['HTTP_ORIGIN'];
header('Content-type: application/json');

$con=mysqli_connect("locatlhost","kadamman_feed","joker@123","kadamman_feedback");

$sql_q = "SELECT * from feedback_main";


// $sql_q = $sql_q . " WHERE `i-m-o-number` IN (".implode($imo,"','").")";

// echo $sql_q;
$res = $con->query($sql_q);

$results;

while($row = mysqli_fetch_array($res,MYSQLI_ASSOC)) {
	$results[] = $row;
}

echo json_encode($results);

?>