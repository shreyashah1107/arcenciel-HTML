/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n$(document).ready(function () {\n  \"use strict\"; // Easy selector helper function\n\n  var select = function select(el) {\n    var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    el = el.trim();\n\n    if (all) {\n      return _toConsumableArray(document.querySelectorAll(el));\n    } else {\n      return document.querySelector(el);\n    }\n  }; // Easy event listener function\n\n\n  var on = function on(type, el, listener) {\n    var all = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n    var selectEl = select(el, all);\n\n    if (selectEl) {\n      if (all) {\n        selectEl.forEach(function (e) {\n          return e.addEventListener(type, listener);\n        });\n      } else {\n        selectEl.addEventListener(type, listener);\n      }\n    }\n  }; // Easy on scroll event listener \n\n\n  var onscroll = function onscroll(el, listener) {\n    el.addEventListener('scroll', listener);\n  }; // Navbar links active state on scroll\n\n\n  var navbarlinks = select('#navbar .scrollto', true);\n\n  var navbarlinksActive = function navbarlinksActive() {\n    var position = window.scrollY + 200;\n    navbarlinks.forEach(function (navbarlink) {\n      if (!navbarlink.hash) return;\n      var section = select(navbarlink.hash);\n      if (!section) return;\n\n      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {\n        navbarlink.classList.add('active');\n      } else {\n        navbarlink.classList.remove('active');\n      }\n    });\n  };\n\n  window.addEventListener('load', navbarlinksActive);\n  onscroll(document, navbarlinksActive); // Scrolls to an element with header offset\n\n  var scrollto = function scrollto(el) {\n    var header = select('#header');\n    var offset = header.offsetHeight;\n\n    if (!header.classList.contains('header-scrolled')) {\n      offset -= 20;\n    }\n\n    var elementPos = select(el).offsetTop;\n    window.scrollTo({\n      top: elementPos - offset,\n      behavior: 'smooth'\n    });\n  }; // Toggle .header-scrolled class to #header when page is scrolled\n\n\n  var selectHeader = select('#header');\n\n  if (selectHeader) {\n    var headerScrolled = function headerScrolled() {\n      if (window.scrollY > 100) {\n        selectHeader.classList.add('header-scrolled');\n      } else {\n        selectHeader.classList.remove('header-scrolled');\n      }\n    };\n\n    window.addEventListener('load', headerScrolled);\n    onscroll(document, headerScrolled);\n  } // Mobile nav toggle\n\n\n  on('click', '.mobile-nav-toggle', function (e) {\n    select('#navbar').classList.toggle('navbar-mobile');\n    this.classList.toggle('is-active');\n  }); // Scroll with offset on links with a class name .scrollto\n\n  on('click', '.scrollto', function (e) {\n    if (select(this.hash)) {\n      e.preventDefault();\n      var navbar = select('#navbar');\n\n      if (navbar.classList.contains('navbar-mobile')) {\n        navbar.classList.remove('navbar-mobile');\n        var navbarToggle = select('.mobile-nav-toggle');\n        navbarToggle.classList.toggle('is-active');\n      }\n\n      scrollto(this.hash);\n    }\n  }, true); // Scroll with ofset on page load with hash links in the url\n\n  window.addEventListener('load', function () {\n    if (window.location.hash) {\n      if (select(window.location.hash)) {\n        scrollto(window.location.hash);\n      }\n    }\n  }); // 3D Stacked Slider\n\n  function detect_active() {\n    var get_active = $(\".house-tour-slider .house-tour-slider--item:first-child\").data(\"class\");\n  }\n\n  $(\".tour-next\").click(function () {\n    var total = $(\".house-tour-slider--item\").length;\n    $(\".house-tour-slider .house-tour-slider--item:first-child\").hide().appendTo(\".house-tour-slider\").fadeIn();\n    $.each($('.house-tour-slider--item'), function (index, slider_item) {\n      $(slider_item).attr('data-position', index + 1);\n    });\n    detect_active();\n  });\n  $(\".tour-prev\").click(function () {\n    var total = $(\".house-tour-slider--item\").length;\n    $(\".house-tour-slider .house-tour-slider--item:last-child\").hide().prependTo(\".house-tour-slider\").fadeIn();\n    $.each($('.house-tour-slider--item'), function (index, slider_item) {\n      $(slider_item).attr('data-position', index + 1);\n    });\n    detect_active();\n  });\n  $(\"body\").on(\"click\", \".house-tour-slider .house-tour-slider--item:not(:first-child)\", function () {\n    var get_slide = $(this).attr('data-class');\n    $(\".house-tour-slider .house-tour-slider--item[data-class=\" + get_slide + \"]\").hide().prependTo(\".house-tour-slider\").fadeIn();\n    $.each($('.house-tour-slider--item'), function (index, slider_item) {\n      $(slider_item).attr('data-position', index + 1);\n    });\n    detect_active();\n  }); // Hero Swiper\n\n  var swiper = new Swiper('.swiper-hero', {\n    slidesPerView: 1,\n    spaceBetween: 20,\n    autoplay: true,\n    speed: 1000,\n    delay: 5000,\n    navigation: {\n      nextEl: \".swiper-button-next\",\n      prevEl: \".swiper-button-prev\"\n    }\n  }); // Location Swiper\n\n  var swiper = new Swiper('.swiper-location', {\n    // effect: \"coverflow\",\n    slidesPerView: 1.3,\n    spaceBetween: 90,\n    centeredSlides: true,\n    loop: true,\n    autoplay: true,\n    speed: 1000,\n    delay: 5000,\n    navigation: {\n      nextEl: \".swiper-button-next\",\n      prevEl: \".swiper-button-prev\"\n    },\n    breakpoints: {\n      0: {\n        slidesPerView: 1.6,\n        spaceBetween: 20\n      },\n      993: {\n        slidesPerView: 1.3,\n        spaceBetween: 90\n      }\n    }\n  }); // Amenities Swiper\n\n  var swiper = new Swiper('.swiper-amenities', {\n    slidesPerView: 1,\n    spaceBetween: 20,\n    autoplay: true,\n    speed: 1000,\n    delay: 5000,\n    navigation: {\n      nextEl: \".swiper-button-next\",\n      prevEl: \".swiper-button-prev\"\n    }\n  }); // Configuration Swiper\n\n  var swiper = new Swiper(\".configuration-card--swiper-thumbnails\", {\n    loop: false,\n    spaceBetween: 10,\n    slidesPerView: 2,\n    freeMode: true,\n    watchSlidesProgress: true\n  });\n  var swiper2 = new Swiper(\".configuration-card--swiper\", {\n    loop: false,\n    spaceBetween: 10,\n    thumbs: {\n      swiper: swiper\n    },\n    pagination: {\n      el: \".swiper-pagination\",\n      clickable: true\n    }\n  }); // Testimonial Swiper\n\n  var swiper = new Swiper('.swiper-testimonial', {\n    slidesPerView: 1.3,\n    spaceBetween: 90,\n    centeredSlides: true,\n    loop: true,\n    autoplay: true,\n    speed: 1000,\n    delay: 5000,\n    breakpoints: {\n      0: {\n        slidesPerView: 1.3,\n        spaceBetween: 20\n      },\n      993: {\n        slidesPerView: 1.4,\n        spaceBetween: 90\n      }\n    }\n  }); // Initialize select2\n\n  $('.js-select2').select2();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmNlbmNpZWwvLi9yZXNvdXJjZXMvanMvYXBwLmpzP2NlZDYiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWxlY3QiLCJlbCIsImFsbCIsInRyaW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVlcnlTZWxlY3RvciIsIm9uIiwidHlwZSIsImxpc3RlbmVyIiwic2VsZWN0RWwiLCJmb3JFYWNoIiwiZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbnNjcm9sbCIsIm5hdmJhcmxpbmtzIiwibmF2YmFybGlua3NBY3RpdmUiLCJwb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFkiLCJuYXZiYXJsaW5rIiwiaGFzaCIsInNlY3Rpb24iLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzY3JvbGx0byIsImhlYWRlciIsIm9mZnNldCIsImNvbnRhaW5zIiwiZWxlbWVudFBvcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJzZWxlY3RIZWFkZXIiLCJoZWFkZXJTY3JvbGxlZCIsInRvZ2dsZSIsInByZXZlbnREZWZhdWx0IiwibmF2YmFyIiwibmF2YmFyVG9nZ2xlIiwibG9jYXRpb24iLCJkZXRlY3RfYWN0aXZlIiwiZ2V0X2FjdGl2ZSIsImRhdGEiLCJjbGljayIsInRvdGFsIiwibGVuZ3RoIiwiaGlkZSIsImFwcGVuZFRvIiwiZmFkZUluIiwiZWFjaCIsImluZGV4Iiwic2xpZGVyX2l0ZW0iLCJhdHRyIiwicHJlcGVuZFRvIiwiZ2V0X3NsaWRlIiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImF1dG9wbGF5Iiwic3BlZWQiLCJkZWxheSIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJjZW50ZXJlZFNsaWRlcyIsImxvb3AiLCJicmVha3BvaW50cyIsImZyZWVNb2RlIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsInN3aXBl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QUFDcERVLElBQUFBLElBQUksRUFBRSxLQUQ4QztBQUVwRFIsSUFBQUEsWUFBWSxFQUFFLEVBRnNDO0FBR3BEYSxJQUFBQSxNQUFNLEVBQUU7QUFDSmhCLE1BQUFBLE1BQU0sRUFBRUE7QUFESixLQUg0QztBQU1wRGlCLElBQUFBLFVBQVUsRUFBRTtBQUNSekUsTUFBQUEsRUFBRSxFQUFFLG9CQURJO0FBRVIwRSxNQUFBQSxTQUFTLEVBQUU7QUFGSDtBQU53QyxHQUExQyxDQUFkLENBeE15QixDQW9OekI7O0FBQ0EsTUFBSWxCLE1BQU0sR0FBRyxJQUFJQyxNQUFKLENBQVcscUJBQVgsRUFBa0M7QUFDM0NDLElBQUFBLGFBQWEsRUFBRSxHQUQ0QjtBQUUzQ0MsSUFBQUEsWUFBWSxFQUFFLEVBRjZCO0FBRzNDTyxJQUFBQSxjQUFjLEVBQUUsSUFIMkI7QUFJM0NDLElBQUFBLElBQUksRUFBRSxJQUpxQztBQUszQ1AsSUFBQUEsUUFBUSxFQUFFLElBTGlDO0FBTTNDQyxJQUFBQSxLQUFLLEVBQUUsSUFOb0M7QUFPM0NDLElBQUFBLEtBQUssRUFBRSxJQVBvQztBQVEzQ00sSUFBQUEsV0FBVyxFQUFFO0FBQ1QsU0FBRztBQUNDVixRQUFBQSxhQUFhLEVBQUUsR0FEaEI7QUFFQ0MsUUFBQUEsWUFBWSxFQUFFO0FBRmYsT0FETTtBQUtULFdBQUs7QUFDREQsUUFBQUEsYUFBYSxFQUFFLEdBRGQ7QUFFREMsUUFBQUEsWUFBWSxFQUFFO0FBRmI7QUFMSTtBQVI4QixHQUFsQyxDQUFiLENBck55QixDQXlPekI7O0FBQ0EvRCxFQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCK0UsT0FBakI7QUFDSCxDQTNPRCIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLy8gRWFzeSBzZWxlY3RvciBoZWxwZXIgZnVuY3Rpb25cclxuICAgIGNvbnN0IHNlbGVjdCA9IChlbCwgYWxsID0gZmFsc2UpID0+IHtcclxuICAgICAgICBlbCA9IGVsLnRyaW0oKVxyXG4gICAgICAgIGlmIChhbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsKV1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRWFzeSBldmVudCBsaXN0ZW5lciBmdW5jdGlvblxyXG4gICAgY29uc3Qgb24gPSAodHlwZSwgZWwsIGxpc3RlbmVyLCBhbGwgPSBmYWxzZSkgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RFbCA9IHNlbGVjdChlbCwgYWxsKVxyXG4gICAgICAgIGlmIChzZWxlY3RFbCkge1xyXG4gICAgICAgICAgICBpZiAoYWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RFbC5mb3JFYWNoKGUgPT4gZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdEVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRWFzeSBvbiBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgXHJcbiAgICBjb25zdCBvbnNjcm9sbCA9IChlbCwgbGlzdGVuZXIpID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsaXN0ZW5lcilcclxuICAgIH1cclxuXHJcbiAgICAvLyBOYXZiYXIgbGlua3MgYWN0aXZlIHN0YXRlIG9uIHNjcm9sbFxyXG4gICAgbGV0IG5hdmJhcmxpbmtzID0gc2VsZWN0KCcjbmF2YmFyIC5zY3JvbGx0bycsIHRydWUpO1xyXG4gICAgY29uc3QgbmF2YmFybGlua3NBY3RpdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgKyAyMDA7XHJcbiAgICAgICAgbmF2YmFybGlua3MuZm9yRWFjaChuYXZiYXJsaW5rID0+IHtcclxuICAgICAgICAgICAgaWYgKCFuYXZiYXJsaW5rLmhhc2gpIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIGxldCBzZWN0aW9uID0gc2VsZWN0KG5hdmJhcmxpbmsuaGFzaCk7XHJcbiAgICAgICAgICAgIGlmICghc2VjdGlvbikgXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID49IHNlY3Rpb24ub2Zmc2V0VG9wICYmIHBvc2l0aW9uIDw9IChzZWN0aW9uLm9mZnNldFRvcCArIHNlY3Rpb24ub2Zmc2V0SGVpZ2h0KSkge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFybGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFybGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG5hdmJhcmxpbmtzQWN0aXZlKVxyXG4gICAgb25zY3JvbGwoZG9jdW1lbnQsIG5hdmJhcmxpbmtzQWN0aXZlKVxyXG5cclxuICAgIC8vIFNjcm9sbHMgdG8gYW4gZWxlbWVudCB3aXRoIGhlYWRlciBvZmZzZXRcclxuICAgIGNvbnN0IHNjcm9sbHRvID0gKGVsKSA9PiB7XHJcbiAgICAgICAgbGV0IGhlYWRlciA9IHNlbGVjdCgnI2hlYWRlcicpO1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSBoZWFkZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGlmICghaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLXNjcm9sbGVkJykpIHtcclxuICAgICAgICAgICAgb2Zmc2V0IC09IDIwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZWxlbWVudFBvcyA9IHNlbGVjdChlbCkub2Zmc2V0VG9wO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgIHRvcDogZWxlbWVudFBvcyAtIG9mZnNldCxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVG9nZ2xlIC5oZWFkZXItc2Nyb2xsZWQgY2xhc3MgdG8gI2hlYWRlciB3aGVuIHBhZ2UgaXMgc2Nyb2xsZWRcclxuICAgIGxldCBzZWxlY3RIZWFkZXIgPSBzZWxlY3QoJyNoZWFkZXInKTtcclxuICAgIGlmIChzZWxlY3RIZWFkZXIpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJTY3JvbGxlZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXNjcm9sbGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLXNjcm9sbGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoZWFkZXJTY3JvbGxlZClcclxuICAgICAgICBvbnNjcm9sbChkb2N1bWVudCwgaGVhZGVyU2Nyb2xsZWQpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTW9iaWxlIG5hdiB0b2dnbGVcclxuICAgIG9uKCdjbGljaycsICcubW9iaWxlLW5hdi10b2dnbGUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgc2VsZWN0KCcjbmF2YmFyJykuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2YmFyLW1vYmlsZScpO1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTY3JvbGwgd2l0aCBvZmZzZXQgb24gbGlua3Mgd2l0aCBhIGNsYXNzIG5hbWUgLnNjcm9sbHRvXHJcbiAgICBvbignY2xpY2snLCAnLnNjcm9sbHRvJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChzZWxlY3QodGhpcy5oYXNoKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCBuYXZiYXIgPSBzZWxlY3QoJyNuYXZiYXInKTtcclxuICAgICAgICAgICAgaWYgKG5hdmJhci5jbGFzc0xpc3QuY29udGFpbnMoJ25hdmJhci1tb2JpbGUnKSkge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmJhci1tb2JpbGUnKTtcclxuICAgICAgICAgICAgICAgIGxldCBuYXZiYXJUb2dnbGUgPSBzZWxlY3QoJy5tb2JpbGUtbmF2LXRvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyVG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNjcm9sbHRvKHRoaXMuaGFzaCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgLy8gU2Nyb2xsIHdpdGggb2ZzZXQgb24gcGFnZSBsb2FkIHdpdGggaGFzaCBsaW5rcyBpbiB0aGUgdXJsXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdCh3aW5kb3cubG9jYXRpb24uaGFzaCkpIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbHRvKHdpbmRvdy5sb2NhdGlvbi5oYXNoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gM0QgU3RhY2tlZCBTbGlkZXJcclxuICAgIGZ1bmN0aW9uIGRldGVjdF9hY3RpdmUoKXtcclxuICAgICAgICB2YXIgZ2V0X2FjdGl2ZSA9ICQoXCIuaG91c2UtdG91ci1zbGlkZXIgLmhvdXNlLXRvdXItc2xpZGVyLS1pdGVtOmZpcnN0LWNoaWxkXCIpLmRhdGEoXCJjbGFzc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiLnRvdXItbmV4dFwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0b3RhbCA9ICQoXCIuaG91c2UtdG91ci1zbGlkZXItLWl0ZW1cIikubGVuZ3RoO1xyXG4gICAgICAgICQoXCIuaG91c2UtdG91ci1zbGlkZXIgLmhvdXNlLXRvdXItc2xpZGVyLS1pdGVtOmZpcnN0LWNoaWxkXCIpLmhpZGUoKS5hcHBlbmRUbyhcIi5ob3VzZS10b3VyLXNsaWRlclwiKS5mYWRlSW4oKTtcclxuICAgICAgICAkLmVhY2goJCgnLmhvdXNlLXRvdXItc2xpZGVyLS1pdGVtJyksIGZ1bmN0aW9uIChpbmRleCwgc2xpZGVyX2l0ZW0pIHtcclxuICAgICAgICAgICAgJChzbGlkZXJfaXRlbSkuYXR0cignZGF0YS1wb3NpdGlvbicsIGluZGV4ICsgMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGV0ZWN0X2FjdGl2ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi50b3VyLXByZXZcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdG90YWwgPSAkKFwiLmhvdXNlLXRvdXItc2xpZGVyLS1pdGVtXCIpLmxlbmd0aDtcclxuICAgICAgICAkKFwiLmhvdXNlLXRvdXItc2xpZGVyIC5ob3VzZS10b3VyLXNsaWRlci0taXRlbTpsYXN0LWNoaWxkXCIpLmhpZGUoKS5wcmVwZW5kVG8oXCIuaG91c2UtdG91ci1zbGlkZXJcIikuZmFkZUluKCk7XHJcbiAgICAgICAgJC5lYWNoKCQoJy5ob3VzZS10b3VyLXNsaWRlci0taXRlbScpLCBmdW5jdGlvbiAoaW5kZXgsIHNsaWRlcl9pdGVtKSB7XHJcbiAgICAgICAgICAgICQoc2xpZGVyX2l0ZW0pLmF0dHIoJ2RhdGEtcG9zaXRpb24nLCBpbmRleCArIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRldGVjdF9hY3RpdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuaG91c2UtdG91ci1zbGlkZXIgLmhvdXNlLXRvdXItc2xpZGVyLS1pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGdldF9zbGlkZSA9ICQodGhpcykuYXR0cignZGF0YS1jbGFzcycpO1xyXG4gICAgICAgICQoXCIuaG91c2UtdG91ci1zbGlkZXIgLmhvdXNlLXRvdXItc2xpZGVyLS1pdGVtW2RhdGEtY2xhc3M9XCIgKyBnZXRfc2xpZGUgKyBcIl1cIikuaGlkZSgpLnByZXBlbmRUbyhcIi5ob3VzZS10b3VyLXNsaWRlclwiKS5mYWRlSW4oKTtcclxuICAgICAgICAkLmVhY2goJCgnLmhvdXNlLXRvdXItc2xpZGVyLS1pdGVtJyksIGZ1bmN0aW9uIChpbmRleCwgc2xpZGVyX2l0ZW0pIHtcclxuICAgICAgICAgICAgJChzbGlkZXJfaXRlbSkuYXR0cignZGF0YS1wb3NpdGlvbicsIGluZGV4ICsgMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGV0ZWN0X2FjdGl2ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSGVybyBTd2lwZXJcclxuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWhlcm8nLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBMb2NhdGlvbiBTd2lwZXJcclxuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWxvY2F0aW9uJywge1xyXG4gICAgICAgIC8vIGVmZmVjdDogXCJjb3ZlcmZsb3dcIixcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA5MCxcclxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEuNixcclxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5Mzoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMS4zLFxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA5MCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFtZW5pdGllcyBTd2lwZXJcclxuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWFtZW5pdGllcycsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgICAgZGVsYXk6IDUwMDAsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG4gICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENvbmZpZ3VyYXRpb24gU3dpcGVyXHJcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5jb25maWd1cmF0aW9uLWNhcmQtLXN3aXBlci10aHVtYm5haWxzXCIsIHtcclxuICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgZnJlZU1vZGU6IHRydWUsXHJcbiAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgdmFyIHN3aXBlcjIgPSBuZXcgU3dpcGVyKFwiLmNvbmZpZ3VyYXRpb24tY2FyZC0tc3dpcGVyXCIsIHtcclxuICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIHRodW1iczoge1xyXG4gICAgICAgICAgICBzd2lwZXI6IHN3aXBlcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGVzdGltb25pYWwgU3dpcGVyXHJcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci10ZXN0aW1vbmlhbCcsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA5MCxcclxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEuMyxcclxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5Mzoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMS40LFxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA5MCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgc2VsZWN0MlxyXG4gICAgJCgnLmpzLXNlbGVjdDInKS5zZWxlY3QyKCk7XHJcbn0pOyJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYXBwLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/app.js\n");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmNlbmNpZWwvLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcz9hOTdiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/sass/app.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/app": 0,
/******/ 			"public/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkarcenciel"] = self["webpackChunkarcenciel"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;