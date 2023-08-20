import Swiper from "swiper";
import { Pagination } from "swiper/modules";

export const sliderRecentNews = (function () {
  const init = function () {
    if (!document.querySelectorAll(".recent-news-slider").length) {
      return;
    }
    const breakpoint = window.matchMedia("(min-width: 1201px)");
    let swiperRecentNews;

    const breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (swiperRecentNews !== undefined)
          swiperRecentNews.destroy(true, true);

        return;
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };
    const enableSwiper = function () {
      swiperRecentNews = new Swiper(".recent-news-slider", {
        modules: [Pagination],
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        },
        slidesPerView: "auto",
        spaceBetween: 20,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      });
    };

    breakpoint.addEventListener("change", breakpointChecker);

    breakpointChecker();
  };

  return {
    init,
  };
})();
