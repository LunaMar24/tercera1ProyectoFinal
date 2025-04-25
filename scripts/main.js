/*
  Este método toma el archivo que se pasa por paráemtro, lee su contenido
  y lo inserta dentro del div con id = "contenedor"
  También luego de un momento, manda a inicializar un script si se definió un valor en el atributo data-obj
*/
function cargarContenido(pagina) {
    fetch(pagina)
    .then(response => response.text())
    .then(data => {
        document.getElementById("contenedor").innerHTML = data; //Inserta el HTML en el contenedor

        setTimeout(() => {
            let contenido = contenedor.querySelector("[data-obj]");
            if (contenido) {                                           //Si se definió un data-obj se procede a llamar la función init de ese objeto
                let funcion = contenido.getAttribute("data-obj");
                if (funcion && typeof window[funcion] === "object") {
                    window[funcion].init();  // Ejecuta la función indicada en data-init                    
                }
            }
            const menu = document.querySelector('.menu-container.menu-open');
            if (menu) {
                menu.classList.remove('menu-open');
            }
        });        
    })
    .catch(error => console.error("Error al cargar el contenido:", error));
}