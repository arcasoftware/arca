<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokémon API</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Pokémon API</h1>
    <div class="pokemon-list">
        <?php

        echo "Hola mundo <br> <br>";

        $curl = curl_init();
        $api = "";
        curl_setopt($curl, CURLOPT_URL,  $api);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $reponse = curl_exec($curl);

        if (!$reponse) {
            echo "Error en la lectura de la API";
            return false;
        } else {

            curl_close($curl);
            $value = json_decode($reponse);

            foreach ((array)$value  as  $results) {
                foreach ((array)$results as $item) {
                    if (isset($item->name) && $item->name != '') {

                        echo '<div class="pokemon-item">';
                        echo '<h2>Nombre: ' . $item->name . '</h2>';
                        echo '<p>Link: <a href="' . $item->url . '">' . $item->url . '</a></p>';
                        echo '</div>';
                    }
                }
            }
        }
        ?>
    </div>
</body>

</html>