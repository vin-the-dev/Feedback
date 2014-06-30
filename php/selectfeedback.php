<?php

ini_set('display_errors',true);
error_reporting(E_ALL);

// $http_origin = $_SERVER['HTTP_ORIGIN'];
// header('Content-type: application/json');



$con=mysqli_connect("109.203.122.141","vin","joker@123","feedback");

$sql_q = "SELECT * FROM `feedback_main`";

$res = $con->query($sql_q);

echo $sql_q;

echo $res;

?>