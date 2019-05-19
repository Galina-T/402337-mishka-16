"use strict";

var mapCantainer = document.querySelector(".contacts__map");

mapCantainer.classList.add("contacts__map--js");
mapCantainer.removeAttribute("href");

document.addEventListener("DOMContentLoaded", function(evt) {
  ymaps.ready(init);
  var myMap;
  var myPlacemark;

  function init() {
    myMap = new ymaps.Map("map", {
      center:[59.93881541073773, 30.323118591996035],
      zoom:16
    });
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent:"Мишка",
      balloonContent:"Милые штучки ручной работы для дома"
    },
    {
      iconLayout:"default#image",
      iconImageHref:"img/icon-map-pin.svg",
      iconImageSize:[67,100],
      iconImageOffset: [-33.5, -100]
    });

    myMap.geoObjects.add(myPlacemark);

    mapCantainer.style.position = "relative";
    myMap.container.getContainerElement().style.position = "absolute";
  }
});
