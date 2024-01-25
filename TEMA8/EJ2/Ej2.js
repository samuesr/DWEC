$(document).ready(function () {
    $('input').bind('click',saludo);
    $('input').bind('click',nombre);
    $('input').bind('click',algo);
})
function saludo() {
    console.log('Hola');
}
function nombre() {
    console.log('Paco');
}
function algo() {
    console.log('algo');
}