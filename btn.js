const menuBtn = document.querySelector("#menu-btn");

// На клик по кнопке
menuBtn.addEventListener("click", () => {
  // у nav переключаем класс
  document.querySelector("nav").classList.toggle("open");
});
