<?php

// ini_set('display_errors',true);
// error_reporting(E_ALL);

$http_origin = $_SERVER['HTTP_ORIGIN'];
header('Content-type: application/json');


$company = $_POST['company'];
$value1 = $_POST['value1'];
$value2 = $_POST['value2'];
$value3 = $_POST['value3'];
$custEmail = $_POST['custEmail'];
$custPhone = $_POST['custPhone'];
$createdBy = $_POST['createdBy'];

$con=mysqli_connect("109.203.122.141","vin","joker@123","feedback");

$sql_q = "INSERT INTO `feedback_main`(`COMPANY`, `VALUE1`, `VALUE2`, `VALUE3`, 
	`CUST_EMAIL`, `CUST_PHONE`, `CREATED_BY`) 
	VALUES 
	(".$company.",".$value1.",".$value2.",".$value3.",'".$custEmail."','".$custPhone."',".$createdBy.")";


$res = $con->query($sql_q);

// echo $sql_q;

echo $res;

?>