
function reloj(){
    let reloj= new Date();
    document.getElementById("id_reloj").innerHTML=reloj.getHours()+":"+reloj.getMinutes()+":"+reloj.getSeconds();
}
let mireloj= window.setInterval(reloj,1000);