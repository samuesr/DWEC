<?php 
header('Content-Type: text/txt; charset=utf-8');

require_once('db.php');

//Creamos la conexión
$db_handler = db::concectar();
$parametros= array ()
$pdo= $db_handler->prepare();
$pdo->execute($parametros);


if($pdo->rowCount()>0){
    $disponible='si';
}else{$disponible='no';}
echo $disponible;

//generamos la consulta
$sql = "select * from usuarios where nombre="$_GET['nombre']";";
mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

if(!$resultado = mysqli_query($conexion, $sql)) die();


$peliculas = array(); //creamos un array

while($row = mysqli_fetch_array($resultado)) 
{ 
    $codigoPel=$row['codigoPel'];
    $nacionalidad=$row['nacionalidad'];
    $productora=$row['productora'];
    $codigoD=$row['codigoD'];

    $peliculas[] = array('codigoPel'=> $codigoPel, 'nacionalidad'=> $nacionalidad, 'productora'=> $productora, 'codigoD'=> $codigoD);

}

/*

while ($row=mysqli_fetch_array($resultado))
{
  $peliculas[]=$row;
}
*/


    
//desconectamos la base de datos
$close = mysqli_close($conexion) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
  

//Creamos el JSON
$json_string = json_encode($disponible);
echo $json_string;




?>