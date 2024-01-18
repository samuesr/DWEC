document.addEventListener('DOMContentLoaded',iniciar,false);
function iniciar() {
    clean(document);
    document.getElementById('enviar_id').addEventListener('click',enviar);
}
function enviar(evento) {
    evento.preventDefault();
    let es=true;
    var inputs= document.getElementById('form_id').childNodes;
    console.log(inputs);
    for (let i = 0; i < inputs.length; i++) {
       let es_aux= depura(inputs[i].value,inputs[i].name,inputs[i].id);
       es=es&&es_aux;
    }
    var pag= 'P4.php';
    datos='usuario='+inputs[0].value+'&pass='+inputs[1].value+'&email='+inputs[2].value+'&telefon='+inputs[3].value+"&nocache=" + Math.random();;
    loadDoc(pag,datos,funcionD);


    
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
function depura(valor,nombre,id) {
    let es=true;
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
    
}