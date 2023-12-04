
        function Libro(nombre,autor,tema) {
            this.nombre=nombre;
            this.autor=autor;
            this.tema=tema;
        }
        let tamaño;
        let biblioteca= new Array ();
        do {
            tamaño=window.prompt("Introduce tamaño de la libreria",0);
        } while (isNaN(parseInt(tamaño))|| parseInt(tamaño)<0 || parseInt(tamaño)!=tamaño);
        for (let index = 0; index < tamaño; index++) {
                let nombre=window.prompt("Introduce el nombre del libro");
                let autor=window.prompt("Introduce el autor del libro");
                let tema=window.prompt("Introduce el tema del libro");

                let libro= new Libro(nombre, autor, tema);

                window.alert(biblioteca.push(libro));
        }
        let mitabla='<table><tr><td>Nombre</td><td>Autor</td><td>Tema</td></tr>';
        biblioteca.forEach(element => {
            mitabla+="<tr><td>"+element.nombre+"</td><td>"+element.autor+"</td><td>"+element.tema+"</td></tr>";  
        });
        mitabla+="</table>";
        document.getElementById('tabla').innerHTML=mitabla;