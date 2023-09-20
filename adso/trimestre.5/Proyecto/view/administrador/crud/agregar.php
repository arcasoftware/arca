<?php

include_once ('..\crud\conexion.php');

    $cedula=$_POST['cedula'];
    $nombre=$_POST['nombre'];
    $apellido=$_POST['apellido'];
    $telefono=$_POST['telefono'];
    $correo=$_POST['email'];
    $direccion=$_POST['direccion'];
    $contraseña=$_POST['contraseña'];
    $genero=$_POST['genero'];
    $fecha=$_POST['fecha'];
   

    mysqli_query($conexion,"INSERT INTO usuarios(doc,nombre,apellido,tel,email,direccion,
    clave,genero,fecha_naci,cargo) VALUES ('$cedula','$nombre','$apellido','$telefono','$correo'
    ,'$direccion','$contraseña','.$contraseña.','$fecha','2')");

    header("Location:..\clientes.php");

?>