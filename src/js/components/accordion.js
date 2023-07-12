export const accordion = (function () {
  const init = function () {
    const $accordionButtons = $("[data-accordion]");

    if (!$accordionButtons.length) {
      return;
    }

    $accordionButtons.each(function () {
      $(this).on("click", function () {
        $(this).parent().toggleClass("is-open");
      });
    });
  };

  return {
    init,
  };
})();
