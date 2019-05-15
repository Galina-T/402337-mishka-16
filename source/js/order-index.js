"use strict";

var featuredButton = document.querySelector(".featured__button");
var modalCart = document.querySelector(".modal-cart");

featuredButton.addEventListener("click", function (evt) {
  window.functions.opensModalCart(evt);
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalCart.classList.contains("modal-cart--show")) {
      modalCart.classList.remove("modal-cart--show");
    }
  }
});
