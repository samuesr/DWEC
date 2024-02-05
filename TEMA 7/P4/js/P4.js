document.addEventListener('DOMContentLoaded',iniciar,false);
function iniciar() {
    clean(document);
    document.getElementById('enviar_id').addEventListener('click',enviar);
}
function enviar(evento) {
    evento.preventDefault();
  limpiarastros();
    let es=true;
    var inputs= document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
       let es_aux= depura(inputs[i].id);
       es=es&&es_aux;
    }
    var pag= './php/P4.php';
   if (es==true) {
     var datos=`usuario=${inputs[0].value}&pass=${inputs[1].value}&email=${inputs[2].value}&telefon=${inputs[3].value}&nocache=`+ Math.random();
    loadDoc(pag,datos,mostrar);
   }

}
function clean(node) {
    for(var n = 0; n < node.childNodes.length; n ++)
    {
      var child = node.childNodes[n];
      if
      (
        child.nodeType === 8 
        || 
        (child.nodeType === 3 && !/\S/.test(child.nodeValue))
      )
      {
        node.removeChild(child);
        n --;
      }
      else if(child.nodeType === 1)
      {
        clean(child);
      }}}
function depura(id) {
    let es=true;
    id_v=document.getElementById(id);
    if (id_v.value=="") {
      es=false;
      document.getElementById(id).parentElement.style='border: 1px solid red';
    }
    return es;
}
function loadDoc(pag,datos,cFunction) {
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function () {
        if (xhttp.status==200&&xhttp.readyState==4) {
            cFunction(this);
        }
    }
    xhttp.open('POST',pag,true);
    xhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhttp.send(datos);
    
}
function mostrar(xhttp) {
  var resultado= document.getElementById('resultado_id');
  var contenido= JSON.parse(xhttp.responseText);

  resultado.innerHTML= `<h1>${contenido.resultado}</h1>`;
}
function limpiarastros(){
  divs=document.getElementsByClassName('error');
  for (let i  = 0; i < divs.length; i++) {
   divs[i].style="border-style: none";
  }
}