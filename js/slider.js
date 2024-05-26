const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});