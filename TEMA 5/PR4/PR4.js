document.addEventListener('DOMContentLoaded',iniciar,false);

function iniciar(){
    for (let j = 0; j < document.getElementsByClassName('amplia').length; j++) {
        document.getElementsByClassName('amplia')[j].addEventListener('click',mostrar);
        //document.getElementsByName().addEventListener()
    }
    //console.log(document.getElementsByClassName('amplia'));
    let estudios=document.getElementsByName('estudios');
    let ordenador=document.getElementsByName('ordenador_y');
    let marca=document.getElementsByName('marca');
    let otras=document.getElementsByName('otras');
    console.log(estudios, ordenador, marca, otras);


}
function mostrar() {
if(this.checked){
    let clase='dep_'+this.name;
    console.log (clase);
    document.getElementsByClassName(clase)[0].style.display='block';
};

}