const modalBtn = document.querySelector("#modal-btn");
const modal = document.querySelector("#modal");
const modalCloseBtn = document.querySelector("#modal-close");

modalBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});
