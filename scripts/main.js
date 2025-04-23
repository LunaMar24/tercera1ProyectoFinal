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
            const menu = document.querySelector('.menu-container.menu-open');
            if (menu) {
                menu.classList.remove('menu-open');
            }
        });        
    })
    .catch(error => console.error("Error al cargar el contenido:", error));
}