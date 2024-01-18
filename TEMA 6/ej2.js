document.addEventListener('DOMContentLoaded',iniciar,false);
function getStyle(elemento,propiedadCss){
    varvalor="";
    if(document.defaultView&&document.defaultView.getComputedStyle){
    valor=document.defaultView.getComputedStyle(elemento,'').getPropertyValue(propiedadCss);
    }
    else if(elemento.currentStyle){
    propiedadCss=propiedadCss.replace(/\-(\w)/g,function(strMatch,p1){
    return p1.toUpperCase();
    });
    valor=elemento.currentStyle[propiedadCss];
    }
    return valor;
    }
    function iniciar() {
        var parrf= document.getElementById('parrafo');
        console.log(getStyle(parrf,'color'));
        console.log(getStyle(parrf,'font-size'));

    }