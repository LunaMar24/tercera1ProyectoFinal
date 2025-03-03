console.log("Cargando Cards...");

const dataCards =  [
    {
        "title":"Manicure Spa",
        "url_image":"./img/manicureSpa.jpg",
        "desc":"Experiencia relajante centrada en el cuido de las manos, combinando salud, estética y relajación",
        "cta":"Mostrar más...",
        "link": "https://www.youtube.com/watch?v=Bp_IIDkKIwg"
    },
    {
        "title":"Pedicure Spa",
        "url_image":"./img/pedicureSpa.jpg",
        "desc":"Tratamiento de belleza que incluye la mejora estética de los pies y su cuidado",
        "cta":"Mostrar más...",
        "link": "https://www.youtube.com/watch?v=9Meeeq5m2ew"
    },
    {
        "title":"Diseño de Uñas",
        "url_image":"./img/disenoUnas.jpg",
        "desc":"Decoración y mejoramiento del aspecto de las uñas mediante el uso de esmaltes de uñas, decoraciones y técnicas de pintado",
        "cta":"Mostrar más...",
        "link": "https://www.youtube.com/watch?v=e7GmdUTVOvQ"
    }  
];


(function(){
  let CARD = {

    init: function(){
        let _self = this;
        this.insertData(_self);
    },
    insertData: function(_self){
        dataCards.map (function(item, index){
            document.querySelector('.cards-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));            
        });
    },
    tplCardItem: function(item, index){
        return (`<div class='card-item' id='card-number-${index}'> 
                    <img src='${item.url_image}'>
                    <div class='card-info'>
                      <p class='card-title'>${item.title}</p>
                      <p class='card-desc'>${item.desc}</p>
                      <a class='card-cta' target='blank' href='${item.link}'>${item.cta}</a>
                    </div>            
                </div>`);
    },
  }
CARD.init();
})();