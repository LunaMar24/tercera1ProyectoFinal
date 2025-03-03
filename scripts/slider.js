// Datos de imágenes en un JSON dentro del script
const imagenes = [
    { "src": "./img/Estilo-1.jpeg", "alt": "Estilo 1" },
    { "src": "./img/Estilo-2.jpeg", "alt": "Estilo 2" },
    { "src": "./img/Estilo-3.jpeg", "alt": "Estilo 3" },
    { "src": "./img/Estilo-4.jpeg", "alt": "Estilo 4" },
    { "src": "./img/Estilo-5.jpeg", "alt": "Estilo 5" },
    { "src": "./img/Estilo-6.jpeg", "alt": "Estilo 6" },
    { "src": "./img/Estilo-7.jpeg", "alt": "Estilo 7" },
    { "src": "./img/Estilo-8.jpeg", "alt": "Estilo 8" },
    { "src": "./img/Estilo-9.jpeg", "alt": "Estilo 9" },
    { "src": "./img/Estilo-10.jpeg", "alt": "Estilo 10" },
    { "src": "./img/Estilo-11.jpeg", "alt": "Estilo 11" },
    { "src": "./img/Estilo-12.jpeg", "alt": "Estilo 12" }
];


let indiceActual = 0;

// Función para cambiar la imagen
function cambiarImagen(direccion) {
    var imagenSlider = document.getElementById("imagen-slider");
    indiceActual += direccion;

    // Si llega al final, vuelve al inicio
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    } else if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }

    // // // Actualizar imagen
    imagenSlider.src = imagenes[indiceActual].src;
    imagenSlider.alt = imagenes[indiceActual].alt;
}

(function() {
    let SLIDER = {
        init: function(){
            var imagenSlider = document.getElementById("imagen-slider");

            imagenSlider.src = imagenes[indiceActual].src;
            imagenSlider.alt = imagenes[indiceActual].alt;
        }
    }
    window.SLIDER = SLIDER;
})();