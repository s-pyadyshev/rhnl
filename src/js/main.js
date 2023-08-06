import { mobileMenu } from "./components/mobile-menu";
import { dropdown } from "./components/dropdown";
import { accordion } from "./components/accordion";
import { sliderNews } from "./components/slider-news";
import { sliderRecentNews } from "./components/recent-news-slider";
import { fixedHeaderOffset } from "./components/fixedHeaderOffset";

$(() => {
  mobileMenu.init();
  dropdown.init();
  accordion.init();
  sliderNews.init();
  sliderRecentNews.init();
  fixedHeaderOffset.init();
});
