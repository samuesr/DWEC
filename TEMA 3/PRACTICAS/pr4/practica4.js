function Persona(nombre,edad,telefono) {
    this.nombre=nombre;
    this.edad=edad;
    this.telefono=telefono;
    };
let tamaño;
do {
    tamaño=2;
    //window.prompt("Introduce tamaño de personas",2);
} while (isNaN(tamaño)||parseInt(tamaño)<0||parseInt(tamaño)!=tamaño);
let personas= new Array ();
for (let index = 0; index < tamaño; index++) {
    let nombre ="Navarro Navarrez"; let edad=9; let telefono=921;
    let persona=new Persona(nombre,edad,telefono);
   // let persona= new Persona (window.prompt("Introduce nombre completo"),window.prompt("Introduce edad"),window.prompt("Introduce telefono"));
    /* let nombre ="Navarro Navarrez"; let edad=9; let telefono=921;*/
    personas.push(persona);
}
console.log(personas);
console.log(personas.filter(e=>e.nombre.charAt(0)=='A'));

personas.forEach(e => {
   if( e.nombre.includes("Navarro")){
    console.log(e)
   }
});

console.log(personas.filter(e=>e.telefono.toString().charAt(0)=='9'&& e.telefono.toString().charAt(1)=='2'&&e.telefono.toString().charAt(3)=='1'));
console.log(personas.filter(e=>e.telefono>=25));


