<?php

//use function PHPSTORM_META\type;

include_once('db.php');
header("Content-Type: text/txt; charset=utf-8");
$db_handler = db::concectar();
$pdo = $db_handler->prepare('SELECT * FROM asignaturas');
$pdo->execute();
$resultado=[];
while ($row=$pdo->fetch(PDO::FETCH_ASSOC)) {
    $resultado[]=$row;
}
$jason = json_encode($resultado);
echo $jason;
