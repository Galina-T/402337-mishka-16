"use strict";

var catalogButtons = document.querySelectorAll(".catalog-list__button");
var modalCart = document.querySelector(".modal-cart");

Array.prototype.forEach.call(catalogButtons, function (el) {
  el.addEventListener("click", function (evt) {
    window.functions.opensModalCart(evt);
  });
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalCart.classList.contains("modal-cart--show")) {
      modalCart.classList.remove("modal-cart--show");
    }
  }
});
