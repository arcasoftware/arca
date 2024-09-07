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

$nombre_producto = $data["nombre_producto"]; 
$descripcion_producto = $data["descripcion_producto"]; 
$precio_producto = $data["precio_producto"];  
$foto_producto = $data["foto_producto"]; 
$id_categoria = $data["id_categoria"]; 
$nombre_categoria = $data["nombre_categoria"];  

$sql = "update productos set nombre_producto = '$nombre_producto' , descripcion_producto = '$descripcion_producto', precio_producto = '$precio_producto' , foto_producto = '$foto_producto' , id_categoria = '$id_categoria' , nombre_categoria = '$nombre_categoria' where id_producto=".$_GET['id_producto'];
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