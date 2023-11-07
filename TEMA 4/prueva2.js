var x=1;
var x2="0".repeat(Math.clz32(x))+x.toString(2);
console.log(x2);

var x3= Math.random();
x3= x3*6;
x3=Math.floor(x3);

var x4=Math.floor(Math.random()*6);
const x5 = ~~(Math.random()*6);

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);  
}
var x6=randomIntFromInterval(0,6);
console.log(x);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);
console.log(x6);