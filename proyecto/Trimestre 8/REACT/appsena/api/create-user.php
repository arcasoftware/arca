<?php
include("../class/crud.php");
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$crud = new Crud();

if($_SERVER["REQUEST_METHOD"] === "POST")
{
$data = array();
//parsejson_decode_str(file_get_contents('php://input'),$data);
$data = json_decode(file_get_contents('php://input'),true);

//var_dump(json_decode(file_get_contents('php://input'), true));

$id_usuario = $data["id_usuario"];
$nombre_usuario = $data["nombre_usuario"];
$correo_usuario = $data["correo_usuario"];
$clave_usuario = $data["clave_usuario"];
$foto_usuario = $data["foto_usuario"];


$sql = "insert into usuarios (id_usuario,nombre_usuario,correo_usuario,clave_usuario,foto_usuario,rol_usuario, upload_date) values ('$id_usuario','$nombre_usuario','$correo_usuario','$clave_usuario','$foto_usuario', 'user' ,NOW())";
$res = $crud->create($sql);


if ($res)
{
	$result = array("status" => true , "message" => "Product Added Succefully...");
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
