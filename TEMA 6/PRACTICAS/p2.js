document.addEventListener('DOMContentLoaded',iniciar,false);
function iniciar() {
    clean(document.body);
    var long=document.getElementsByTagName('a').length;
     console.log(long);
     console.log(document.getElementsByTagName('a')[long-2].getAttribute('href'));
     let aux=document.getElementsByTagName('a');
     let contador=0;

     for (let index = 0; index < aux.length-1; index++) {
        console.log(aux[index].getAttribute('href'));
        if (aux[index].getAttribute('href').includes("http://prueba")) {
           contador++; 
        }
     }
     console.log(contador);
     console.log(document.body.childNodes[2].getElementsByTagName('a').length);
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