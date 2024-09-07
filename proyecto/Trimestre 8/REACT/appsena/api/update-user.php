<?php
include("../class/crud.php");
header("Access-Control-Allow-Origin: *");
header("Content-type:application/json");

$crud = new Crud();


if($_SERVER["REQUEST_METHOD"] === "PUT")
{

$data = array();
//parsejson_decode_str(file_get_contents('php://input'),$data);
$data = json_decode(file_get_contents('php://input'),true);


$nombre_usuario = $data["nombre_usuario"];
$correo_usuario = $data["correo_usuario"];
$clave_usuario = $data["clave_usuario"];
$foto_usuario = $data["foto_usuario"];

$sql = "update usuarios set nombre_usuario = '$nombre_usuario' , correo_usuario = '$correo_usuario', clave_usuario = '$clave_usuario' , foto_usuario = '$foto_usuario'  where id_usuario=".$_GET['id_usuario'];
$res = $crud->update($sql);


if ($res)
{
	$result = array("status" => true , "message" => "Product Updated Succefully...");
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