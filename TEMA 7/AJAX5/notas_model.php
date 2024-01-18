<!--//** Diseñar un método o funcion que reciba de parametro un identificador de notaas, 
borre de la tabla nota todas las notas con ese identificador, 
y debuelva el numero de notas borradas nombre DELETE*/-->
<?php
include_once("db.php");
//include_once("nota.php");

class Notas_model
{
    private $db_handler; //controla la conexion a la base de datos.
    public function __construct()
    {
        $this->db_handler = db::concectar();
    }
    public function delete($id)
    {
        $parametros = array(":id" => $id);
        $pdo = $this->db_handler->prepare("DELETE  FROM notas WHERE id = :id"); //aquí :id es todavía desconocido
        $pdo->execute($parametros); //aquí ya asocia el id a el id del array parámetros;
        return $pdo->rowCount();
    }
    public function delete_by_titulo($titulo)
    {
        $parametros = array(":titulo" => $titulo);
        $pdo = $this->db_handler->prepare("DELETE  FROM notas WHERE titulo = :titulo"); //aquí :id es todavía desconocido
        $pdo->execute($parametros); //aquí ya asocia el id a el id del array parámetros;
        return $pdo->rowCount();
    }
    public function delete_by_nota($nota)
    {
        $parametros = array(":id" => $nota->getid(), ":titulo" => $nota->gettitulo(), ":contenido" => $nota->getcontenido());
        $pdo = $this->db_handler->prepare("DELETE  FROM notas WHERE id=:id AND titulo = :titulo AND contenido= :contenido");
        $pdo->execute($parametros);
        return $pdo->rowCount();
    }
    public function delete_by_letter($letter)
    {
        $parametros = array(":titulo" => $letter . '%');
        $pdo = $this->db_handler->prepare("DELETE  FROM notas WHERE titulo LIKE :titulo");
        $pdo->execute($parametros);
        return $pdo->rowCount();
    }
    public function insert1($id, $titulo, $contenido)
    {
        $parametros = array(":id" => $id, ":titulo" => $titulo, ":contenido" => $contenido);
        $pdo = $this->db_handler->prepare("INSERT INTO notas (id,titulo,contenido) VALUES (:id, :titulo, :contenido)");
        try {
            $pdo->execute($parametros);
        } catch (PDOException $e) {

        }
        return $pdo->rowCount();
    }
    public function insert2($nota){
        $parametros = array(":id" => $nota->getid(), ":titulo" => $nota->gettitulo(), ":contenido" => $nota->getcontenido());
        $pdo=$this->db_handler->prepare("INSERT INTO notas VALUES (:id, :titulo, :contenido)");
       try {
        $pdo->execute($parametros);
       } catch (PDOException $th) {
            echo "La maldita lisiada";
       }
       return $pdo->rowCount();

    }
    public function update ($nota){
        $parametros = array(":id" => $nota->getid(), ":titulo" => $nota->gettitulo(), ":contenido" => $nota->getcontenido());
        $pdo=$this->db_handler->prepare("UPDATE notas SET titulo=:titulo, contenido=:contenido WHERE id=:id");
        try {
            $pdo->execute($parametros);
        } catch (PDOException $th) {
            echo "La maldita lisiada";
        }
        return $pdo->rowCount();
    }
    public function count(){
        $pdo=$this->db_handler->prepare("SELECT * FROM notas");
        $pdo->execute();
        return $pdo->rowCount();
    }
    public function get (){
        $pdo=$this->db_handler->prepare("SELECT * FROM notas");
        $pdo->execute();
        $block=array();//=[];
        while ($row=$pdo->fetch(PDO::FETCH_ASSOC)) {
            $nota= new Nota ($row['id'], $row['titulo'], $row['contenido']);
            $block[]=$nota;
        }
        return $block;
    }
    public function get_arrays(){
        $pdo=$this->db_handler->prepare("SELECT * FROM notas");
        $pdo->execute();
        $block=[];
        while ($row=$pdo->fetch(PDO::FETCH_ASSOC)){
            $block[]=$row;
        }
        return $block;
    }
    public function media() {
        $pdo=$this->db_handler->prepare("SELECT id FROM notas");
        $pdo->execute();
        $suma=0;
        while ($row=$pdo->fetch(PDO::FETCH_ASSOC)) {
            $suma+=$row['id'];
        }
        return $suma/$pdo->rowCount();
    }
    public function media2 (){
        $pdo=$this->db_handler->prepare("SELECT AVG(id) AS med FROM notas ");
        $pdo->execute();
        $row=$pdo->fetch(PDO::FETCH_ASSOC);
        return $row['med'];
    }
public function getById ($id){
    $parametros= array (':id'=>$id);
    $pdo=$this->db_handler->prepare("SELECT * FROM notas WHERE id=:id");
    $pdo->execute($parametros);
    $nota=$pdo->fetch(PDO::FETCH_ASSOC);
    return $nota;
}

    public function analizar(){
        $estadististica=[];
        $pdo=$this->db_handler->prepare("SELECT count(*) As titulosA FROM notas WHERE titulo LIKE 'A%' OR 'a%'");
        $pdo->execute();
        $estadististica['titulosA']=$pdo->fetch()['titulosA'];
        $pdo=$this->db_handler->prepare('SELECT sum(id) AS IdSuma FROM notas');
        $pdo->execute();
        $estadististica['IdSuma']=$pdo->fetch()['IdSuma'];
        $pdo=$this->db_handler->prepare('SELECT count(id) AS Excursiones FROM notas WHERE titulo="Excursión"');
        $pdo->execute();
        $estadististica['Excursiones']=$pdo->fetch()['Excursiones'];
        $pdo=$this->db_handler->prepare('SELECT id AS contenidoMax FROM notas WHERE length(contenido) in (SELECT max(length(contenido)) FROM notas)');
        $pdo->execute();
        $estadististica['contenidoMax']=$pdo->fetch()['contenidoMax'];
        

       /* titulosA(n de titulos que empiezen por A)
        idsuma de todos los identificadores de todas las notas;
        Excursiones numero de notas con dicho titulo
       EL id con contenido con mayor numero de cracteres
        */

        return $estadististica;
    }

}

/*
$notas_model = new Notas_model();
echo $notas_model->delete(2) . "<br>";
echo $notas_model->delete_by_titulo('Bocadillo') . "<br>";
echo $notas_model->delete_by_letter('G'). "<br>";
echo $notas_model->insert1("5", "Excursion", "Hoy no hay"). "<br>";
echo $notas_model->insert1("6", "Excursion", "Mañana a las 8"). "<br>";
echo $notas_model->insert1("9", "Ajedez", "Mañana parrtidita de ajedrez"). "<br>";
echo $notas_model->insert1("11", "Aprendrer", "Hay que aprender todos los dias"). "<br>";
$notita= new Nota(10,"Percha", "Hay perchas en el armario");
echo $notas_model->insert2($notita). "<br>";
$notita= new Nota(10,"Colgador", "Hay perchas en el armario y colgadores en las puertas");
echo $notas_model->update($notita). "<br>";
echo $notas_model->count();
$cuaderno=$notas_model->get();
print_r($cuaderno);
echo "<br>";
foreach ($cuaderno as $key => $nota) {
    echo "Identificador: ".$nota->getid()." Titulo: ".$nota->gettitulo()." Contenido: ".$nota->getcontenido()."<br>";
}
$block=$notas_model->get_arrays();
foreach ($block as $key => $array) {
    echo "<br><br>Probando arrays: Identificador: ".$array['id']." Titulo: ".$array['titulo']." Contenido: ".$array['contenido']."<br>";
};
for ($i=0; $i < sizeof($block); $i++) { 
    echo "<br><br>".print_r($block[$i]);
};
echo "<br><br> MEDIA ID: ";
echo $notas_model->media();
echo "<br><br> MEDIA ID bien: ";
echo $notas_model->media2();
$arrayest=$notas_model->analizar();
print_r($arrayest);
$resultado=$notas_model->getById(4);
if ($resultado==null) {
    echo "la nota no existe";
} else {
    print_r($resultado);
}*/


?>