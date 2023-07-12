import { vhFix } from "./vendor/vh-fix";
import { mobileMenu } from "./components/mobile-menu";
import { dropdown } from "./components/dropdown";
import { accordion } from "./components/accordion";
import { slider } from "./components/slider";

$(() => {
  vhFix();
  mobileMenu.init();
  dropdown.init();
  accordion.init();
  slider.init();

  const header = document.querySelector(".header");
  const pageWrapper = document.querySelector(".page-wrapper");
  const headerHeight = header.offsetHeight;

  pageWrapper.style.paddingTop = `${headerHeight}px`;

  window.addEventListener("resize", () => {
    const headerHeight = header.offsetHeight;
    pageWrapper.style.paddingTop = `${headerHeight}px`;
  });
});
