<?php
include("../class/crud.php");
header("Access-Control-Allow-Origin: *");
header("Content-type:application/json");

$crud = new Crud();


if($_SERVER["REQUEST_METHOD"] === "POST")
{
$data = array();
//parsejson_decode_str(file_get_contents('php://input'),$data);
$data = json_decode(file_get_contents('php://input'),true);

//var_dump(json_decode(file_get_contents('php://input'), true));


$correo_usuario = $data["correo_usuario"];
$clave_usuario = $data["clave_usuario"];


$sql = "select * from usuarios where correo_usuario='".$correo_usuario."' and clave_usuario='".$clave_usuario."'";

$res = $crud->read($sql);

$count = mysqli_num_rows($res);

if($count > 0)
{
  $getdata = array();

   while($row = mysqli_fetch_array($res))
	{
	$getdata[] = $row;
    }
 $result = array("status" => true , "alldata" => $getdata);
}
else
{
	$result = array("status" => false , "message" => 'usuario no registrado...');
}

echo json_encode($result);
}
else
{
	 $error = array("status" => 405 , "message" => 'Method not allowed...');

echo json_encode($error);
}