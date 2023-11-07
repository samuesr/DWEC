function Persona(nombre, edad, tlf) {
    this.nombre=nombre;
    this.edad=edad;
    this.tlf=tlf;
    this.muestraPersona=muestraPersona;
}
function muestraPersona(persona) {
    return (persona.nombre+"  "+persona.edad+"  "+persona.tlf);
    
}
let tamaño;
let personas;
do {
    tamaño=window.prompt("Introduce el numero de personas",0);
} while (tamaño<0 || isNaN(tamaño)|| parseInt(tamaño)!=tamaño);
personas= new Array ();
for (let index = 0; index < tamaño; index++) {
    let nombre;
    let edad;
    let tlf;
    do {
        nombre=window.prompt("Introduce nombre: ");
    } while (nombre.length<=0||isNaN(nombre.length));
   do {
        edad=window.prompt("Introduce edad: ")
   } while (edad>100||edad<1 || isNaN(edad)|| parseInt(edad)!=edad);
   do {
        tlf=window.prompt("Introduce número de telefono:")
   } while (tlf.length!=9||isNaN(tlf)|| parseInt(tlf)!=tlf);
    let persona= new Persona (nombre, edad,tlf);
   console.log(personas.push(persona));
}
for (let index = 0; index < personas.length; index++) {
    console.log(personas[index].nombre);
    if (personas[index].nombre.charAt(0)=='A'){
        window.alert('Persona que empieza con A');
        window.alert(muestraPersona(personas[index]));
    }
    
}
personas.forEach(element => {
    if (element.nombre.includes("Navarro")) {
        window.alert("Persona con Navarro")
        window.alert(muestraPersona(persona));
    }
});
window.alert(personas.filter(e=>e.telefono.toString().charAt(0)=='9'&& e.telefono.toString().charAt(1)=='2'&&e.telefono.toString().charAt(3)=='1'));
window.alert(personas.filter(e=>e.telefono>=25));


