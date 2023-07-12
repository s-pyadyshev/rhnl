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
    var $mobileMenuClose = $(".menu-toggle-close ");
    if (!$mobileMenuToggle.length) {
      return;
    }
    var $body = $("body");
    $mobileMenuToggle.on("click", function () {
      $body.toggleClass("mobile-menu-active");
      $mobileMenuClose.focus();
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var slider = function () {
  var init = function init() {
    var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".slider", {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button"
      }
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
/* harmony import */ var _vendor_vh_fix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/vh-fix */ "./src/js/vendor/vh-fix.js");
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mobile-menu */ "./src/js/components/mobile-menu.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/components/dropdown.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/accordion */ "./src/js/components/accordion.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");





window.addEventListener("load", function () {
  Object(_vendor_vh_fix__WEBPACK_IMPORTED_MODULE_0__["vhFix"])();
  _components_mobile_menu__WEBPACK_IMPORTED_MODULE_1__["mobileMenu"].init();
  _components_dropdown__WEBPACK_IMPORTED_MODULE_2__["dropdown"].init();
  _components_accordion__WEBPACK_IMPORTED_MODULE_3__["accordion"].init();
  _components_slider__WEBPACK_IMPORTED_MODULE_4__["slider"].init();
  var header = document.querySelector(".header");
  var pageWrapper = document.querySelector(".page-wrapper");
  var headerHeight = header.offsetHeight;
  pageWrapper.style.paddingTop = "".concat(headerHeight, "px");
  window.addEventListener("resize", function () {
    var headerHeight = header.offsetHeight;
    pageWrapper.style.paddingTop = "".concat(headerHeight, "px");
  });
}, false);

/***/ }),

/***/ "./src/js/vendor/vh-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/vh-fix.js ***!
  \*********************************/
/*! exports provided: vhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vhFix", function() { return vhFix; });
var vhFix = function vhFix() {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
    window.addEventListener("resize", function () {
      vh = window.innerHeight;
      document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
    });
  }
};


// .module {
// 	height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
// 	height: calc(var(--vh, 1vh) * 100);
// }

/***/ })

/******/ });
//# sourceMappingURL=main.js.map