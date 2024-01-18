<?php

use function PHPSTORM_META\type;

include_once('db.php');
header("Content-Type: text/txt; charset=utf-8");
$db_handler=db::concectar();
$pdo=$db_handler->prepare('SELECT * FROM usuarios');
$pdo->execute();
$id=$pdo->rowCount()+1;
$parametros= array(':id'=>$id, ':usuario'=>$_POST['usuario'],':pass'=>$_POST['pass'],':email'=>$_POST['email'],':telefono'=>$_POST['telefon']);
echo ($_POST['telefon']);
print_r($parametros);
$pdo=$db_handler->prepare('INSERT INTO usuarios VALUES (:id, :usuario, :pass, :email, :telefono, now())');
$pdo->execute($parametros);
if ($pdo->rowCount()==1) {
   echo $resultado='Usuario Registrado';
}else {
   echo $resultado='Error en registro';
}

?>
