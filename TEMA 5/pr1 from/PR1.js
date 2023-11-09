document.addEventListener('DOMContentLoaded', finiciar, false);
let nombre_rg = /^([A-Za-z]+\s?)+$/;
let edad_rg = /^((\d?\d)|(10\d)|(110))$/;
let tlf_rg = /^(\+\d{3}\)\d{3}(\.\d{3}){2})$/;
let cp_rg = /^[0-9]{5}$/;
let direccion_rg=/^[\w\s.\/^_]+$/;
let localidad_rg=/^[\D]+$/;


function finiciar() {
    document.getElementById('limpiar_id').addEventListener('click', limpia);

    document.getElementById('id_condiciones').addEventListener('click', acepta);
    document.getElementById('visualizar_id').addEventListener('click', visaliza);
    /* document.getElementById('').addEventListener('click',);
     document.getElementById('').addEventListener('click',);
     document.getElementById('').addEventListener('click',);
     document.getElementById('').addEventListener('click',);*/
}
function limpia() {
    document.getElementById('id_formulario').reset();
    if (!document.getElementById('alta_id').disabled) {
        acepta();
    }


}
function acepta() {
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
    tabla+= '</table>';
    visualiza.document.write(tabla);

}
class Alumno{
    nombre;
    apellidos;
    edad;
    direccion;
    localidad;
    provincia;
    cp;
    telefono;
    
    __construct(nombre,apellidos,edad,direccion,localidad,provincia,cp,telefono) {
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.edad=edad;
        this.direccion=direccion;
        this.localidad=localidad;
        this.provincia=provincia;
        this.cp=cp;
        this.telefono=telefono;
    }

}
