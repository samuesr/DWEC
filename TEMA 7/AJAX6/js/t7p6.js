document.addEventListener("DOMContentLoaded", iniciar, false);

function iniciar() {
  document.getElementById("id_ccaa").addEventListener("change", fccaa);
  document
    .getElementById("id_provincia")
    .addEventListener("change", fprovincia);
  document
    .getElementById("id_municipio")
    .addEventListener("change", fmunicipio);

  //Cargamos el select de comunidades autónomas
  var pag = "php/getCcaa.php";
  datos = "nocache=" + Math.random(); //para re que refresque con cada consulta
  loadDoc(pag, datos, mostrar_ccaa);
}

function mostrar_ccaa(xhttp) {
  var datos = JSON.parse(xhttp.responseText);
  for (let i = 0; i < datos.length; i++) {
   var opcion= document.createElement('option')
    opcion.setAttribute('value',datos[i].id); // Yo tenía opcion.innerText=datos[i].comunidad, vale igual.
    var texto= document.createTextNode(datos[i].comunidad);
    opcion.appendChild(texto);
    document.getElementById('id_ccaa').appendChild(opcion);
  }
  
}

function fccaa() {
  var pag = "php/getProvincias.php"
 var id=this.value;
 data= 'ccaa_id='+encodeURIComponent(id)+"nocache=" + Math.random();
 loadDoc(pag,data,mostarprov)
 
}
function mostarprov(xhttp) {
  limpiarProvincias();
  limpiarMunicipios();
  var datos = JSON.parse(xhttp.responseText);
  for (let i = 0; i < datos.length; i++) {
   var opcion= document.createElement('option')
    opcion.setAttribute('value',datos[i].id); 
    var texto= document.createTextNode(datos[i].provincia);
    opcion.appendChild(texto);
    document.getElementById('id_provincia').appendChild(opcion);
  }
}

function fprovincia() {
  limpiarMunicipios();
  console.log();
  var valor= document.getElementById('id_provincias').options[document.getElementById('id_provincia').selectedIndex].value;
  var pag = "php/getMunicipio.php"
  var id=valor;
  data= 'municipio_id='+encodeURIComponent(id)+"nocache=" + Math.random();
  loadDoc(pag,data,mostarmuni)

}
function mostarmuni(xhttp) {
  limpiarMunicipios();
  document.getElementById('id_resultado').style.display=none;
  var datos = JSON.parse(xhttp.responseText);
  for (let i = 0; i < datos.length; i++) {
   var opcion= document.createElement('option')
    opcion.setAttribute('value',datos[i].id); 
    var texto= document.createTextNode(datos[i].municipio);
    opcion.appendChild(texto);
    document.getElementById('id_municipio').appendChild(opcion);
  }
  
}

function fmunicipio() {}

function limpiarProvincias() {
  nodos=document.getElementById('id_provincia');
  while (nodos.childNodes.length>2) {
    nodos.removeChild(nodos.lastChild);
  }
  /*
  while(nodos.options.length>0){
    nodo.remove(0);
  }
  var opcion_p=document.createElement('option');
  opcion_p.createAttribute('value',"");
  opcion.createTextNode()
  */
}
function limpiarMunicipios() {
  nodos=document.getElementById('id_municipio');
  while (nodos.childNodes.length>2) {
    nodos.removeChild(nodos.lastChild);
  }}