<?php 

// pagina con todas la propiedades de administrador del software

session_start();

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Categorias</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
   
   <link rel="stylesheet" href="../../css/bootstrap.min.css">
       <!-- Font Awesome: para los iconos -->
       <link rel="stylesheet" href="../../css/font-awesome.min.css">
       <!-- Sweet Alert: alertas JavaScript presentables para el usuario  -->
       <link rel="stylesheet" href="../../css/sweetalert.css">
       <!-- Estilos personalizados: archivo personalizado 100% real no feik -->
       <link rel="stylesheet" href="../../css/style.css">
       <!-- Personalizado daniel  -->
       <link href="../../css/stylesg.css" rel="stylesheet" type="text/css" media="all">
</head>

<?php 
require_once '/xampp/htdocs/Proyecto/includeUsuario/header.php'; 
?>
<body>


<div class="imagenindex">

<h1>Categorias</h1>

</div>

    <main class="container">


    
   
         
        <section class="categorias">

            <div class="listado-categorias">
                
                <div class="categoria">
                    <img src="../../img/Promociones.jpg" alt="img promociones">
                        <div class="texto-categoria">
                            <a href="../../carrito//catcombos.php">Combos</a>
                        </div><!--Informacion del producto-->
                </div><!--Produto-->

                <div class="categoria">
                    <img src="../../img/pollo.jpg" alt="img pollo">
                    
                        <div class="texto-categoria">
                            <a href="../../carrito/catpollo.php">Pollos</a>
                        </div> <!--Informacion del producto--> 
                </div><!--Produto-->

                <div class="categoria">
                    <img src="../../img/bebidas.jpg" alt="img bebida">             
                        <div class="texto-categoria">
                            <a href="../../carrito/catbebidas.php">Bebidas</a>
                        </div><!--Informacion del producto-->
                </div><!--Produto-->

                <div class="categoria">
                    <img src="../../img/pizza.jpg" alt="img pizza">
                        <div class="texto-categoria"> 
                            <a href="../../carrito/catpizza.php">Pizzas</a>
                        </div><!--Informacion del producto-->
                </div><!--Produto-->

                <div class="categoria">
                    <img src="../../img/especialidades.jpg" alt="img especialidades">
                        <div class="texto-categoria">
                            <a href="../../carrito/catespecialidades.php">Especialidades</a>
                        </div><!--Informacion del producto-->
                </div><!--Produto-->

                <div class="categoria">
                    <img src="../../img/hamburguesas.jpg" alt="img hamburguesa">
                        <div class="texto-categoria">
                        <a href="../../carrito/catburguer.php">Hamburguesas</a>
                    </div><!--Informacion del producto-->
                </div><!--Produto-->
            </div><!--Fin listados de productos-->
            
        </section>
    </main>

</body>

<br><br><br><br><br><br><br>
    <?php 
    include '/xampp/htdocs/Proyecto/includeUsuario/footer.php';
?>

</html>