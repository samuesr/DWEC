document.addEventListener('DOMContentLoaded',iniciar,false);
function iniciar() {
    document.getElementById('id_boton').addEventListener('click',recupera);
}
function recupera() {
    var dni=document.getElementById('id_dni').value;
    var pag='ajax4.php?dni='+dni;
    loadDoc(pag,mostrar);
}
function loadDoc(url,cFunction) {
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function () {
        if (this.readyState == 4 && this.status==200) {
            cFunction(this);
        }
    };
xhttp.open("GET",url,true);
xhttp.send();
}
function mostrar(xhttp) {
    var resultado=document.getElementById('id_resultado');
    var persona= JSON.parse(xhttp.responseText);
    var salida= `Nombre: ${persona.nombre}<br>Apellidos: ${persona.apellido}<br>Dirección: ${persona.direccion}`;
    resultado.innerHTML=salida;
    
}