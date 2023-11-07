console.log("Height: "+screen.height);
console.log("Width:: "+screen.width);
console.log("availHeight: "+screen.availHeight);
console.log("availWidth:: "+screen.availWidth);
let mivent= window.open("Ventana","ventanuco",width=20, height=40);
mivent.moveTo(0,0);
mivent.resizeTo(screen.availWidth,screen.availHeight);
mivent.resizeTo(400,400);
mivent.moveTo(40,40);