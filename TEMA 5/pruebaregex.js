rg=/(http|https):\/\/([^\/\r\n]+)(\/[^\r\n]*)?/gm;
resulta=rg.exec('https://2019-developers.sevilla.wordcamp.org/informacion/programa/schedule/');
console.log (resulta);
const r= /\d{4}/g;
const str= "Lorem Ipsum has been the indrustry's standar dummy test since 1500s. It was popularrised in dhe 1960s";
console.log(str.match(r));
const r2= /\bv([0-9]+)\.([0-9]+)\.([0-9]+)\b/;
const str2 = 'v5.2.34 v6.7.35';
console.log(str2.match(r2));
const r3 =/rojo/g;
const str3= "Es recomndable subrayar en color rojo porque el rojo es el mejor color para nuestra memoria visual";
console.log (str3.replace(r3,'verde'));


