<?php 
include_once('db.php');
$db_handler= db::concectar();
$parametros= array(':id'=>$_GET['id']);
$pdo=$db_handler->prepare('SELECT alumnos.clave_alumno, alumnos.nombre,alumnos.edad, alumnos.curso_actual FROM matriculas JOIN alumnos ON matriculas.clave_alumno=alumnos.clave_alumno WHERE matriculas.clave_asignatura=:id');
$pdo->execute($parametros);
$resultado=[];
while ($row=$pdo->fetch(PDO::FETCH_ASSOC)) {
    $resultado[]=$row;
}
$jason=json_encode($resultado);
echo $jason;
?>