<?php

$usuario = $_POST["usuario"];
$pass = $_POST["pass"];

if($usuario === "" || $pass === "") {
    //echo json_encode("error");
    $respuesta->estado = false;
    $respuesta->mensaje = "error";
}
else {
    //echo json_encode("Usuario: " . $usuario);
    $respuesta->estado = true;
    $respuesta->mensaje = "Usuario: " . $usuario . " ";
    $respuesta->mensaje.= "Contraseña: " . $pass;
}

echo json_encode($respuesta);