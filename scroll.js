const menuBtns = document.querySelectorAll(".menu-btn");
const scrollUpBtn = document.querySelector("#scroll-btn");

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Находим ID, хранящийся в атрибуте data-target
    let targetId = btn.getAttribute("data-target"); // acc-section
    // Выделяем селектором по ID
    let target = document.getElementById(targetId);
    // Находим отступ элемента от верха страницы
    let targetOffset = target.offsetTop;
    console.log(targetOffset, "offset");
    // Прокручиваем страницу
    window.scrollTo(0, targetOffset);
  });
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
