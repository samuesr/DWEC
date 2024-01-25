$(document).ready(iniciar);

function iniciar() {
  $.ajax({
    type:'GET',
    url:"php/getCcaa.php",
    async: true,
    data:{'nocache': Math.random()},
    dataType:'json',
    success: function(respuesta){
       /* for (let i = 0; i < respuesta.length; i++) {
          console.log(respuesta[i].comunidad);
          let option= document.createElement('option');
          $(option).attr('value',respuesta[i].id);
          $(option).append(respuesta[i].comunidad);
         $('#id_ccaa').append(option);*/
         $(respuesta).each(function () {
          console.log(this.id);
          $('<option/>').val(this.id).text(this.comunidad).appendTo('#id_ccaa');
         })
    },
    error:function () {
      console.log('no furruca');
    }
  });

  $("#id_ccaa").change(function () { 
  var selected= $('#id_ccaa').val();
   limpiarMunicipios();
 $.ajax({
  type:'POST',
  url:"php/getProvincias.php",
  async:'true',
  data:{'ccaa_id': selected, 'nocache': Math.random()},
  dataType: 'json',
  success: function (provincias) {
    console.log(provincias);
    $(provincias).each(function () {
      console.log(provincias);
       $('<option/>').val(this.id).text(this.provincia).appendTo('#id_provincia');
    })
  }

 }) });


  $("id_provincia").bind("change",fprovincia);
  $("id_municipio").bind("change", fmunicipio);

  //Cargamos el select de comunidades autónomas


}


function fccaa() {
   
 
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