function cargarContenido(pagina) {
    fetch(pagina)
    .then(response => response.text())
    .then(data => {
        document.getElementById("contenedor").innerHTML = data;

        setTimeout(() => {
            let contenido = contenedor.querySelector("[data-obj]");
            if (contenido) {
                let funcion = contenido.getAttribute("data-obj");
                if (funcion && typeof window[funcion] === "object") {
                    window[funcion].init();  // Ejecuta la función indicada en data-init
                }
            }
        });        
    })
    .catch(error => console.error("Error al cargar el contenido:", error));
}