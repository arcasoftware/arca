
<header class="header imagen-header">

   <div class="contenedor-header">

    <div class="barra">

        <div class="img-logo">
            <a href="/Proyecto/index.php"><img src="/Proyecto/img/logo.jpg" alt="imagen logo" height="70px" height="70%"></a>
        </div>

        <div class="buscar">
        <form action="/Proyecto/includeUsuario/buscar.php" method="POST">
                    <div class="input-group">
                      
                        <input class="px-4" type="search" name="textbuscar" placeholder="&#128270; Buscar Producto" required>
                        <button  class="input-group-addon" type="submit" name="btnbuscar" style="border-radius:50%; width:30px; height:30px;"><i class='bi bi-search' ></i></button>
                    </div>

                </form>
        
        <nav class="rutas">

             
     
   
                <?php 
                    if (isset($_SESSION['nombre'])){
                        echo 
                        "<a href='/Proyecto/view/user/index.php'>Inicio</a>
                        <a href='/Proyecto/comollegar.php'>como llegar</a>
                        <a href='/Proyecto/view/categorias/categoriasuser.php'>Menu</a>
                        <a href='/Proyecto/view/user/sugerenciasuser.php'>Sugerencias</a>
                        <a href='/Proyecto/view/user/perfil.php'>perfil</a>
                        <a href='/Proyecto/controller/cerrarSesion.php'>Cerrar Sesion</a>
                        <a href='/Proyecto/carrito/carrito.php'>Carrito</a>";
                    }else{
                        echo "
                        
                        <a href='/Proyecto/index.php'>Inicio</a>
                        <a href='/Proyecto/comollegar.php'>como llegar</a>
                        <a href='/Proyecto/view/categorias/categorias.php'>Menu</a>
                        <a href='/Proyecto/sugerencias.php'>Sugerencias</a>
                        <a href='/Proyecto/login.php'>Iniciar Sesion</a>
                        <a href='/Proyecto/registro.php'>Registrarse</a>";
                    }
                ?>
    
        </nav>

        </div> <!--Fin Barra del header-->

            <div class="desplegue">
                <a href="/Proyecto/index.php">Inicio</a>
                <a href="/Proyecto/comollegar.php">Como llegar</a>
                <a href="/Proyecto/view/categorias/categorias.php">Menu</a>
                <a href="/Proyecto/sugerencias.php">Sugerencias</a>
                <a href="/Proyecto/login.php">Iniciar Sesion</a>
                <a href="/Proyecto/registro.php">Registrarse</a>
                <?php 
                    if (isset($_SESSION['nombre'])){
                        echo "<a href='/Proyecto/view/user/perfil.php'>Perfil</a>
                        <a href='/Proyecto/controller/cerrarSesion.php'>cerrar sesion</a>";
                    }else{
                        echo "<a href='/Proyecto/login.php'>Iniciar Sesion</a>
                        <a href='/Proyecto/registro.php'>Registrarse</a>";
                    }
                ?>

            </div>

    </div>
    <script src="/Proyecto/js/app.js" type="text/javascript"></script>

</header>