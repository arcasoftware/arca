<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="./assets/css/style.css" rel="stylesheet" />
</head>
<body>
    
<?php




if (isset($_POST['idUser']) &&  ($_POST['idUser']!= "")) {
   require("./modelo/modelo.php");
   $userid = $_POST['idUser'];

   $datos= new servicioDatos();
   $user= $datos->getUsuario($userid);
   $usuario = json_decode($user);
  

?>

<div class="todoTabla ">
     <div class="celda txtTitulo"> ID</div>
     <div class="celda txtTitulo"> Nombre </div>
     <div class="celda txtTitulo"> Apellido </div>
     <div class="celda txtTitulo"> Tipo Documento</div>
     <div class="celda txtTitulo"> No Documeto</div>
</div>

<?php

    ?>
    <div class="todoTabla ">
     <div class="celda "> <?php  echo  $usuario->ID; ?>  </div>
     <div class="celda "> <?php  echo  $usuario->Nombre; ?> </div>
     <div class="celda "> <?php  echo  $usuario->Apellido; ?> </div>
     <div class="celda "> <?php  echo  $usuario->TipoDocumento_ID; ?> </div>
     <div class="celda "> <?php  echo  $usuario->DocumentoIdentidad; ?> </div>
</div>

      <?php
  
}


?>



</body>
</html>