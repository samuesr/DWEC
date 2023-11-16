document.addEventListener('DOMContentLoaded', finiciar, false);
function getValue() {
    let num = this.value;
    let contenido = document.getElementById('resultado').value;
    switch (num) {
        case 'EXE':
            if (contenido == "" || isNaN(contenido.charAt(contenido.length - 1))) {
                document.getElementById('resultado').value = contenido;
            } else {
             if(contenido.includes("MOD")){contenido=contenido.replace("MOD","%")}
             if(contenido.includes("^")){
                console.log('entré');
                contenido=contenido.replace("^","**")}
             console.log(contenido);
             document.getElementById('resultado').value=eval(contenido);
            }
            break;
        case 'BORRAR':
            document.getElementById('resultado').value = "";
            break;       
        default:
            document.getElementById('resultado').value = contenido + num;
            break;
    }
}
function finiciar() {
    let aux = document.getElementsByClassName('boton');
    for (let index = 0; index < aux.length; index++) {
        aux[index].addEventListener('click', getValue);
    };
}