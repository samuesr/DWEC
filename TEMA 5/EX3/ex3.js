document.addEventListener('DOMContentLoaded',iniciar,false);
function iniciar(){
    document.getElementById('id_formulario').addEventListener('submit',validarFormulario);
    document.getElementById('id_cp').addEventListener('keypress',solonumero);
//no hay que usar en la llamada a la funcion el evento, ya enteinede que es el evento que lo ha disparado.
//en la declaracion de la funcion si hay que declarar el evento que lo ha disparado para poder acceder a el.
//en los form no usar el mismo name e id, da problemas.
//NO usar required, evitaría el lanzamiento de la validacion.
//introducir cp de numeros, que anula las teclas que no son numeros, tiene que tener una longitud de 5; 

document.getElementById('id_check').addEventListener('click',validaCheck);
let aux= document.getElementById('id_select');
console.log(aux.length);
document.getElementById('consulta_id').addEventListener('click',queOpcion);
document.getElementById('añade_id').addEventListener('click',añadeOpcion);
document.getElementById('introduce_id').addEventListener('click',introduceOpcion);
document.getElementById('elimina_id').addEventListener('click',eliminaOpcion);

}


function solonumero(evento){
    if (isNaN(evento.key)||evento.key==" ") {
        evento.preventDefault();
    }
    console.log(evento.key);

}

function validarFormulario(evento) {
    evento.preventDefault(); //previene la ejecición de la función submit.
    var usuario= document.getElementById('usuario').value;
    if (usuario.length==0) {
        window.alert('No has escrito nada en el usuario');
        return false; //interrumpe la ejecucion, al finbalizar la función con su salida return(valdría salir con un return;, o un numero xejemplo.); 
    }
    var clave= document.getElementById('clave').value;
    if (clave.length<6) {
        window.alert('la clave no es valida');
        return false;
    }
    var cp= document.getElementById('id_cp').value;
if (cp.length!=5) {
    window.alert ('Longitud incorrecta de codigo postal');
    return false;
}

    this.submit();
}
function validaCheck() {
    document.formulario.enviar.disabled= !document.formulario.enviar.disabled;
    //return campoCondiciones.checked;
}
function queOpcion(){
    let array=document.getElementById('id_select').options;
    let i=document.getElementById('id_select').selectedIndex;
   console.log(array[i].value);
   console.log(array[i].text);
}
function añadeOpcion(){
    var opt = new Option ('deptorte','opcion4',false,true);
    document.getElementById('id_select').options[document.getElementById('id_select').options.length]=opt;
    //eliminar con array.remove(posicioni en array.remove);
}
function introduceOpcion(){
    let pos=document.getElementById('id_select').options.length;
    let name=document.getElementById('id_introduce_t').value;
    var opt = new Option (name,'opcion'+pos,false,true);
    document.getElementById('id_select').options[document.getElementById('id_select').options.length]=opt;
}

function eliminaOpcion(){
    let num=document.getElementById('id_elimina_t').value;
    let pos=document.getElementById('id_select').options.length-1;
   if(isNaN(num)|| parseInt(num)!=num|| 0<parseInt(num)>pos) {
    window.alert('numero incorrecto');
   }else{
    document.getElementById('id_select').options.remove(num);
   }

}