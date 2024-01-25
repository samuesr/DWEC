document.addEventListener('DOMContentLoaded',iniciar,false);
function iniciar(){
    document.getElementById('comprobar_id').addEventListener('click',obtener);
}
function obtener(){
    var nombre= document.getElementById('nombre_id').value;
    url=`compruebaDisponibilidad.php?nombre=${nombre}`
    loadDoc(url,mostar);
}
function loadDoc(url,cFunction) {
    var xhttp= new XMLHttpRequest;
    xhttp.onreadystatechange=function(){ 
        if (xhttp.status==200 && xhttp.readyState==4) {
        cFunction(this);
    }}
   xhttp.open('GET',url,true);
   xhttp.send();
}
function mostar(xhttp) {
    console.log('en mostar');
    var resultado= document.getElementById('resultado_id');
    var es=JSON.parse(xhttp.responseText);
    console.log(es);
    resultado.innerHTML=es[0].disponible;
}