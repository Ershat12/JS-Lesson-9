AOS.init();
var swiper = new Swiper(".swiper", {
  // Направление
  direction: "horizontal",
  // Конечность
  loop: true,

  // Пагинация
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Скролл
  scrollbar: { el: ".swiper-scrollbar" },

  // Расстояние между слайдами
  spaceBetween: 20,

  // Количество слайдов в одной странице
  slidesPerView: 3,

  // Кнопки навигации
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
