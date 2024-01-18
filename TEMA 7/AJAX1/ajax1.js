document.addEventListener('DOMContentLoaded',iniciar,false);
function iniciar() {
    document.getElementById("id_buscar").addEventListener("click",buscar);
}
function buscar() {
    loadDoc("ajax1.txt",mostrar); //Aqui se está dando como parámetro la función que se ejecuta más tarde demtro de la función, no es la ejecución de la función.
}
function nuevoAjax() {
    var xhttp=false;
    try { //ambos try se pueden eliminar ya que son para internet explorer, que ya no se usa, se podría simplemente devulver la intacia de XMLHttpRequest();
        xhttp= new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xhttp= new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xhttp=false;
        }
    }
    if (!xhttp && typeof XMLHttpRequest != "undefined") {
        xhttp= new XMLHttpRequest();
    }
    return xhttp;
}
function loadDoc(url, cFunction) {
    var xhttp;
    xhttp=nuevoAjax(); // si no se usa el casting para IE, entonces se puede igualar al XMLHttpRequest
    xhttp.onreadystatechange=function () {
        if (this.readyState == 4 && this.status==200) {
            cFunction(this);
        }
    };
xhttp.open("GET",url,true);
xhttp.send();
}
function mostrar(xhttp) {
    var resultado= document.getElementById("id_resultado");
    resultado.innerHTML=xhttp.responseText;
}