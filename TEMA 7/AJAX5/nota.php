<?php
 class Nota {
    private $id;
    private $titulo;
    private $contenido;

    function __construct($id, $titulo, $contenido)
    {
      $this->id=$id;
      $this->contenido=$contenido;
      $this->titulo=$titulo;
    }
    function getid() {
        return $this->id;
    }
    function setid($id) {
        $this->id = $id;
        return $this;
    }

    function gettitulo() {
        return $this->titulo;
    }
    function settitulo($titulo) {
        $this->titulo = $titulo;
        return $this;
    }

    function getcontenido() {
        return $this->contenido;
    }
    function setcontenido($contenido) {
        $this->contenido = $contenido;
        return $this;
    }
    public function __toString()
    {
       return "El id de la nota ".$this->id." tiene como titulo: ". $this->titulo." y su contenio es:<br> ".$this->contenido; 
    }
 }
$notita= new Nota (1, "Excursion", "A las 7");
/*echo $notita->getid();
echo "<br>";
echo $notita->gettitulo();
echo "<br>";
echo $notita->getcontenido();
echo "<br>";
echo $notita; //esto actua como llamar al metodo to string*/
 ?>