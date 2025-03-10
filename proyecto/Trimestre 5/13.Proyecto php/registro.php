<?php

/* 
En ocaciones el usuario puede volver al login
aun si ya exixte una sesion iniciada lo correcto
es no mostrar otra vez el login sino redireccionarlo
a su pagina principal mientras exista un sesion entonces 
creamos un archivo que controle el redireccionamiento
*/

session_start();

  // isset verifica si existe una variable
  if(isset($_SESSION['id'])){
    header('location: controller/redirec.php');
  }

?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Login</title>

    <!-- Importamos los estilos de Bootstrap -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Font Awesome: para los iconos -->
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <!-- Sweet Alert: alertas JavaScript presentables para el usuario  -->
    <link rel="stylesheet" href="css/sweetalert.css">
    <!-- Estilos personalizados: archivo personalizado 100% real no feik -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Personalizado daniel  -->
    <link href="css/stylesg.css" rel="stylesheet" type="text/css" media="all">
  </head>


<?php

  include 'includeUsuario/header.php';


?>



  <body>

   <!-- 
    Las clases que se utlizan y los divs son de Bootstrap
-->

<!-- Formulario Login -->
<div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-4 col-md-offset-4">
          <!-- Margen superior (css personalizado )-->
          <div class="spacing-1"></div>

          <form id="formulario_registro">
            <!-- Estructura del formulario -->
            <fieldset>

              <legend class="center">Registro</legend>

              <!-- Caja de texto para usuario -->
              <label class="sr-only" for="user">Nombre</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-user"></i></div>
                <input type="text" class="form-control" name="name" placeholder="Ingresa tu nombre">
              </div>

              <!-- Div espaciador -->
              <div class="spacing-2"></div>


              <!-- Caja de texto para apellido -->
              <label class="sr-only" for="user">Apellido</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-user"></i></div>
                <input type="text" class="form-control" name="apellido" placeholder="Ingresa tu apellido">
              </div>

                <!-- Caja de texto para el Genero -->
                <div class="input-group">
                            <div class="input-group-addon"><label for="genero">Genero:</label>
                                <select name="genero" id="genero">
                                    <option value="Hombre">Hombre</option>
                                    <option value="Mujer">Mujer</option>
                                </select>
                            </div>
                        </div>
              
              
              <!-- Div espaciador -->
              <div class="spacing-2"></div>

              <!-- Caja de texto para la fecha de nacimiento  -->
              <label class="sr-only" for="user">Fecha nacimiento</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-user"></i></div>
                <input type="date" class="form-control" name="fecha_naci">
              </div> 


               <!-- Div espaciador -->
               <div class="spacing-2"></div>


                <!-- Caja de texto para el tipo de documento -->
                <div class="input-group">
                            <div class="input-group-addon"><label for="genero">Tipo de documento:</label>
                                <select name="tipo_doc" id="tipo_doc">
                                    <option value="CC">CC</option>
                                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                </select>
                            </div>
                        </div>


             <!-- Div espaciador -->
              <div class="spacing-2"></div>

              <!-- Caja de texto para numero de documento  -->
              <label class="sr-only" for="user">No Documento</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-user"></i></div>
                <input type="number" class="form-control" name="doc" placeholder="Ingresa tu numero de documento ">
              </div> 
                      <!-- Div espaciador
              <div class="spacing-2"></div>

              Caja de texto para email 
              <label class="sr-only" for="user">Email</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-user"></i></div>
                <input type="text" class="form-control" name="email" placeholder="Ingresa tu email">
              </div> -->

              <!-- Div espaciador -->
              <div class="spacing-2"></div>

              <!-- Caja de texto para Documento -->
              <label class="sr-only" for="user">Documento</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-user"></i></div>
                <input type="text" class="form-control" name="email" placeholder="Ingresa tu Email">
              </div>

              
              <!-- Div espaciador -->
              <div class="spacing-2"></div>

              <!-- Caja de texto para Direccion -->
              <label class="sr-only" for="user">Direccion</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-user"></i></div>
                <input type="text" class="form-control" name="direccion" placeholder="Ingresa tu Direccion">
              </div>

              
              <!-- Div espaciador -->
              <div class="spacing-2"></div>

              
              <!-- Caja de texto para Telefono -->
              <label class="sr-only" for="user">telefono</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-user"></i></div>
                <input type="tel" class="form-control" name="tel" placeholder="Ingresa tu Telefono">
              </div>

              <!-- Div espaciador -->
              <div class="spacing-2"></div>

              <!-- Caja de texto para la clave-->
              <label class="sr-only" for="clave">Contraseña</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-lock"></i></div>
                <input type="password" autocomplete="off" class="form-control" name="clave" placeholder="Ingresa tu clave">
              </div>

              <!-- Div espaciador -->
              <div class="spacing-2"></div>

              <!-- Caja de texto para la clave-->
              <label class="sr-only" for="clave">Verificar contraseña</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-lock"></i></div>
                <input type="password" autocomplete="off" class="form-control" name="clave2" placeholder="Verificar clave">
              </div>

              <!-- Animacion de load (solo sera visible cuando el cliente espere una respuesta del servidor )-->
              <div class="row" id="load" hidden="hidden">
                <div class="col-xs-4 col-xs-offset-4 col-md-2 col-md-offset-5">
                  <img src="img/load.gif" width="100%" alt="">
                </div>
                <div class="col-xs-12 center text-accent">
                  <span>Validando información...</span>
                </div>
              </div>
              <!-- Fin load -->

              <!-- Div espaciador -->
              <div class="spacing-2"></div>
                        <center>
                            <div><input type="checkbox" class="che"><a href="#">Estoy de acuerdo con Terminos y Condiciones</a></div>
                        </center>

            <!-- Boton Login para activar la funcion click y enviar los datos mediante ajax --> 
            <div class="row">
                <div class="col-xs-8 col-xs-offset-2 ">
                  <div class="spacing-2"></div>
                    <button type="button" class="btn btn-primary btn-block" name="button" id="registro">Registrate</button>
                </div>
              </div>

            </fieldset>
          </form>
        </div>
      </div>
    </div>

<!-- Final formulario login -->

 <!-- Jquery -->
 <script src="js/jquery.js"></script>
    <!-- Bootstrap js -->
    <script src="js/bootstrap.min.js"></script>
    <!-- SweetAlert js -->
    <script src="js/sweetalert.min.js"></script>
    <!-- Js personalizado -->
    <script src="js/operaciones.js"></script>
  </body>

  <br><br><br><br><br><br><br>
    <?php 
    include '/xampp/htdocs/Proyecto/includeUsuario/footer.php';
?>

</html>
