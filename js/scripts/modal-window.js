
let modal = document.getElementById("modalWindow");
let btnOpenModal = document.getElementById("headerBtn");
let btnCloseModal = document.getElementsByClassName("close")[0];

btnOpenModal.onclick = function() {
   modal.style.display = "block";
}

btnCloseModal.onclick = function() {
   modal.style.display = "none";
}

window.onclick = function(event) {

   if (event.target === modal) {

      modal.style.display = "none";
   }
}