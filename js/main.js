const modal = document.querySelector(".modal");
const open = document.querySelector(".login-btn");
const close = document.querySelector(".close");

open.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
window.addEventListener("click", outsideclick);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideclick(e) {
  if (e.target == modal) {
    closeModal();
  }
}
