const fruits=['banana', 'orange', 'Apple', 'mango'];
const vals = fruits.values();

let text="";
for (let x of vals){
    text += x+"<br>";
}
console.log(text);
console.log(vals);