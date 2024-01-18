$(document).ready(function () {
    $('#id_p1').addClass('destacado').show('slow');
    console.log($('#id_p1'));
    $('ol li').each(function (index, element) {
        console.log('El elemento con el índice ' + index + ' contiene: ' + $(element).text());
    })
    $('ol li').click(function () {
        $(this).hide()
    });
    $('table tr:nth-child(odd)').click(function () {
        $(this).css('background', 'red');
    })
    $('table tr:nth-child(2n)').click(function () {
        $(this).css('background', 'pink');

    })

    $('button').click(function () {
        $('a').each(function (index, element) {
            if (element.href.includes('.com')) {
                $(element).css('background', 'pink');
            }
        })
    })

})// document es un objeto, no es seleccionable como tal en css, mientras que body es un elemento, es una etiqueta entonces va en comillas.
//algunas funciones pueden tener una salida, que pueda ser la entrada del siguiente comando
/**
 * Se pueden seleccionar elementos bine con notaciond e array o por método .get(0).href
 * $('a').length= devuelve la cantidad de enlaces del documento html
 * permite generar bucles, de forma implicita es aplicar una función aun selector $('p').hide();
 * Explicito con un metodo foreach: $('a').each(index, element){
 * console.log('el enlace nº'+index+'apunta a '+this.href)}
 * EJERCICIO
 * crea un html coin una lista no ordenada de 4 elementos, cuando se hace click en un elemento el elemento se oculta
 * EJERCICIO
 * Crea una tabla de 6 filas
 * meter algún contenido
 * cuando se haga click sobre una fila se cambia el color de fondo de la fila, las filas impares de un color, las pares de otro.
 * EJECICIO
 * crear 4 o 5 enlaces 
 * en la pagina que aparezca un boton, al hacer click, resaltar toidos los enlaces con el subdominio '.com' 
 * EJERCICIO:
 * crear una tabla
 */
