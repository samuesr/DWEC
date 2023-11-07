let ejemploArray= new Array ();
ejemploArray[0]="verde";
ejemploArray[1]="Argentina";
ejemploArray[2]="mate";
console.log("La longitud de ejemploArray es: "+ejemploArray.length);

let ejemploPropiedades = new Array();
ejemploPropiedades["color"]="verde";
ejemploPropiedades["pais"]="Argentina";
ejemploPropiedades["bebida"]="mate";
console.log("La longitus de ejemploPropiedades es:"+ejemploPropiedades.length);

console.log("La propiedad color vale: "+ejemploPropiedades['color']);
console.log("La propiedad color vale: "+ejemploPropiedades.color);
console.log("La propiedad color vale: "+ejemploPropiedades[0]);
for (let index = 0; index < ejemploArray.length; index++) {

   // console.log("El valor en ejempoloArray vale: "+ejemploPropiedades[i]);
    
}
for (let index = 0; index < ejemploPropiedades.length; index++) {
    
    console.log("LEl valor en ejemploPropiedades vale: "+ejemploPropiedades[i]);
}
