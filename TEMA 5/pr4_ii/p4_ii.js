document.addEventListener('DOMContentLoaded', iniciar, false);


function iniciar() {
    document.getElementById('valida_id').addEventListener('click', valida);
    document.getElementById('limpiar_id').addEventListener('click', limpiar);
    document.getElementById('valida_id').addEventListener('click', valida);
    for (let j = 0; j < document.getElementsByClassName('amplia').length; j++) {
        document.getElementsByClassName('amplia')[j].addEventListener('click', mostrar);
    }
}
function valida() {
    let info = document.form.getElementsByTagName('input');
    let es = true;
    let es_aux;
    let longitud = 13;
    if (document.getElementsByName('ordenador').value == 0 || !document.getElementsByName('ordenador')[0].checked) {
        longitud = 6;
    };
    for (let j = 0; j < longitud; j++) {
        let nombre = info[j].name;
        let tipo = info[j].type;
        let valor = info[j].value;
        es_aux = valida_tipo(nombre, tipo, valor);
        if (tipo == 'radio') { j++; }
        es = es_aux && es;
    }
    let selectores = document.getElementsByTagName('select');
    let longitud_s;
    let k;
    document.getElementsByName('estudios')[0].checked ? k = 0 : k = 1;;
    if (document.getElementsByName('ordenador')[0].checked) {
        longitud_s = document.form.getElementsByTagName('select').length;
    } else { longitud_s = 1; }
    for (k; k < longitud_s; k++) {
        let nombre = selectores[k].name;
        es_aux = valida_selector(nombre);
        es = es = es_aux && es;
    }
    if (document.getElementById('otras_id').checked) {
        let nombre = document.getElementById('id_otros').name;
        let valor = document.getElementById('id_otros').value;
        es_aux = valida_text(nombre, valor);
        es = es_aux && es;
    }
    if (es) { document.form.submit() };
}
function valida_tipo(nombre, tipo, valor) {
    let es;
    if (tipo == 'text') {
        es = valida_text(nombre, valor);

    } else {
        es = valida_radio(nombre);
    }
    return es;
}
function valida_text(nombre, valor) {
    let rx;
    switch (nombre) {
        case 'edad':
            rx = /^[1-9]?\d$/
            break;
        case 'dias':
            rx = /^[1-7]$/;
            break;
        default:
            rx = /^\w+$/;
            break;
    }
    let bol = rx.test(valor);
    if (!bol) { marcar(nombre); }
    return bol;
}
function valida_radio(nombre) {
    let bol = false;
    let radio = document.getElementsByName(nombre);
    if (radio[0].checked || radio[1].checked) {
        bol = true;
    } else { marcar(nombre); }
    return bol;
}
function valida_selector(nombre) {
    let es = true;
    let id_select = 'id_' + nombre;
    if (document.getElementById(id_select).selectedIndex == 0) {
        marcar(nombre);
        es = false;
    };
    return es;
}

function marcar(nombre) {
    let divid = nombre + "_id";
    let mal = document.getElementById(divid);
    mal.style = 'border:1px solid red';
    mal.lastElementChild.innerHTML = "Incorrecto";
    mal.lastElementChild.style = 'color:red; display:inline-block';
}
function limpiar() {
    document.form.reset();
    let divs = document.form.getElementsByTagName('div');
    for (let j = 0; j < divs.length - 1; j++) {
        if (j != 5) {
            console.log(divs[j]);
            divs[j].style = '';
            divs[j].lastElementChild.innerHTML = "";
            divs[j].lastElementChild.style = '';
        }
        if (j == 4) {
            let clase = 'dep_' + divs[j].name;
            console.log('valor clase: '+clase+' valor divs[j]: '+divs[j]);
            if (divs[j].value == 1 || divs[j].value == 'otras' && divs[j].checked) {
                document.getElementsByClassName(clase)[0].style.display = 'block';
            }
            else {
                document.getElementsByClassName(clase)[0].style.display = 'none';
            }
        }
    }

}
function mostrar() {
    let clase = 'dep_' + this.name;
    if (this.value == 1 || this.value == 'otras' && this.checked) {
        document.getElementsByClassName(clase)[0].style.display = 'block';
    }
    else {
        document.getElementsByClassName(clase)[0].style.display = 'none';
    }
}
/*
let nombre = "";
let edad_rg = /d/;
let divid = nombre + "_id";
let valorid = "id_nombre"
if (!edad_rg.test(document.getElementById('id_edad').value)) {
    let mal = document.getElementById('edad_id');
    mal.style = 'border:1px solid red';
    console.log(mal.lastElementChild);
    mal.lastElementChild.innerHTML = "Incorrecto";
    mal.lastElementChild.style = 'color:red; display:inline';
    es_aux = false;

} es = es_aux && es;
}*/