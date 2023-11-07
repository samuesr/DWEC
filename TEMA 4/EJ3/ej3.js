document.addEventListener('DOMContentLoaded', main, false);
var banner = new Array ('images/imagen.jpg', 'images/imagen1.jpg', 'images/imagen2.jpg');
    var tamaño = banner.length;
    var actual = 0;
    function main() {
    rotate();
    function rotate() {
      if (document.images) {
        actual++;
        if (actual == tamaño) { actual = 0 };
        document.getElementById('imagenes').src = banner[actual];
        console.log(banner[actual]);
    }
    window.setTimeout(rotate, 1000);
}  
}