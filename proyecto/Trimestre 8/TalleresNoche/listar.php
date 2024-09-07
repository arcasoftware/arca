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
require("./modelo/modelo.php");

$datos= new servicioDatos();
$users= $datos->getUsuarios();
$usuarios = json_decode($users);
?>

<div class="todoTabla ">
     <div class="celda txtTitulo"> ID</div>
     <div class="celda txtTitulo"> Nombre </div>
     <div class="celda txtTitulo"> Apellido </div>
     <div class="celda txtTitulo"> Tipo Documento</div>
     <div class="celda txtTitulo"> No Documeto</div>
</div>

<?php
foreach ((array)$usuarios  as  $usuario) {
    ?>
    <div class="todoTabla ">
     <div class="celda "> <?php  echo  $usuario->ID; ?> 
     <form action="detalle.php" method="post">
        <input type="hidden" name="idUser" value="<?php  echo  $usuario->ID; ?>">
        <button type="submit"> Detale </button>
     </form>
    </div>
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