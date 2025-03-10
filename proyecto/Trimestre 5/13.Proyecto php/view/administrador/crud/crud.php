<style>
    #editButton, #deleteButton, #viewButton {
        display: none;
    }
</style>

<script type="text/javascript">
    var lastChecked = null;

    function toggleButtons(checkbox) {
        var addButton = document.getElementById('addButton');
        var editButton = document.getElementById('editButton');
        var deleteButton = document.getElementById('deleteButton');
        var viewButton = document.getElementById('viewButton')

        if (lastChecked && lastChecked !== checkbox) {
            lastChecked.checked = false;
        }

        if (checkbox.checked) {
            lastChecked = checkbox;

            addButton.style.display = 'none';
            editButton.style.display = 'inline-block';
            deleteButton.style.display = 'inline-block';
            viewButton.style.display='inline-block';

            // Obtener el valor data-doc-usuario del checkbox seleccionado
            var docUsuario = checkbox.getAttribute('data-doc-usuario');
            console.log("Valor data-doc-usuario: " + docUsuario);

            // Agregar el valor de docUsuario a los enlaces de edición y eliminación
            var editLink = document.getElementById('editButton');
            editLink.href = "../administrador/crud/editar.php?doc=" + docUsuario;

            var deleteLink = document.getElementById('deleteButton');
            deleteLink.href = "../administrador/crud/eliminar.php?doc=" + docUsuario;

            var viewLink = document.getElementById('viewButton');
            viewLink.href = "../administrador/crud/visualizar.php?doc=" + docUsuario;

        } else {
            lastChecked = null;
            addButton.style.display = 'inline-block';
            editButton.style.display = 'none';
            deleteButton.style.display = 'none';
            viewButton.style.display= 'none';
        }
    }
</script>
