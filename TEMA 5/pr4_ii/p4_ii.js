document.addEventListener('DOMContentLoaded', iniciar, false);
let ventana;
function iniciar() {
    document.getElementById('valida_id').addEventListener('click', valida);
    document.getElementById('limpiar_id').addEventListener('click', limpiar);
    for (let j = 0; j < document.getElementsByClassName('amplia').length; j++) {
        document.getElementsByClassName('amplia')[j].addEventListener('click', mostrar);
    }
    document.getElementById('id_selector_marca').addEventListener('change',genSlctmod);
    document.getElementById('id_selector_modelo').addEventListener('change',genSlctvel);
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
        if (tipo == 'radio') {j++;}
        es = es_aux && es;
    }
    let selectores = document.getElementsByTagName('select');
    let longitud_s;
    let k;
    document.getElementsByName('estudios')[0].checked ? k = 0 : k = 1;
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
        document.getElementById('otros_id').style.display='block';
        es = es_aux && es;
    }
    let checks=document.getElementById('check_id').getElementsByTagName('input');
  
    let count=0;
        for (let i = 0; i < checks.length; i++) {
           
            if(checks[i].checked){count+=1;}; 
        }
        if (count==0) {
            document.getElementById('check_id').style = 'border:1px solid red';
            document.getElementById('check_id').lastElementChild.innerHTML = "Incorrecto";
            document.getElementById('check_id').lastElementChild.style = 'color:red; display:inline-block';
            es=false;
        }

    if (es) { document.form.submit();};
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
    if (!bol) { marcar(nombre); 
    }
    return bol;
}
function valida_radio(nombre) {
    let bol = false;
    let radio = document.getElementsByName(nombre);
    if (radio[0].checked || radio[1].checked) {
        bol = true;
    } else {marcar(nombre);}
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
        }}
    let amplia_s=document.getElementsByClassName('amplia');
    for (let i = 0; i < amplia_s.length; i++) {
        let clase ='dep_' + amplia_s[i].name;
        if (amplia_s[i].value == 1 || amplia_s[i].value == 'otras' && amplia_s[i].checked) {
            document.getElementsByClassName(clase)[0].style.display = 'block';
        }
        else {
            document.getElementsByClassName(clase)[0].style.display = 'none';
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
function genSlctmod() {
    let opciones;
    switch (this.selectedIndex) {
        case 0:
            opciones='<option value="Vacio" name="Vacio">--Seleccione una opción--</option>';
            break;
            case 1:
                opciones='<option value="Vacio" name="Vacio">--Seleccione una opción--</option><option value="R5" name="R5">Rayzen 5 3600</option><option value="R7" name="R7">Rayzen 7 3800x</option>';
            break;
            case 2:
                opciones='<option value="Vacio" name="Vacio">--Seleccione una opción--</option><option value="Ci3" name="Ci3">Core i3</option><option value="Ci5" name="Ci5">Core i5</option><option value="Ci7" name="Ci7">Core i7</option>';
            break;
        default:
            break;
    }
    document.getElementById('id_selector_modelo').innerHTML=opciones;
    genSlctvel();
}
function genSlctvel() {
    let pos_mod=document.getElementById('id_selector_modelo').selectedIndex;
    let pos_mar=document.getElementById('id_selector_marca').selectedIndex;
    let opciones;
    switch (true) {
        case (pos_mod==0):
            opciones='<option value="Vacio" name="Vacio">--Seleccione una opción--</option>';
            break;
            case (pos_mod==1&&pos_mar==1):
                opciones='<option value="Vacio" name="Vacio">--Seleccione una opción--</option><option value="4.2" name="4.2">4.2Ghz</option><option value="4.4" name="4.4">4.4Ghz</option>';
            break;
            case (pos_mod==2&&pos_mar==1):
                opciones='<option value="Vacio" name="Vacio">--Seleccione una opción--</option><option value="3.9" name="3.9">3.9Ghz</option><option value="4.5" name="4.5">4.5Ghz</option>';
            break;
            case (pos_mod==1&&pos_mar==2):
                opciones='<option value="Vacio" name="Vacio">--Seleccione una opción--</option><option value="2.1" name="2.1">2.1Ghz</option><option value="2.3" name="2.3">2.3Ghz</option>';;
            break;
            case (pos_mod==2&&pos_mar==2):
                opciones='<option value="Vacio" name="Vacio">--Seleccione una opción--</option><option value="2.5" name="2.5">2.5Ghz</option><option value="3.0" name="3.0">3.0Ghz</option><option value="3.6" name="3.6">3.6Ghz</option>';;
            break;
            case (pos_mod==3):
                opciones='<option value="Vacio" name="Vacio">--Seleccione una opción--</option><option value="3.0" name="3.0">3.0Ghz</option><option value="3.6" name="3.6">3.6Ghz</option><option value="4.3" name="4.3">4.3Ghz</option>';
            break;
        default:
            break;
    }
    document.getElementById('id_selector_velocidad').innerHTML=opciones;
}
function visualiza(){
    ventana=window.open('','tabla');
    let tabla='<table id="id_tabla"></table>'

}