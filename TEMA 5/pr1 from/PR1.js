document.addEventListener('DOMContentLoaded', finiciar, false);

/*let rg= {'nombre_rg':/^([A-Za-z]+\s?)+$/,
'edad_rg': /^((\d?\d)|(10\d)|(110))$/,
'tlf_rg': /^(\+\d{3}\)\d{3}(\.\d{3}){2})$/,
'cod_post_rg': /^[0-9]{5}$/,
'direccion_rg':/^[\w\s.\/^_]+$/,
'localidad_provincia_rg':/^[\D]+$/};
var indices=[...Object.keys(rg)];
var indices=[...Object.values(rg)];
console.log(indices);*/

class Alumno {
    nombre;
    apellidos;
    edad;
    direccion;
    localidad;
    provincia;
    cp;
    telefono;

    __construct(nombre, apellidos, edad, direccion, localidad, provincia, cp, telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.direccion = direccion;
        this.localidad = localidad;
        this.provincia = provincia;
        this.cp = cp;
        this.telefono = telefono;
    }
}
function finiciar() {
    document.getElementById('limpiar_id').addEventListener('click', limpia);
    document.getElementById('id_condiciones').addEventListener('click', acepta);
    document.getElementById('visualizar_id').addEventListener('click', visualiza);
    document.getElementById('alta_id').addEventListener('click', alta);
    /* document.getElementById('').addEventListener('click',);
     document.getElementById('').addEventListener('click',);
     document.getElementById('').addEventListener('click',);*/
}
function limpia() { 
    /*esta función ejecuta la función reset, si no se encunetra desabilitado el boton de alta, 
    ejecuta la función acepta que pondría el estado contrario, es decir lo deshabilita*/
    document.getElementById('id_formulario').reset();
    if (!document.getElementById('alta_id').disabled) {
        acepta();
    }
    let res_val=document.registro.getElementsByTagName('div'); //selecciono todos los div dentro del fomrulario registro
    for (let i = 0; i < res_val.length-1; i++) {
        res_val[i].style='';
        res_val[i].lastElementChild.style='';
        res_val[i].lastElementChild.innerHTML="";
        
    }
    document.getElementsByTagName('div').style = '';
    //document.getElementsByTagName('div').lastElementChild.style='';
    document.getElementsByTagName('div').lastElementChild.innerHTML="";

}
function acepta() {
    //**Esta función se ejecuta al pulsar el checkbox, la evalua la propiedad disable y devuelve su contrario. */
    document.getElementById('alta_id').disabled = !document.getElementById('alta_id').disabled;
}
function visualiza() {
    let visualiza = window.open('visualiza');
    let tabla = '<table>';
    array.forEach(element => {
        tabla += '<tr>';
        tabla += `<td>${element.nombre}</td><td>${element.apellidos}</td><td>${element.edad}</td><td>${element.direccion}</td><td>${element.localidad}</td><td>${element.provincia}</td><td>${element.cp}</td><td>${element.telefono}</td>`;
        tabla += '</tr>'
    });
    tabla += '</table>';
    visualiza.document.write(tabla);

}
function alta() {
    let info = document.getElementsByClassName('info');  //recojo el contenido de todos los elemntos tipo input que hay que validar
    let es = true; //genero una variable tipo boolean de comparación
    for (let i = 0; i < info.length; i++) { //recorro el array info, en función de si es tipo text (class=texto) o no (entonces es el select), ejecuto un tipo de validacion u otra;
        let clases = info[i].classList;
        if (clases.contains('texto')) { // si es un input de texto recojo su valor y el valor del atributo name y ejecuto una función de validacion con ambos
            let nombre = info[i].name;
            let valor = info[i].value;
            es = es && valida_txt(nombre, valor); 
        }
        else {
es=es&&true;
        }
    }
    if (es) {

        
    
    document.submit(); }

}

function valida_txt(nombre, valor) {

    /* let nombre_rg = /^([A-Za-z]+\s?)+$/;
     let edad_rg = /^((\d?\d)|(10\d)|(110))$/;
     let tlf_rg = /^(\+\d{3}\)\d{3}(\.\d{3}){2})$/;
     let cod_post_rg = /^[0-9]{5}$/;
     let direccion_rg = /^[\w\s.\/^_]+$/;*/
    let rg = "";

    switch (nombre) { //segun el valor del nombre (name) selecciono una expresion regular para validar
        case 'nombre':
          //  rg = /^([A-Za-z]+\s?)+$/;
          //  break;
        case 'apellido':
            rg = /^([A-Za-z]+\s?)+$/;
            break;
        case 'edad':
            rg = /^((\d?\d)|(10\d)|(110))$/;
            break;
        case 'telefono':
            rg = /^(\+\d{3}\)\d{3}(\.\d{3}){2})$/;
            break;
        case 'cod_post':
            rg = /^[0-9]{5}$/;
            break;
        case 'direccion':
            rg = /^[\w\s.\/^_]+$/;
            break;
        default:
            rg = /^[\D]+$/;
            break;
    }
    if (!rg.test(valor)) { //si la validacion es negativa pinta un cuadro al rededor de todo el imput y añade un mensaje en el parrafo que esta al lado del input
        document.getElementById(nombre + '_id').style = 'border:1px solid red'; 
         document.getElementById(nombre + '_id').lastElementChild.style='color:red';
         document.getElementById(nombre + '_id').lastElementChild.innerHTML=nombre+" incorrecto";
        return false; 
    } else {
        return true; 
    }
}

