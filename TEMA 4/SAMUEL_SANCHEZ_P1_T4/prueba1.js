document.addEventListener("DOMContentLoaded", finiciar, false);
function finiciar() {
    let factual = new Date();
    function primerDia(fecha) {
        let auxfecha = new Date(fecha.getFullYear(), fecha.getMonth(), 1);
        let diaUno = auxfecha.getDay();
        if (diaUno == 0) {
            return diaUno = 6;
        } else { return diaUno -= 1; }
    }
    function nDias(fecha) {
        let dias = fecha.getMonth();
        let ndias;
        if (dias == 1) {
            if (fecha.getYear() % 4 == 0) { ndias = 29; }
            else { ndias = 28; }
        } else {
            if (dias <= 6 && dias % 2 == 0 || dias > 6 && dias % 2 == 0) {
                ndias = 31; }
            else { ndias = 30; }
        }
        return ndias;
    }

    function calendario(fecha) {
        let cominenzo = primerDia(fecha);
        let diaHoy = cominenzo + parseInt(fecha.getDate());
        console.log(fecha);
        let dias = nDias(fecha);
        let totalDias = dias + cominenzo;
        let tabla = "<table style='border:1px solid black'> <tr><td>LUNES</td><td>MARTES</td><td>MIERCOLES</td><td>JUEVES</td><td>VIERNES</td><td>SABADO</td><td>DOMINGO</td></tr>";


        for (let i = 1; i <= totalDias; i) {
            tabla += "<tr>";
            for (let index = 0; index < 7; index++) {
                if (i <= cominenzo || i > totalDias) {
                    tabla += "<td></td>"; i++;
                } else {
                    if (diaHoy != i) { tabla += `<td>${i - cominenzo}</td>`; i++; }
                    else { tabla += `<td><b>${i - cominenzo}</b></td>`; i++; }
                }
            }
            tabla += "</tr>";
        };
        tabla += "</table>";
        return tabla;
    }
    let tablilla = calendario(factual);
    document.getElementById("tabla").innerHTML = tablilla;

}
