<?php

    // Se obtienen los datos enviados del formulario
   
    $cod_materia_pri= $_POST['cod_materia_pra'];
    $referencia= $_POST['referencia'];
    $descripcion= $_POST['descripcion'];
    $existencia= $_POST['existencia'];
    $entrada= $_POST['entrada'];
    $salida= $_POST['salida'];
    $stock= $_POST['stock'];
   
    //Se verifica que ningun dato este vacio
  if(empty($cod_materia_pri) || empty($referencia) || empty($descripcion) || empty($existencia) || empty($entrada) 
  || empty($salida) || empty($stock))
  {

    echo 'error_1'; // Un campo esta vacio y es obligatorio

  }
  else{
    try{

        # Incluimos la clase MAT_PRIMA
        require_once('../../model/mat_prima.php');

        # Creamos un objeto de la clase materia prima
        $mat_prima = new Mat_prima();

        # Llamamos al metodo editar materia prima para realizar el update de los datos en la base de datos
        $respuesta=$mat_prima-> update_mat_prima($cod_materia_pri,$referencia,$descripcion,$existencia,$entrada,$salida,$stock);
      // se redirecciona a materia prima despues de realizar el update
      
      echo $respuesta;

    }catch(PDOException $e){
      echo 'Error en el registro';
    }
  }
?>
