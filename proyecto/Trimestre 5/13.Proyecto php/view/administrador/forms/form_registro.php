<script>
    function abrirform(){
        
        document.getElementById("formregistrar").style.display="block";
        document.getElementById("contenedor-busqueda").style.display="none";

    }
    function cancelarform(){
        document.getElementById("formregistrar").style.display="none";
        document.getElementById("contenedor-busqueda").style.display="block";
    }
</script>

<div class="caja_popup" id="formregistrar">
    <form action="crud\agregar.php" class="contenedor_popup" method="POST">
        <div class="container">
        <div class="d-flex justify-content-center">
        <div class="row">
        <div class="col-md-12 table-responsive" >
        <table class="table table-bordered border-primary" style="text-align:center" >
            <tbody>
                <tr>
                    <th colspan="2">Nuevo cliente</th>
                </tr>
                <tr>
                    <td>Cedula</td>
                    <td><input type="number" name="cedula" required></td>
                </tr>
                <tr>
                    <td>Nombres</td>
                    <td><input type="text" name="nombre"></td>
                </tr>
                <tr>
                    <td>Apellidos</td>
                    <td><input type="text" name="apellido"></td>
                </tr>
                <tr>
                    <td>Telefono</td>
                    <td><input type="number" name="telefono"></td>
                </tr>
                <tr>
                    <td>Correo</td>
                    <td><input type="e-mail" name="email"></td>
                </tr>
                <tr>
                    <td>Direccion</td>
                    <td><input type="text" name="direccion"></td>
                </tr>
                <tr>
                    <td>Contraseña</td>
                    <td><input type="password" name="contraseña"></td>
                </tr>
                <tr>
                    <td>Genero</td>
                    <td><input type="text" name="genero"></td>
                </tr>
                <tr>
                    <td>Fecha de nacimiento</td>
                    <td><input type="date" name="fecha"></td>
                </tr>

                <tr>
                    <td colspan="2">
                        <button type="button" class="btn btn-outline-primary" onclick="cancelarform()">Cancelar</button>
                        <input type="submit" class="btn btn-outline-primary" name="btnregistrar" value="Registrar" onclick= "javascript:return confirm
                        ('¿Deseas registrar a este usuario?');">
                    </td>
                </tr>
            </table>
        </form>
        </div>
        </div>
        </div>
    </div>


    </div>