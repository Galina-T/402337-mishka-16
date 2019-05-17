"use strict";

document.addEventListener("DOMContentLoaded", function(evt) {
  ymaps.ready(init);
  var myMap;
  var myPlacemark;

  function init() {
    myMap = new ymaps.Map("map", {
      center:[59.93881541073773, 30.323118591996035],
      zoom:16,
      controls:["zoomControl"]
    });
    myPlacemark = new ymaps.Placemark([59.93881541073773, 30.323118591996035], {
      hintContent:"Мишка",
      balloonContent:"Милые штучки ручной работы для дома",
      iconLayout:"default#imageWithContent",
      iconImageHref:"img/icon-map-pin.svg",
      iconImageSize:[67,100]
    });
    myMap.geoObjects.add(myPlacemark);
  }
});
