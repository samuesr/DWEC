//document.addEventListener("DOMContentLoaded",finiciar,false);
//function  finiciar (){
let precipitaciones= new Array ();
let temperaturas= new Array ();
let meses=new Array('ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic');

for (let i = 0; i < meses.length; i++) {
    let temp;
    let tprev;
    do {
        temp=window.prompt("Introduce temperatura para "+meses[i]);
        if (i==0) {tprev=temp}else{tprev=temperaturas[i-1]}
    } while (isNaN(temp) || parseInt(temp)<-10 ||parseInt(temp)>40 || parseInt(temp)!=temp||Math.abs(temp-temperaturas[i-1])>8);
    temperaturas[i]=temp;
    }
    let precipitacion;
for (let i = 0; i < meses.length; i++) {
    do{precipitacion=window.prompt("Intoduce precipitacion para "+meses[i]);
} while (isNaN(precipitacion) || parseInt(precipitacion)<0 ||parseInt(precipitacion)>50 || parseInt(precipitacion)!=precipitacion);
precipitaciones.push(precipitacion);
}
function pintar(unarray, mes, titulo){
    let contenido=" <h1>"+titulo+"</h1><p>";
    console.log(contenido);
    
for (let i = 0; i < unarray.length; i++) {

   contenido+=mes[i]+" || ";
   console.log(contenido);
        for (let index = 0; index < Math.abs(unarray[i]); index++) {
            contenido+="=";
        }
        contenido+=unarray[i]+"</p>";
        console.log(contenido);
}}
document.getElementById("temperatura").innerHTML=pintar(temperaturas,meses,"TEMPERATURAS");
document.getElementById("precipitacion").innerHTML=pintar(temperaturas,meses,"PRECIPITACIONES");

    
//}

//};