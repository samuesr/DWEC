$(document).ready(iniciar);
function iniciar() {
   /* $.getJSON('../php/selectAlumnos.php',$('#id_form1').serialize(),function(respuesta){
        $(respuesta).each(function(){
            console.log(this)
        })
    })*/

    listar();

    $('#id_badd').click((e)=>{
    if (
        $('#id_nombre').val() &&
        $('#id_apellidos').val() &&
        $('#id_email').val() &&
        $('#id_telefono').val()

    ) {
        console.log('clicado');
        $.ajax({
            type: "POST",
            url: "../alumnos/php/insertAlumnos.php",
            data: {
                nombre:$('#id_nombre').val(),
                apellidos:$('#id_apellidos').val(),
                email:$('#id_email').val(),
                telefono:$('#id_telefono').val(),
                nocache: Math.random()},
            success: function (response) {
                console.log("true");
                listar();
                $('id_form1').trigger('reset');
            },
            error: function (params) {
                console.log('no superado');
            }
        });
    }})

    $('table').click((e)=>{
        if ($(e.target).attr('id_pos')) {
            $.ajax({
                type: "GET",
                url: "../alumnos/php/deleteAlumnos.php",
                data: {
                    id: $(e.target).attr('id_pos'),
                    nochache: Math.random(),
                },
                success: function (response) {
                    listar();
                },
                error: function (data) {
                    console.log('Error borrar');
                }
            });
            
        }
    })

}
function listar() {
    $.ajax({
        type: "GET",
        url: "../alumnos/php/selectAlumnos.php",
        async: true,
        data: {nocache: Math.random(),},
        dataType: "json",
        success: function (response) {
            $('#id_tbody').empty();
            $(response).each(function(){ 
                $('#id_tbody').append('<tr><td>'+this.nombre+'</td><td>'+this.apellidos+'</td><td>'+this.email+'</td><td>'+this.telefono+'</td><td><button id_pos="'+this.id+'">Borrar</button></td></tr>')
            })
            
        }
    });

}
