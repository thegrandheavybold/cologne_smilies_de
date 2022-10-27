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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/main.js":
/*!********************************!*\
  !*** ../src/assets/js/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_object_fit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills/object-fit */ "../src/assets/js/polyfills/object-fit.js");
/* harmony import */ var _modules_click_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/click-handlers */ "../src/assets/js/modules/click-handlers.js");
/* harmony import */ var _modules_click_handlers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_click_handlers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sliders */ "../src/assets/js/modules/sliders.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_sliders__WEBPACK_IMPORTED_MODULE_2__);

/* harmony import */ var _modules_isotote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/isotote */ "../src/assets/js/modules/isotote.js");
/* harmony import */ var _modules_isotote__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_isotote__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "../src/assets/js/modules/tabs.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "../src/assets/js/modules/click-handlers.js":
/*!**************************************************!*\
  !*** ../src/assets/js/modules/click-handlers.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.js-up').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  });
});
$('.btn-burger').on('click', function (e) {
  e.preventDefault();
  $(e.currentTarget).toggleClass('is-active');
  $('.header').toggleClass('is-active');
});
$('.js-popup').on('click', function (e) {
  e.preventDefault();
  var $this = $(e.currentTarget);

  if ($($this.attr('href')).hasClass('is-visible')) {
    $($this.attr('href')).removeClass('is-visible');
    return;
  }

  if ($($this.attr('href')).find('.js-slider').length) {
    $($this.attr('href')).find('.js-slider .slider__slides').slick('slickGoTo', $this.data('slide') - 1);
    setTimeout(function () {
      $($this.attr('href')).toggleClass('is-visible');
    }, 350);
  }
});
$('.js-scroll').on('click', function (e) {
  e.preventDefault();
  var $this = $(e.currentTarget);
  $('.btn-burger').removeClass('is-active');
  $('.header').removeClass('is-active');
  setTimeout(function () {
    $('html, body').animate({
      scrollTop: $($this.attr('href')).offset().top
    });
  }, 400);
});
$(document).on('click touchstart', function (e) {
  var $target = $(e.target);

  if (!$target.closest('.header__aside, .btn-burger').length) {
    $('.btn-burger').removeClass('is-active');
    $('.header').removeClass('is-active');
  }
});
$(document).on('click touchstart', function (e) {
  var $target = $(e.target);

  if (!$target.closest('.popup .slider, .popup .popup__btn').length) {
    $('.popup').removeClass('is-visible');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),



/***/ "../src/assets/js/modules/isotote.js":
/*!*******************************************!*\
  !*** ../src/assets/js/modules/isotote.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var $grid = $('.article-grid').isotope({
  itemSelector: '.article-grid .article-container'
});
$('.js-filters').on('click', 'a', function (e) {
  e.preventDefault();
  var $this = $(e.currentTarget);
  $this.closest('li').addClass('is-active').siblings().removeClass('is-active');
  $grid.isotope({
    filter: $this.attr('href')
  });
});
$('.js-btn-expand').on('click', function (e) {
  e.preventDefault();
  var $this = $(e.currentTarget);
  $this.closest('.section').addClass('hide-actions').find('.article-container.is-hidden').removeClass('is-hidden');
  $('.article-grid').isotope({
    itemSelector: '.article-grid .article-container',
    filter: $('.js-filters .is-active a').attr('href')
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "../src/assets/js/modules/sliders.js":
/*!*******************************************!*\
  !*** ../src/assets/js/modules/sliders.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var $win = $(window);
$win.on('load', function () {
  $('.js-slider .slider__slides').slick();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "../src/assets/js/modules/tabs.js":
/*!****************************************!*\
  !*** ../src/assets/js/modules/tabs.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function editTableText() {
  $('.js-table tr').each(function () {
    var $this = $(this);
    var index = $this.index();
    $this.find('td:first-child').append('<span>' + index + '</span>');
    $this.find('th:first-child').text($this.closest('.table').data('title-first'));
    $this.find('th:nth-child(2)').text($this.closest('.table').data('title-second'));
  });
}

$('.js-tabs .tabs__nav a').on('click', function (event) {
  var $tabLink = $(this);
  var $targetTab = $($tabLink.attr('href'));
  $tabLink.parent().add($targetTab).addClass('is-active').siblings().removeClass('is-active');
  event.preventDefault();
});
$(window).on('load', function () {
  editTableText();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "../src/assets/js/polyfills/object-fit.js":
/*!************************************************!*\
  !*** ../src/assets/js/polyfills/object-fit.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _utils_is_ms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-ms */ "../src/assets/js/utils/is-ms.js");


if (Object(_utils_is_ms__WEBPACK_IMPORTED_MODULE_0__["isIe"])()) {
  $('.js-image-fit').each(function (i, container) {
    var $container = $(container);
    var $image = $container.find('img');
    var imageSource = $image.attr('src') || $image.data('src');
    $container.css('background-image', "url(".concat(imageSource, ")"));
    $image.addClass('sr-only');
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "../src/assets/js/utils/is-ms.js":
/*!***************************************!*\
  !*** ../src/assets/js/utils/is-ms.js ***!
  \***************************************/
/*! exports provided: isIe, isEdge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIe", function() { return isIe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEdge", function() { return isEdge; });
var userAgent = window.navigator.userAgent;
var isIe = function isIe() {
  return userAgent.indexOf('Trident/') > 0;
};
var isEdge = function isEdge() {
  return userAgent.indexOf('Edge/') > 0;
};

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
