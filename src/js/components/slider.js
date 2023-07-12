import Swiper from "swiper/bundle";

export const slider = (function () {
  const init = function () {
    if (!$(".slider").length) {
      return;
    }

    const $swiper = new Swiper(".slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      centeredSlides: true,
      breakpoints: {
        768: {
          loop: false,
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
          loop: false,
          slidesPerView: 4,
          centeredSlides: false,
          spaceBetween: 0,
          navigation: false,
          allowTouchMove: false,
        },
      },
    });
  };

  return {
    init,
  };
})();
