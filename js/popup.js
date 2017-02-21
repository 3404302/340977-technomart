var modal = document.querySelector("#modal-popup");
var closeButton = document.querySelector("#close-popup-button");
var openButton = document.querySelector("#open-popup-button");

closeButton.addEventListener("click", function() {
  modal.classList.toggle("popup-closed");
});

openButton.addEventListener("click", function() {
  modal.classList.toggle("popup-closed");
});