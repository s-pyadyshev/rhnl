import { debounce } from "./../helpers";

export const fixedHeaderOffset = (() => {
  const init = () => {
    const header = document.querySelector(".header");
    const pageWrapper = document.querySelector(".page-wrapper");

    if (header === undefined && pageWrapper === undefined) {
      return;
    }

    const headerHeight = header.offsetHeight;
    pageWrapper.style.paddingTop = `${headerHeight}px`;

    const updateHeaderOffset = debounce(() => {
      const headerHeight = header.offsetHeight;
      pageWrapper.style.paddingTop = `${headerHeight}px`;
    }, 500);

    window.addEventListener("resize", () => {
      updateHeaderOffset();
    });
  };

  return {
    init,
  };
})();
