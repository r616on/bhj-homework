const modalMain = document.getElementById("modal_main");
modalMain.className = "modal modal_active";
const modalClose = document.getElementsByClassName("modal__close");
const lenght = modalClose.length;
const showSuccess = document.getElementsByClassName("show-success");
const modalSuccess = document.getElementById("modal_success");

const modal = document.getElementsByClassName("modal");
const modalLenght = modal.length;

function popapClose() {
   for (let i = 0; i < modalLenght; i++) {
      modal[i].className = "modal";
   };
}

for (let i = 0; i < lenght; i++) {
   modalClose[i].onclick = popapClose;
};

showSuccess[0].onclick = function () {
   popapClose();
   modalSuccess.className = "modal modal_active";

};