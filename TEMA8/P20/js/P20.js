$(document).ready(function iniciar() {
    listaasignaturas();
   $('#asignatura_id').change(listaralumnos);
});

function listaasignaturas() {
    $.getJSON("./php/asignaturas.php", {'nochache': Math.random()},
        function (data) {
            $(data).each(function (){
              $('<option/>').val(this.clave_asignatura).text(this.nombre)
               .appendTo('#asignatura_id');
        }) 
        }
    );
}
function listaralumnos() {
    console.log('en lista');
    var id=$('#asignatura_id > option[selected=true]').attr('value');
    console.log(id);
    $.getJSON("./php/alumnos.php",{'id': id},
        function (data) {
            console.log(data);
        }
    );
}