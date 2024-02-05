document.addEventListener('DOMContentLoaded',iniciar);
function iniciar() {
    var resultado= document.getElementById('resultado_id');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function (objPosition) {
            var long= objPosition.coords.longitude;
            var lat= objPosition.coords.latitude;
            var alt= objPosition.coords.altitude;
            resultado.innerHTML="<p><strong>Latitud</strong>"+lat+"</p><p><strong>Longitud:</strong>"+long+"</p>";
            var map = L.map('map').setView([lat,long],13);
           var marker = L.marker([lat,long],{alt: 'Posicion actual'}).addTo(map).bindPopup('Esta es mi posición actual!');
           L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
        },function (objPositionError) {  
            switch (objPositionError.code) {
                case objPositionError.PERMISSION_DENIED:
                    resultado.innerHTML="No se ha permitido el acceso a la posición del usuario";
                    break;
                case objPositionError.POSITION_UNAVAILABLE:
                    resultado.innerHTML="No se ha podidido acceder a la información su posición";
                    break;
                case objPositionError.TIMEOUT:
                    resultado.innerHTML="El servicio ha tardado demasiado en responder";
                    break;
            
                default:
                    resultado.innerHTML="Error desconocido";
                    break;
            }
        },{maximumAge:75000000, timeout: 15000000})
    } else{resultado.innerHTML="Su navegador no soporta la API de geolocalización"}

    
}
