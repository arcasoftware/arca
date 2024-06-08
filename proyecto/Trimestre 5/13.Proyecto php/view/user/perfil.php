<?php

session_start();

require_once("../../model/conexion.php");

$db = new Conexion();


?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tu Perfil</title>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <link rel="stylesheet" href="/Proyecto/css/bootstrap.min.css">
  <!-- Font Awesome: para los iconos -->
  <link rel="stylesheet" href="/Proyecto/css/font-awesome.min.css">
  <!-- Sweet Alert: alertas JavaScript presentables para el usuario  -->
  <link rel="stylesheet" href="/Proyecto/css/sweetalert.css">
  <!-- Estilos personalizados: archivo personalizado 100% real no feik -->
  <link rel="stylesheet" href="/Proyecto/css/style.css">
  <!-- Personalizado daniel  -->
  <link href="/Proyecto/css/stylesg.css" rel="stylesheet" type="text/css" media="all">

</head>


<?php
require_once '/xampp/htdocs/Proyecto/includeUsuario/header.php';
require_once '../conexion/conexion.php';
?>

<body>

  <?php
$usuario = $_SESSION['apellido'];
echo $usuario;

echo '<pre>';
  var_dump($_SESSION['id']);
  var_dump($_SESSION['apellido']);
  var_dump($_SESSION['email']);
  var_dump($_SESSION['nombre']);
echo '</pre>';




      $datos = mysqli_query($conexion, "SELECT * FROM usuarios"); 

     if (!isset($datos)){


      $_SESSION['apellido'] = $datos['apellido'];

   echo '<pre>';
   var_dump($_SESSION['apellido']) ;
   echo '</pre>';

   }

  // $datos = "SELECT * FROM usuarios";
  // require_once '../conexion/conexion.php';
  // $resultado = $conexion->query($datos) or die("Error de conexion" . mysqli_error($conexion));


  // $file = $resultado->fetch_assoc();
  // $_SESSION['id'] = $file['id'];
  // $_SESSION['nombre'] = $file['nombre'];
  // $_SESSION['apellido'] = $file['apellido'];
  // $_SESSION['email'] = $file['email'];
  // $_SESSION['genero'] = $file['genero'];
  // $_SESSION['fecha_naci'] = $file['fecha_naci'];
  // $_SESSION['tipo_doc'] = $file['tipo_doc'];
  // $_SESSION['doc'] = $file['doc'];
  // $_SESSION['tel'] = $file['tel'];
  // $_SESSION['direccion'] = $file['direccion'];



  echo " 
        <div class = 'container '>

          <div class = 'perfil mx-auto'>

            <h1 class='text-center my-5'>Perfil de" . ' ' . ucfirst($_SESSION['nombre']) . ' ' . ucfirst($_SESSION['apellido']) . "</h1>

            <div class='row'>

            <div class='col-sm-5 center'>
              <img src='header/img/logo.jpg' alt='Imagen perfil' class = 'rounded-circle' width= '100px' height='100px'>
              <p>" . ucfirst($_SESSION['nombre']) . ' ' . ucfirst($_SESSION['apellido']) . "</p>
            </div>

            <div class = 'col-sm-5'>
              <p>Nombre: " . $_SESSION['nombre'] . "
              <p>Apellido: " . $_SESSION['apellido'] . "
              <p>Correo: " . $_SESSION['email'] . "
              <p>Genero: " . $_SESSION['genero'] . "
              <p>Fecha de Nacimiento: " . $_SESSION['fecha_naci'] . "
              <p>Tipo de documento: " . $_SESSION['tipo_doc'] . "
              <p>Documento de Identidad: " . $_SESSION['doc'] . "
              <p>Telefono: " . $_SESSION['tel'] . "          
              <p>Direccion: " . $_SESSION['direccion'] . "          
            </div>


            <div class = 'col-sm-2'>             
                <a href='configuracion/editar.php?id=" . $_SESSION['id'] . "'><button class='btn-event' style = border:none ;><i class='fa fa-edit' style='font-size:20px'></i></button></a>
                <div class= 'vr'></div>
                <a href='configuracion/eliminar.php?id=" . $_SESSION['id'] . "'><button class='btn-enviar' style = border:none ;><i class='fa fa-trash' style='font-size:20px'></i></button></a>
            </div>
          
          </div>

        </div>";


  ?>



  <!-- Mostrar nombre actual -->
  <div class="inf">Nombre: <?php echo $_SESSION['nombre']; ?></div>
  <div class="inf">Apellido: <?php echo $_SESSION['apellido']; ?></div>

  <!-- Formulario para cambiar el nombre -->
  <form action="configuracion/editar.php" method="POST" class="configuracion">
    <label for="">Nuevo Nombre:</label>
    <input type="text" name="nombre" id="nombre" value="">
    <input type="text" name="id" id="id" value="">
    <button type="submit">Cambiar Nombre</button>
  </form>

  <button type="button" class="mostrar-config"> Editar <i class="fa fa-edit" style="font-size:24px"></i></button>
  </div>
  <div class="inf">Correo: <?php echo ($_SESSION['email']); ?></div>
  <div class="inf">Telefono: <?php echo ($_SESSION['tel']); ?></div>
  <div class="inf">Genero: <?php echo ($_SESSION['genero']); ?></div>
  <div class="inf">Fecha Nacimiento: <?php echo ($_SESSION['fecha_naci']); ?></div>
  <div class="inf">Tipo Document: <?php echo ($_SESSION['tipo_doc']); ?></div>
  <div class="inf">doc: <?php echo ($_SESSION['doc']); ?></div>
  </div>
  </div>
  </div>


  <script src="../../js/app.js" type="text/javascript"></script>


  </div>
</body>

<br><br><br><br><br><br><br>
    <?php 
    include '/xampp/htdocs/Proyecto/includeUsuario/footer.php';
?>

</html>