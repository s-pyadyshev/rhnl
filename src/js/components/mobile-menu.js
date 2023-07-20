export const mobileMenu = (function () {
  const init = function () {
    var $mobileMenuToggle = $(".js-toggle-menu");

    if (!$mobileMenuToggle.length) {
      return;
    }

    var $headerMenu = $(".header__menu");
    var $html = $("html");

    $mobileMenuToggle.on("click", function () {
      $headerMenu.toggleClass("is-open");
      $(this).toggleClass("is-open");
      $html.toggleClass("is-lock-scroll");
    });
  };

  return {
    init,
  };
})();
