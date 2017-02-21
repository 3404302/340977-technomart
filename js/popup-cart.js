var modal = document.querySelector("#modal-popup-cart");
var closeButton = document.querySelector("#close-popup-button-cart")
var closeButton2 = document.querySelector("#close-popup-button-cart2");
var openButton = document.querySelector("#open-popup-button");

closeButton.addEventListener("click", function() {
  modal.classList.toggle("popup-closed");
});

closeButton2.addEventListener("click", function() {
  modal.classList.toggle("popup-closed");
});

openButton.addEventListener("click", function() {
  modal.classList.toggle("popup-closed");
});