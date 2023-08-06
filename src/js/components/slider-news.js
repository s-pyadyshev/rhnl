import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export const sliderNews = (function () {
  const init = function () {
    const breakpoint = window.matchMedia( '(max-width: 1023px)');
    let swiperNews;

    const breakpointChecker = function() {

      if ( breakpoint.matches === true ) {

      if ( swiperNews !== undefined ) swiperNews.destroy( true, true );

      return;

        } else if ( breakpoint.matches === false ) {
          return enableSwiper();
        }
    };
    const enableSwiper = function() {
      swiperNews = new Swiper(".slider-news", {
        modules: [Navigation],
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        }
      });
    };

    breakpoint.addEventListener('change', breakpointChecker);

    breakpointChecker();
  };

  return {
    init,
  };
})();
