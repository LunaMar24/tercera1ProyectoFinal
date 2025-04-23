console.log("Cargando Acordion");

const dataAccordion = [
    {
        "title":"Misión",
        "desc": "Que las mujeres se muestren interesadas en los diseños de uñas y las aplicaciones de técnicas, se sientan identificadas cocn ellos y estén felices y orgullosas de traer unas manos y pies lindos y bien arreglados con los diseños con que se cuentan"
    },
    {
        "title":"Visión",
        "desc": "Tener una alta cartera de clientes, así como tener diseños de uñas muy inovadores para todo tipo de clientas, así como posicionarse en las mejores páginas de uñas."
    }
];

(function(){
    let ACCORDION = {
        init: function(){
            let _self = this;
            this.insertData(_self);
            this.eventhandler(_self);
        },
        insertData: function(_self){
            dataAccordion.map(function(item, index){
                if (document
                    .querySelector(".main-accordion-container")){                        
                        document
                        .querySelector(".main-accordion-container")
                        .insertAdjacentHTML("beforeend",_self.tplAccordionItem(item));
                    }
            });
        },
        eventhandler: function(_self){
            let arrayRefs = document.querySelectorAll(".accordion-title");
            for (let x = 0; x < arrayRefs.length; x++) {
                arrayRefs[x].addEventListener('click', function(event){
                    console.log("evento: ", event);
                    _self.showTab(event.target);
                });                
            }
        },
        tplAccordionItem: function(item){
            return `<div class= 'accordion-item'>
                        <div class= 'accordion-title'><p>${item.title}</p></div>
                        <div class= 'accordion-desc'><p>${item.desc}</p></div>
                    </div>`;
        },
        showTab: function(refItem){
            let activeTab = document.querySelector('tab-active');
            if(activeTab){
                activeTab.classList.remove('tab-active')
            }
            console.log ("Show Tab:", refItem);
            refItem.parentElement.classList.toggle("tab-active");
        }
    };
    window.ACCORDION = ACCORDION; //se usa para llamarlo cuando se carga html
    ACCORDION.init();
})();


