//onmouseover
//onmouse¿out?
//reaacion al movimiento
document.addEventListener('DOMContentLoaded',iniciar,false);
function iniciar() { 
   clean(document);
   let cuadrados= document.getElementsByClassName('cuadrado');
   for (let i = 0; i  < cuadrados.length; i++) {
 cuadrados[i].addEventListener('mouseover',mostrartooltip);
 cuadrados[i].addEventListener('mouseout',ocultartooltip);
 cuadrados[i].addEventListener('mousemove',movertooltip);
    
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
function mostrartooltip(e) {
    let tool=document.createElement('div');
    let aux= document.createTextNode(e.target.getAttribute('data-tooltip'));
    tool.appendChild(aux);
    tool.setAttribute('class','tooltip');
    e.target.appendChild(tool);
}
function ocultartooltip(e) {
   /*var tools= document.getElementsByClassName('tooltip');
   tools[0].remove();*/
    var elemento = e.target.firstChild;
     e.target.removeChild(elemento);
}
function movertooltip(e) {
    var tooltip= e.target.firstChild;
    tooltip.style.left=e.clientX+30+'px';
    tooltip.style.top= e.clientY-25+'px';
}