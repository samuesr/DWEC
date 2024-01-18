/** Utilizando el DOM, crear un formulario que pida dos campos de texto y un boton, el usuario introduce el numero de filas y el de columnas, al pulsar el botón se crea la tabla con esos valores de fila y columnas.
 * contenido es su coordenada, validar con rexexp el boton es boton, no submit, la tabla se generracon el DOM, en un div situado debajo. Se crearia una función que le da fila y columna.
 */
document.addEventListener('DOMContentLoaded',iniciar,false);
function iniciar (){
    clean(document.body);
    document.getElementById('enviar_id').addEventListener('click',valida);
}
function valida(){
    let items=document.getElementsByClassName('info');
    let es=true;
    let es_aux;
    let regx=/^\d+$/;
    for (let index = 0; index < items.length; index++) {
      let item=items[index].value;
      if (regx.test(item)){
        es_aux=true;
      }
      else{
        es_aux=false;
      };
      es=es&&es_aux;
    }
    if (es){
        tabla(document.getElementsByName('rows')[0].value, document.getElementsByName('cols')[0].value);
    }
}
function tabla (rows,cols){
let tabla=document.createElement('table');
for (let i = 0; i < rows; i++) {
    let row=tabla.insertRow();
    for (let j = 0; j < cols; j++) {
        let cel= row.insertCell();
        cel.innerText=`${i},${j}`;
        cel.style.border='1px solid black';
    }
}
document.body.appendChild(tabla);

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