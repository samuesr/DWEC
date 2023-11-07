document.addEventListener('DOMContentLoaded', finiciar, false);


function getValue() {
    //console.log(this.value);
    let num = this.value;
    let contenido = document.getElementById('resultado').value;
    //console.log(contenido + this.value);
    switch (num) {
        case 'EXE':
            if (contenido == "" || isNaN(contenido.charAt(contenido.length - 1))) {
                document.getElementById('resultado').value = contenido;
            } else {
                document.getElementById('resultado').value = eval(contenido);
            }
            console.log(contenido.charAt(contenido.length - 1));
            break;
        case 'BORRAR':
            document.getElementById('resultado').value = "";
            break;
        case 'MOD':
            num = '%';
            document.getElementById('resultado').value = contenido + num;
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