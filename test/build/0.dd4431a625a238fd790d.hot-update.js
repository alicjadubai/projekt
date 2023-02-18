"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Hamburger = function Hamburger() {
  var menuBtn = document.querySelector(".menu-btn");
  var sideBar = document.querySelector(".sidebar ");
  var menuOpen = false;
  console.log(menuOpen);
  menuBtn.addEventListener("click", function () {
    if (menuOpen === false) {
      sideBar.classList.add("hide");
      menuBtn.classList.add("open");
      menuOpen = true;
      console.log(menuOpen);
    } else {
      sideBar.classList.remove("hide");
      menuBtn.classList.remove("open");
      menuOpen = false;
      console.log(menuOpen);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hamburger);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("563d5a868aff2933b4ff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZDQ0MzFhNjI1YTIzOGZkNzkwZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBUyxHQUFTO0VBQ3RCLElBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBQ25ELElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBQ25ELElBQUlFLFFBQVEsR0FBRyxLQUFLO0VBQ3BCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDO0VBQ3JCSixPQUFPLENBQUNPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3RDLElBQUlILFFBQVEsS0FBSyxLQUFLLEVBQUU7TUFDdEJELE9BQU8sQ0FBQ0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzdCVCxPQUFPLENBQUNRLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUM3QkwsUUFBUSxHQUFHLElBQUk7TUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQztJQUN2QixDQUFDLE1BQU07TUFDTEQsT0FBTyxDQUFDSyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDaENWLE9BQU8sQ0FBQ1EsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO01BQ2hDTixRQUFRLEdBQUcsS0FBSztNQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQztJQUN2QjtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxpRUFBZUwsU0FBUzs7Ozs7Ozs7VUN0QnhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfWmFkYW5pZSAxL2pzL1dlbGNvbWVTZWN0aW9uL2hhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhhbWJ1cmdlciA9ICgpID0+IHtcclxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcclxuICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyIFwiKTtcclxuICBsZXQgbWVudU9wZW4gPSBmYWxzZTtcclxuICBjb25zb2xlLmxvZyhtZW51T3Blbik7XHJcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKG1lbnVPcGVuID09PSBmYWxzZSkge1xyXG4gICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgICBtZW51T3BlbiA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1lbnVPcGVuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICAgIG1lbnVPcGVuID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1lbnVPcGVuKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhbWJ1cmdlcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTYzZDVhODY4YWZmMjkzM2I0ZmZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJIYW1idXJnZXIiLCJtZW51QnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2lkZUJhciIsIm1lbnVPcGVuIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9