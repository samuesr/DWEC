class Forma {
    forma
    color
    quesoy(){
        console.log('Soy un '+this.forma+' de color '+this.color);
    }
    constructor(forma,color){
        this.forma=forma;
        this.color=color;
    }
}
class Cuadrado extends Forma{
    lado;
    area;
    constructor(lado,color){
       super('cuadrado',color); 
       this.lado=lado;
        this.area=lado*lado;
        
    }
}

let cuad = new Cuadrado ('4','verde');
console.log('Lado del cuadrado: '+cuad.lado);
console.log('Area del cuadrado: '+cuad.area);
console.log('Color del cuadrado: '+cuad.color);
console.log('Forma del cuadrado: '+cuad.forma);
cuad.quesoy();

