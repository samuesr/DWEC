document.addEventListener('DOMContentLoaded',iniciar,false);
function iniciar() {
    clean(document.body);
    document.getElementById('apuntar_id').addEventListener('click',valida);

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
	  }
	}
  }
  function valida() {
    let contenido=document.getElementById('texto_id').value;
    console.log(contenido);
    let es=true;
    let rx=/^\D+$/;
    if(rx.test(contenido)){
let lista=document.getElementsByTagName('li');
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i].value);
     if (lista[i].value==contenido){es=false; console.log(es+'está en lista')}
}
  }else {es=false; console.log(es+' falla validacion')}
if (es) {
    let entrada=document.createElement('li');
    entrada.innerHTML=contenido;
    console.log(entrada);
    document.getElementById('lista_id').appendChild(contenido);
}
}
