
<div class="container">
<div class="d-flex justify-content-center">
<div class="row">
<div class="col-md-12 table-responsive" >
   <table class="table table-bordered border-primary" style="text-align:center" >
    <thead>
        <tr>
        <th scope="col">Seleccionar</th>
        <th scope="col">Cedula</th>
        <th scope="col">Nombres</th>
        <th scope="col">Apellidos</th>
        <th scope="col">Telefono</th>
        <th scope="col">Correo</th>
        </tr>
    </thead>
    <tbody>
    <?php
    include_once 'crud/conexion.php';
        if(isset($_POST['btnbuscar']))
        {
            $buscar=$_POST['txtbuscar'];
            $queryusuarios=mysqli_query($conexion,"SELECT doc,nombre,apellido,tel,email,cargo FROM usuarios WHERE doc LIKE '".$buscar."%'");
        }
        else
        {
            $queryusuarios=mysqli_query($conexion,"SELECT * FROM usuarios ORDER BY doc ASC");
        }
 
            while($mostrar=mysqli_fetch_array($queryusuarios)){
            
            if($mostrar['cargo']!=1){
            echo "<tr>";
            echo "<td><div class='form-check' >
            <input  class='form-check-input' type='checkbox' value='' data-doc-usuario='" . $mostrar['doc'] . "' style='text-align:center' onchange='toggleButtons(this)'/>
            </div></td>";
            echo "<td>"; echo $mostrar['doc']; echo "</td>";
            echo "<td>"; echo $mostrar['nombre']; echo "</td>";
            echo "<td>"; echo $mostrar['apellido']; echo "</td>";
            echo "<td>"; echo $mostrar['tel']; echo "</td>";
            echo "<td>"; echo $mostrar['email']; echo "</td>";
            echo "</tr>";
        }
    }
        ?>
    </tbody>
    </table>
    </div>
    </div>
    </div>
    </div>
    <div class="container">
        <div class="d-flex justify-content-around">
            <div class="row">
            <table class="table-responsive">
                <tr>
                    <td><a class="btn btn-primary" id="addButton" onclick="abrirform()">Agregar</a></td>
                    <td><a href="../administrador/crud/visualizar.php?doc=<?php echo $mostrar['doc'];?>"   class="btn btn-primary" id="viewButton">Visualizar</a></td>
                    <td><a href="../administrador/crud/editar.php?doc=<?php echo $mostrar['doc'];?>"   class="btn btn-primary" id="editButton">Editar</a></td>
                    <td><a href="../administrador/crud/eliminar.php?doc=<?php echo $mostrar['nombre']; ?>"
               class="btn btn-primary delete-button" id="deleteButton"
               onClick="javascript: return confirm('¿Estás seguro de eliminar a <?php echo $mostrar['nombre']; ?>?')">Eliminar</a></td>
                </tr> 
            </table>
            </div>
        </div>
    </div>
    <td><a href="..\crud\eliminar.php?doc=<?php echo $mostrar['nombre']; ?>" class="btn btn-primary delete-button" id="deleteButton">Eliminar</a></td>

<script>
    var deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var confirmDelete = confirm('¿Estás seguro de eliminar este registro?');

            if (!confirmDelete) {
                event.preventDefault(); // Evita que el enlace se ejecute si se cancela la eliminación
            }
        });
    });
</script>