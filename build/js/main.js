/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
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

/***/ "./src/js/components/fixedHeaderOffset.js":
/*!************************************************!*\
  !*** ./src/js/components/fixedHeaderOffset.js ***!
  \************************************************/
/*! exports provided: fixedHeaderOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixedHeaderOffset", function() { return fixedHeaderOffset; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helpers */ "./src/js/helpers.js");

var fixedHeaderOffset = function () {
  var init = function init() {
    var header = document.querySelector(".header");
    var pageWrapper = document.querySelector(".page-wrapper");
    if (header === undefined && pageWrapper === undefined) {
      return;
    }
    var headerHeight = header.offsetHeight;
    pageWrapper.style.paddingTop = "".concat(headerHeight, "px");
    var updateHeaderOffset = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["debounce"])(function () {
      var headerHeight = header.offsetHeight;
      pageWrapper.style.paddingTop = "".concat(headerHeight, "px");
    }, 500);
    window.addEventListener("resize", function () {
      updateHeaderOffset();
    });
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

/***/ "./src/js/components/recent-news-slider.js":
/*!*************************************************!*\
  !*** ./src/js/components/recent-news-slider.js ***!
  \*************************************************/
/*! exports provided: sliderRecentNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderRecentNews", function() { return sliderRecentNews; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


var sliderRecentNews = function () {
  var init = function init() {
    var breakpoint = window.matchMedia('(min-width: 1201px)');
    var swiperRecentNews;
    var breakpointChecker = function breakpointChecker() {
      if (breakpoint.matches === true) {
        if (swiperRecentNews !== undefined) swiperRecentNews.destroy(true, true);
        return;
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };
    var enableSwiper = function enableSwiper() {
      swiperRecentNews = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".recent-news-slider", {
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"]],
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
          768: {
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
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/slider-news.js":
/*!******************************************!*\
  !*** ./src/js/components/slider-news.js ***!
  \******************************************/
/*! exports provided: sliderNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderNews", function() { return sliderNews; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


var sliderNews = function () {
  var init = function init() {
    var breakpoint = window.matchMedia('(max-width: 1023px)');
    var swiperNews;
    var breakpointChecker = function breakpointChecker() {
      if (breakpoint.matches === true) {
        if (swiperNews !== undefined) swiperNews.destroy(true, true);
        return;
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };
    var enableSwiper = function enableSwiper() {
      swiperNews = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".slider-news", {
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"]],
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
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
    init: init
  };
}();

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: debounce, throttle, isElementInViewport, isElementCompletelyInViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementInViewport", function() { return isElementInViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementCompletelyInViewport", function() { return isElementCompletelyInViewport; });
function debounce(func, wait) {
  var timeout;
  return function () {
    var _arguments = arguments,
      _this = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      func.apply(_this, _arguments);
    }, wait);
  };
}

// const onType = debounce(() => {
//   // send request
// }, 500);

// const searchField = document.querySelector("#searchField");

// searchField.addEventListener("keydown", onType);

function throttle(func, wait) {
  var waiting = false;
  return function () {
    var _arguments2 = arguments,
      _this2 = this;
    if (waiting) {
      return;
    }
    waiting = true;
    setTimeout(function () {
      func.apply(_this2, _arguments2);
      waiting = false;
    }, wait);
  };
}

// Usage
// const onScroll = throttle(() => {}, 100);

// document.addEventListener("scroll", onScroll);

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  return vertInView && horInView;
}
function isElementCompletelyInViewport(element) {
  var coordinates = element.getBoundingClientRect();
  if (coordinates.right > window.innerWidth || coordinates.bottom > window.innerHeight) {
    return false;
  }
  if (coordinates.top < 0 || coordinates.left < 0) {
    return false;
  }
  return true;
}

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
/* harmony import */ var _components_slider_news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/slider-news */ "./src/js/components/slider-news.js");
/* harmony import */ var _components_recent_news_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/recent-news-slider */ "./src/js/components/recent-news-slider.js");
/* harmony import */ var _components_fixedHeaderOffset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/fixedHeaderOffset */ "./src/js/components/fixedHeaderOffset.js");






$(function () {
  _components_mobile_menu__WEBPACK_IMPORTED_MODULE_0__["mobileMenu"].init();
  _components_dropdown__WEBPACK_IMPORTED_MODULE_1__["dropdown"].init();
  _components_accordion__WEBPACK_IMPORTED_MODULE_2__["accordion"].init();
  _components_slider_news__WEBPACK_IMPORTED_MODULE_3__["sliderNews"].init();
  _components_recent_news_slider__WEBPACK_IMPORTED_MODULE_4__["sliderRecentNews"].init();
  _components_fixedHeaderOffset__WEBPACK_IMPORTED_MODULE_5__["fixedHeaderOffset"].init();
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map