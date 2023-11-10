document.addEventListener('DOMContentLoaded', finiciar, false);
let alumnos=[];
class Alumno {
    nombre;
    apellidos;
    edad;
    direccion;
    localidad;
    provincia;
    cp;
    telefono;
    estudios;
    constructor(nombre, apellidos, edad, direccion, localidad, provincia, cp, telefono, estudios) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.direccion = direccion;
        this.localidad = localidad;
        this.provincia = provincia;
        this.cp = cp;
        this.telefono = telefono;
        this.estudios = estudios;
    }
}
function finiciar() {
    document.getElementById('limpiar_id').addEventListener('click', limpia);
    document.getElementById('id_condiciones').addEventListener('click', acepta);
    document.getElementById('visualizar_id').addEventListener('click', visualiza);
    document.getElementById('alta_id').addEventListener('click', alta);
    document.getElementById('borrar_id').addEventListener('click',eliminar);
}
function limpia_restos() { //funcion que elimina los elementos de la anterior validacion;
    let res_val = document.registro.getElementsByTagName('div'); //selecciono todos los div dentro del fomrulario registro, eliminos restos de etiqueta style en el div(recuadro) y en el texto, y elimino el contenido
    for (let i = 0; i < res_val.length; i++) {
        res_val[i].style = '';
        res_val[i].lastElementChild.style = '';
        res_val[i].lastElementChild.innerHTML = "";
    }
}
function limpia() {/*esta función ejecuta la función reset, además si no se encuentra desabilitado el boton de alta, 
    ejecuta la función acepta que pondría el estado contrario, es decir lo deshabilita, elimina tambien los mensajes d eposibles validaciones previas*/
    document.getElementById('id_formulario').reset();
    if (!document.getElementById('alta_id').disabled) {
        acepta();
    }
    limpia_restos();
}
function acepta() {//**Esta función se ejecuta al pulsar el checkbox, la evalua la propiedad disable y devuelve su contrario. */
    document.getElementById('alta_id').disabled = !document.getElementById('alta_id').disabled;
}
function alta() {//funcion que valida los datos y genera un objeto alumno que guarda en un array alumnos
    limpia_restos();//ELimina los mensajes en rojo de un posible intento de validación previo.
    let info = document.getElementsByClassName('info');  //recojo  de todos los elemntos tipo input que hay que validar
    let interno = "";//genero una variable que funcione a modo de boolean de comparación
    for (let i = 0; i < info.length; i++) { //recorro el array info, en función de si es tipo text (class=texto) o no (entonces es el select), ejecuto un tipo de validacion u otra;
        let clases = info[i].classList;
        if (clases.contains('texto')) { // si es un input de texto recojo su valor y el valor del atributo name y ejecuto una función de validacion con ambos
            let nombre = info[i].name;
            let valor = info[i].value;
            interno += valida_txt(nombre, valor);
        }
        else {
            if (info[i].selectedIndex == 0) { //si el valor seleccionado en el selec es el la opcion por defecto, entra a la generacion de mensaje de error
                interno = "a";
                mensaje_error(info[i].name);
            }
        }
    }
    if (interno == "") { //Si todo es correcto, el valor interno permanecerá como cadena vacía y permitirá la introducción del alumno.
        let alumno_info = [];
        for (let i = 0; i < info.length; i++) {
            alumno_info[i] = info[i].value;
        }
        console.log(alumno_info);
        let [nombre, apellidos, edad, direccion, localidad, provincia, cp, telefono, estudios] = alumno_info;//desestructuro el array en variables, creo el alumno y lo meto en alumnos.
         let alumno= new Alumno(nombre,apellidos,edad,direccion,localidad,provincia,cp,telefono,estudios);
        alumnos.push(alumno);
        limpia();

    }
}
function valida_txt(nombre, valor) { //funcion que dado un nombre(name del input) y su valor lo valida
    let rg = "";
    switch (nombre) { //segun el valor del nombre (name del input text) selecciono una expresion regular para validar
        case 'nombre': 
        case 'apellido':
            rg = /^([A-Za-z]+\s?)+$/;
            break;
        case 'edad':
            rg = /^((\d?\d)|(10\d)|(110))$/;
            break;
        case 'telefono':
            rg = /^\(\+\d{3}\)\d{3}(\.\d{3}){2}$/;
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
    let bool = "";
    if (!rg.test(valor)) { //si la validacion es negativa pinta un cuadro al rededor de todo el imput y añade un mensaje en el parrafo que esta al lado del input
        mensaje_error(nombre);
        bool = "g";
    }
    return bool;
}
function mensaje_error(nombre){ //funcion que dado un nombre (name del input genera un mensaje de error)
    document.getElementById(nombre + '_id').style = 'border:1px solid red';
    document.getElementById(nombre + '_id').lastElementChild.style = 'color:red';
    document.getElementById(nombre + '_id').lastElementChild.innerHTML = nombre + " incorrecto";
}
function visualiza() { //Abre una ventana llamada visualiza para crear una tabla;
    let visualiza = window.open("",'visualiza');
    let tabla = '<table><tr><td>Nombre</td><td>Apellidos</td><td>Edad</td><td>Dirección</td><td>Localidad</td><td>Provincia</td><td>Codigo Postal</td><td>Telefono</td><td>Estudios</td></tr>';
    alumnos.forEach(element => {
        tabla += '<tr>';
        tabla += `<td>${element.nombre}</td><td>${element.apellidos}</td><td>${element.edad}</td><td>${element.direccion}</td><td>${element.localidad}</td><td>${element.provincia}</td><td>${element.cp}</td><td>${element.telefono}</td><td>${element.estudios}</td>`;
        tabla += '</tr>'
    });
    tabla += '</table>';
    visualiza.document.write(tabla);
}
function eliminar() { //Para borrar el array, lo inicializo de nuevo
    alumnos=[];
}