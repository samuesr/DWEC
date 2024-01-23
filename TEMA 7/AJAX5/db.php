<?php //este archivo no hay que aprenderselo de memoria

define("DB_HOST","localhost");
define ("DB_NAME","ajax5");
define("DB_USER","root");
define("DB_PASSWORD", "root");

class db {
    private $host;
    private $password;
    private $dbName;
    private $user;
    private $db_handler;
    private function __construct(){}
    public static function concectar() {
        $host=DB_HOST;
        $dbName=DB_NAME;
        $user=DB_USER;
        $password=DB_PASSWORD;
        $db_handler=null;
        try {
            $dns="mysql:host=$host; dbname=$dbName";
            $db_handler= new PDO($dns, $user, $password);
            $db_handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //Para tener en cuenta las excepciones, sin ello las teine en cuenta igual
            $db_handler->exec("set names utf8");
           // echo "Conexión realizada...";
        } catch (Exception $e) {
            die("Error en la conexión".$e->getMessage());
        }
        return $db_handler;
    }
}
db::concectar();
?>
