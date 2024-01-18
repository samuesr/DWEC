document.addEventListener('DOMContentLoaded',iniciar,false);
function iniciar() {
   let div_c=document.querySelector('#page').classList;
   console.log(div_c);
   
   for (let index = 0; index < div_c.length; index++) {
    console.log (div_c.item(index));
   }
   console.log(div_c);
}