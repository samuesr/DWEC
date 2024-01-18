document.addEventListener('DOMContentLoaded',iniciar,false);
function iniciar(){
    document.getElementById('id_boton').addEventListener('click',buscar);
}
function buscar() {
    var dni= document.getElementById('id_dni').value;
    var pag= 'ajax7.php';
    var data= 'dni='+encodeURIComponent(dni)+'&nocache='+Math.random();
    loadDoc(pag,data,mostrar);
}
function loadDoc(pag,data,cFunction) {
    var xhttp= new XMLHttpRequest;
    xhttp.onreadystatechange=function () {
        if (xhttp.readyState==4 && xhttp.status==200) {
            cFunction(this);
        }
    }
    xhttp.open('POST',pag,true);
    xhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhttp.send(data);
}
function mostrar(xhttp) {
    console.log(xhttp);
    var resultado=document.getElementById('id_resultado');
    var persona=JSON.parse(xhttp.responseText);
    var salida= `Nombre: ${persona.nombre}<br>Apellidos: ${persona.apellido}<br>Dirección: ${persona.direccion}`;
    resultado.innerHTML=salida;
}