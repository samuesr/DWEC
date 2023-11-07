
let mywindow= window.open("", "MsgWindow","width=200,height=100");

mywindow.document.write("<p>Tis is a MsgWindow. I am 20px wide and 100px height</p>");
let aux= window.confirm("¿Desea cerrar la ventana?");
if (aux) {
    mywindow.close();
} 
