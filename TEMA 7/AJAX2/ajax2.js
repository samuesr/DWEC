document.addEventListener('DOMContentLoaded',iniciar,false);
function iniciar() {
    document.getElementById('id_mostrar').addEventListener('click',recupera);
    console.log('recuperó');
}
function recupera() {
    console.log('en recupera');
    loadDoc('ajax2.xml',mostrar);
    console.log ('cargó el archivo');
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
    var resultado= document.getElementById('id_resultado');
    var xmlDoc=xhttp.responseXML;
    var tabla= '<table><tr><th>Artista</th><th>Titulo</th></tr>';
    console.log(xmlDoc);
    var cds=xmlDoc.getElementsByTagName('CD');
    console.log(cds)
    for (let i = 0; i < cds.length; i++) {
        console.log(cds[i]);
        tabla+='<tr><td>'+cds[i].getElementsByTagName('ARTIST')[0].childNodes[0].nodeValue+'</td>';
        tabla+='<td>'+cds[i].getElementsByTagName('TITLE')[0].childNodes[0].nodeValue+'</td></tr>';
    }
    tabla+='</table>';
    console.log(tabla);
    
    resultado.innerHTML=tabla;
    
}