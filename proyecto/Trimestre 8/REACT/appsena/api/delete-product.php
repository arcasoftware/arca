<?php
include("../class/crud.php");
header("Access-Control-Allow-Origin: *");
header("Content-type:application/json"); 

$crud = new Crud();

if($_SERVER["REQUEST_METHOD"] == "DELETE")
{
$sql = "delete from productos where id_producto=".$_GET['id_producto'];
$res = $crud->deletes($sql); 

if ($res)
{
	$result = array("status" => true , "message" => "Product deleted Succefully...");
}
else
{
	$result = array("status" => false , "message" => "Something went wrong...");
}

echo json_encode($result);
}
else
{
	 $error = array("status" => 405 , "message" => 'Method not allowed...');
	 
echo json_encode($error);
} 