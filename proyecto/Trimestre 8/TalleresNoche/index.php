<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taller</title>
</head>

<body>
    <?php
echo "Hola Todos";



//$api = "https://jsonplaceholder.typicode.com/users";
//$api = "https://pokeapi.co/api/v2/pokemon/?offset=00&limit=10";

//$api = "https://pokeapi.co/api/v2/pokemon/1/";

$api = "http://192.168.11.80/paz_y_salvo2/controlador/UsuarioControlador.php";

$ch = curl_init($api );
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
$response = curl_exec($ch);
curl_close($ch);
if(!$response) {
    return false;
}else{
    var_dump($response);
    /*
    echo "<pre>";
    var_dump(json_decode($response));
    echo "<pre/>";
   $values = json_decode($response);
  */

  
  $values = json_decode($response);

  echo "<pre>";
  //  var_dump($values);
    echo "<pre/>";

        foreach ((array)$values ->results as  $item) {
         if ((isset($item->name)) && ($item->name != '') ) { 
            if ((isset($item->url)) && ($item->url != '') ) { 
           //var_dump($item);
           echo " Nombre ".$item->name."<br>";
           echo " URL ".$item->url."<br>";
        }
    }



  /*
   foreach ((array)$values as  $results) {
 
    foreach ((array)$results as  $item) {
     if ((isset($item->name)) && ($item->name != '') ) { 
        if ((isset($item->url)) && ($item->url != '') ) { 
       //var_dump($item);
       echo " Nombre ".$item->name."<br>";
       echo " URL ".$item->url."<br>";
    }
}

 


    
}
 
    */
   }

    
  
}

?>
</body>

</html>