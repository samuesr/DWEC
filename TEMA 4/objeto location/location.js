document.addEventListener('DOMContentLoaded',ininciar, false);
function adelante() {
    history.forward();
    return true;
}

function atras() {
    history.back();
    return true;
}
function irA() {
    let url = document.getElementById("url").value;
    location.assign(url);
    //return true;
}
function ininciar() {
    document.getElementById("id_balante").addEventListener("click", adelante);
    document.getElementById("id_batras").addEventListener("click", atras);
    document.getElementById("id_bir_a").addEventListener("click", irA);
}