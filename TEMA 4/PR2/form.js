if (document.addEventListener){document.addEventListener("DOMContentLoaded",finiciar,false);}
function finiciar(){
    document.getElementById("bcrearID").addEventListener("click",CrearVentana);
    document.getElementById("bcerrarID").addEventListener("click",CerrarVentana);
var ventana;
function CrearVentana(){
    var opciones="left=100,top=100,";
    opciones=opciones+"width="+document.getElementById("ancho_ID").value+",";
    opciones=opciones+"height="+document.getElementById("alto_ID").value+",";
    ventana=window.open("","nom_ventana1",opciones);
    ventana.document.write("Esta es eña ventana que se ha creado");
    ventana.document.write("<br> Dirección de la página que ha abierto esta ventana:");
    ventana.document.write("<br>"+ventana.opener.location);
    
}
function CerrarVentana(){
    if (ventana && !ventana.closed) {
        ventana.close();
    }
}
}