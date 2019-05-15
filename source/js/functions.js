"use strict";

(function () {
  function opensModalCart (evt) {
    evt.preventDefault();
    modalCart.classList.add("modal-cart--show");
  }

  function closesModalCart (evt) {
    evt.preventDefault();
    modalCart.classList.remove("modal-cart--show");
  }

  window.functions = {
    opensModalCart: opensModalCart,
    closesModalCart: closesModalCart,
  };
})();
