<?php 
header('Content-Type: text/txt; charset=utf-8');

require_once('db.php');

//Creamos la conexión
$db_handler =db::concectar();
$parametros=array(':nombre'=>$_GET['nombre']);
$pdo=$db_handler->prepare('SELECT * FROM USUARIOS WHERE nombre=:nombre');
$pdo->execute($parametros);
if($pdo->rowCount()>=1){
    $disponible[]= ['disponible'=>'Usuario ya registrado'];
}else{ $disponible[]= ['disponible'=>'Usuario no registrado'];}

//Creamos el JSON
$json_string = json_encode($disponible);
echo $json_string;
?>