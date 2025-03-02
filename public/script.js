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

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n\r\n  /* hero slider */\r\n  const slider = document.querySelector(\".section-hero__slider\");\r\n  const sliderWrapper = document.querySelector(\".section-hero__slider-wrapper\");\r\n  const slides = document.querySelectorAll(\".section-hero__slide\");\r\n  let index = 0;\r\n  let slideWidth = `100%`;\r\n\r\n  const arrowNext = slider.querySelector('.slider-arrow-next')\r\n  const arrowPrev = slider.querySelector('.slider-arrow-prev')\r\n\r\n  arrowNext.addEventListener('click', nextSlide)\r\n  arrowPrev.addEventListener('click', prevSlide)\r\n\r\n  function showSlide(i) {\r\n    slideWidth = getSlideWidth()\r\n    sliderWrapper.style.transform = `translateX(-${i * slideWidth}px)`;\r\n  }\r\n\r\n  function nextSlide() {\r\n    index = (index + 1) % slides.length;\r\n    showSlide(index);\r\n  }\r\n\r\n  function prevSlide() {\r\n    index = (index - 1 + slides.length) % slides.length;\r\n    showSlide(index);\r\n  }\r\n\r\n  function getSlideWidth() {\r\n    return slides[0].offsetWidth\r\n  }\r\n\r\n  window.addEventListener(\"resize\", () => {\r\n    slideWidth = getSlideWidth()\r\n    showSlide(index);\r\n  })\r\n\r\n  /* header behavior  */\r\n  const header = document.querySelector(\".header\");\r\n\r\n  function checkScroll() {\r\n    if (window.scrollY > 0) {\r\n      header.classList.add(\"header-scroll\");\r\n    } else {\r\n      header.classList.remove(\"header-scroll\");\r\n    }\r\n  }\r\n\r\n  checkScroll();\r\n\r\n  window.addEventListener(\"scroll\", checkScroll);\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZUFBZTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8tdC8uL3NyYy9zY3JpcHQuanM/NjhiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIC8qIGhlcm8gc2xpZGVyICovXHJcbiAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uLWhlcm9fX3NsaWRlclwiKTtcclxuICBjb25zdCBzbGlkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uLWhlcm9fX3NsaWRlci13cmFwcGVyXCIpO1xyXG4gIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VjdGlvbi1oZXJvX19zbGlkZVwiKTtcclxuICBsZXQgaW5kZXggPSAwO1xyXG4gIGxldCBzbGlkZVdpZHRoID0gYDEwMCVgO1xyXG5cclxuICBjb25zdCBhcnJvd05leHQgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnJvdy1uZXh0JylcclxuICBjb25zdCBhcnJvd1ByZXYgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnJvdy1wcmV2JylcclxuXHJcbiAgYXJyb3dOZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFNsaWRlKVxyXG4gIGFycm93UHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZTbGlkZSlcclxuXHJcbiAgZnVuY3Rpb24gc2hvd1NsaWRlKGkpIHtcclxuICAgIHNsaWRlV2lkdGggPSBnZXRTbGlkZVdpZHRoKClcclxuICAgIHNsaWRlcldyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7aSAqIHNsaWRlV2lkdGh9cHgpYDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcclxuICAgIGluZGV4ID0gKGluZGV4ICsgMSkgJSBzbGlkZXMubGVuZ3RoO1xyXG4gICAgc2hvd1NsaWRlKGluZGV4KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHByZXZTbGlkZSgpIHtcclxuICAgIGluZGV4ID0gKGluZGV4IC0gMSArIHNsaWRlcy5sZW5ndGgpICUgc2xpZGVzLmxlbmd0aDtcclxuICAgIHNob3dTbGlkZShpbmRleCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRTbGlkZVdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHNsaWRlc1swXS5vZmZzZXRXaWR0aFxyXG4gIH1cclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gICAgc2xpZGVXaWR0aCA9IGdldFNsaWRlV2lkdGgoKVxyXG4gICAgc2hvd1NsaWRlKGluZGV4KTtcclxuICB9KVxyXG5cclxuICAvKiBoZWFkZXIgYmVoYXZpb3IgICovXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrU2Nyb2xsKCkge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMCkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci1zY3JvbGxcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlci1zY3JvbGxcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1Njcm9sbCgpO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGVja1Njcm9sbCk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/script.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;