console.log("Cargando Hamburger");

(function () {
    const MAIN_OBJ = {
        init: function () {
            this.eventhandlers();
        },
        eventhandlers: function () {
            document.querySelector('.hamburger-icon').addEventListener('click', function () {
                document.querySelector('.menu-container').classList.toggle('menu-open');
            });
        }
    }
    MAIN_OBJ.init();
})();