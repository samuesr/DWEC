<?php

//use function PHPSTORM_META\type;

include_once('db.php');
header("Content-Type: text/txt; charset=utf-8");
$db_handler = db::concectar();
$pdo = $db_handler->prepare('SELECT * FROM usuarios');
$pdo->execute();
$id = $pdo->rowCount() + 1;
$parametros = array(':id' => $id, ':usuario' => $_POST['usuario'], ':pass' => $_POST['pass'], ':email' => $_POST['email'], ':telefono' => $_POST['telefon']);
$usu_mail= array (':usuario' => $_POST['usuario'],':email' => $_POST['email']);
$pdo = $db_handler->prepare('SELECT * FROM usuarios WHERE nombre=:usuario AND email=:email');
$pdo->execute($usu_mail);
if ($pdo->rowCount() == 0) {
   $pdo = $db_handler->prepare('INSERT INTO usuarios VALUES (:id, :usuario, :pass, :email, :telefono, now())');
   $pdo->execute($parametros);
   if ($pdo->rowCount() == 1) {
      $resultado = ['resultado' => 'Usuario Registrado'];
   } else {
      $resultado = ['resultado' => 'Error en registro'];
   }
} else {
   $resultado = ['resultado' => 'El usuario '.$_POST['usuario'].' ya existe'];
}

$jason = json_encode($resultado);
echo $jason;
