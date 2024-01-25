document.addEventListener('DOMContentLoaded',iniciar,false)
function iniciar() {
    document.getElementById('id_boton').addEventListener('click',recuperar);
}
function recuperar() {
    var pag='ajax6.php';
    LoadDoc(pag,mostrar);
}
function LoadDoc(pag,cFunction) {
    var xhttp= new XMLHttpRequest;
    xhttp.onreadystatechange=function (){
        if (xhttp.status==200 && xhttp.readyState==4) {
            cFunction(this);
        }
    }
    xhttp.open('GET',pag,true);
    xhttp.send();
}
function mostrar(xhttp){
    var resultado=document.getElementById('id_resultado');
    console.log(xhttp.responseText);
    var pelicula= JSON.parse(xhttp.responseText);
    var salida= '<table><tr><th>Codigo pelicula:</th><th>Nacionalidad:</th><th>Prodcutora:</th><th>Codigo D:</th></tr>';
    for (let i = 0; i < pelicula.length; i++) {
        salida+=`<tr><td>${pelicula[i].codigoPel}</td><td> ${pelicula[i].nacionalidad}</td><td> ${pelicula[i].productora}</td><td> ${pelicula[i].codigoD}</td></tr>`;
        
    }
    salida+="</table>";
    
    resultado.innerHTML=salida;
}