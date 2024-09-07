<?php 

Class servicioDatos
{

  
    private  $endPont = "http://192.168.11.80/paz_y_salvo2/controlador/UsuarioControlador.php";
    
    function api($url){
    $ch = curl_init($url );
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
    $response = curl_exec($ch);
    curl_close($ch);
    
        if(!$response) {
            return false;
        }else{
           return $response;
        
    }
}

public function getUsuarios() {
   
    $users = $this->api($this->endPont);

    if (!empty($users)) {
        return $users;
    }else {
        return ("error");
    }
}


public function getUsuario($id) {
    
    $user = $this->api($this->endPont."/".$id);

    if (!empty($user)) {
        return $user;
    }else {
        return ("error");
    }
}





}

?>