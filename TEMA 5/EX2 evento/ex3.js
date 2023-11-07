document.addEventListener('DOMContentLoaded', finiciar, false);
function finiciar() {
    document.getElementById('enviar').addEventListener('click', validaForm);
    document.getElementById('id_btlimpiar').addEventListener('click', limpiarF);
}
function limpiarE(){
    document.getElementById("e_cp").innerHTML="";
    document.getElementById("e_numero").innerHTML="";
}

function validaForm() {
    limpiarE();
    let fval=true;
    if (isNaN(parseInt(document.getElementById('numero').value)) || document.getElementById('numero').value == "") {
        document.getElementById("e_numero").innerHTML="Error campo numero";
        fval=false;
    }
    if (isNaN(parseInt(document.getElementById('id_cp').value)) || document.getElementById('id_cp').value == "" || !(document.getElementById('id_cp').value.length==5)) {
       document.getElementById("e_cp").innerHTML="Error campo cp";
        fval=false;
    }
    if (fval) document.getElementById('miformu').submit();
    
    }
function limpiarF(){
    limpiarE();
    document.getElementById('miformu').reset();
   // document.getElementById('numero')="";document.getElementById('id_cp')="";

}

