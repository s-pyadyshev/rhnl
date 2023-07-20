/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/*! exports provided: accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accordion", function() { return accordion; });
var accordion = function () {
  var init = function init() {
    var accordionList = document.querySelectorAll(".accordion-list");
    if (!accordionList.length) {
      return;
    }
    accordionList.forEach(function (list) {
      list.addEventListener("click", function (event) {
        toggleAccordion(event);
      });
    });
    function toggleAccordion(event) {
      var accordionButton = event.target.closest(".accordion__toggle");
      var isExpanded = accordionButton.getAttribute("aria-expanded") === "true";
      var target = accordionButton.parentElement.nextElementSibling;
      accordionButton.setAttribute("aria-expanded", !isExpanded);
      target.classList.toggle("is-open");
    }
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/dropdown.js":
/*!***************************************!*\
  !*** ./src/js/components/dropdown.js ***!
  \***************************************/
/*! exports provided: dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdown", function() { return dropdown; });
var dropdown = function () {
  var init = function init() {
    if (!document.querySelectorAll("[data-toggle~=dropdown]").length) {
      return;
    }
    document.querySelectorAll("[data-toggle~=dropdown]").forEach(setupDropdown);
    function setupDropdown(dropdownToggle) {
      dropdownToggle.setAttribute("aria-haspopup", "true");
      dropdownToggle.setAttribute("aria-expanded", "false");
      var dropdownMenu = dropdownToggle.parentNode.querySelector(".dropdown-menu");
      dropdownMenu.setAttribute("aria-hidden", "true");
      dropdownToggle.onclick = toggleDropdown;
      function toggleDropdown() {
        if (dropdownToggle.getAttribute("aria-expanded") === "true") {
          dropdownToggle.setAttribute("aria-expanded", "false");
          dropdownMenu.setAttribute("aria-hidden", "true");
          dropdownToggle.parentNode.classList.remove("dropdown-on");
          return;
        }
        dropdownToggle.setAttribute("aria-expanded", "true");
        dropdownMenu.setAttribute("aria-hidden", "false");
        dropdownToggle.parentNode.classList.add("dropdown-on");
        return;
      }
    }
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/mobile-menu.js":
/*!******************************************!*\
  !*** ./src/js/components/mobile-menu.js ***!
  \******************************************/
/*! exports provided: mobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileMenu", function() { return mobileMenu; });
var mobileMenu = function () {
  var init = function init() {
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
    init: init
  };
}();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/mobile-menu */ "./src/js/components/mobile-menu.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/components/dropdown.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accordion */ "./src/js/components/accordion.js");



// import { slider } from "./components/slider";

$(function () {
  _components_mobile_menu__WEBPACK_IMPORTED_MODULE_0__["mobileMenu"].init();
  _components_dropdown__WEBPACK_IMPORTED_MODULE_1__["dropdown"].init();
  _components_accordion__WEBPACK_IMPORTED_MODULE_2__["accordion"].init();
  // slider.init();

  var header = document.querySelector(".header");
  var pageWrapper = document.querySelector(".page-wrapper");
  var headerHeight = header.offsetHeight;
  pageWrapper.style.paddingTop = "".concat(headerHeight, "px");
  window.addEventListener("resize", function () {
    var headerHeight = header.offsetHeight;
    pageWrapper.style.paddingTop = "".concat(headerHeight, "px");
  });
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map