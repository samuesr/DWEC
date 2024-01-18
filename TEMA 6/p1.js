document.addEventListener('DOMContentLoaded',iniciar,false);
 function iniciar() {
    var p = document.getElementById("introduccion");
var elId = p.attributes.getNamedItem("id").nodeValue; //elId = "introduccion"
var elId = p.attributes.item(0).nodeValue;
var aux = p.attributes[0].nodeValue;
console.log(elId, aux); // elId = "introduccion"
p.attributes.getNamedItem("id").nodeValue = "preintroduccion";
var atributo = document.createAttribute("lang");
atributo.nodeValue = "es";
//p.attributes.setNamedItem(atributo);
//var p = document.getElementById("introduccion");
//var elId = p.getAttribute("id"); // elId = "introduccion"
p.setAttribute("id", "preintroduccion");

const div = document.querySelector(".info"); // <div class="info"></div>
// // Interpreta el HTML
//div.innerHTML; // "<strong>Importante</strong>"
//div.textContent; // "Importante"
div.textContent = "<strong>Importante</strong>";
 }