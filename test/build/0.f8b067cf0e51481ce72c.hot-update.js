"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Hamburger = function Hamburger() {
  var menuBtn = document.querySelector(".menu-btn");
  var sideBar = document.querySelector(".sidebar ");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    menuOpen = _useState2[0],
    setMenuOpen = _useState2[1];
  menuBtn.addEventListener("click", function () {
    if (menuOpen === false) {
      sideBar.classList.add("hide");
      menuBtn.classList.add("open");
      true, _readOnlyError("menuOpen");
      console.log(menuOpen);
    } else {
      sideBar.classList.remove("hide");
      menuBtn.classList.remove("open");
      false, _readOnlyError("menuOpen");
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
/******/ 	__webpack_require__.h = () => ("5e8c1b6d08c1df79cbc9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mOGIwNjdjZjBlNTE0ODFjZTcyYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFFeEMsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVMsR0FBUztFQUN0QixJQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztFQUNuRCxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztFQUNuRCxnQkFBZ0NKLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFBeENNLFFBQVE7SUFBRUMsV0FBVztFQUM1QkwsT0FBTyxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUN0QyxJQUFJRixRQUFRLEtBQUssS0FBSyxFQUFFO01BQ3RCRCxPQUFPLENBQUNJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUM3QlIsT0FBTyxDQUFDTyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDbEIsSUFBSTtNQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sUUFBUSxDQUFDO0lBQ3ZCLENBQUMsTUFBTTtNQUNMRCxPQUFPLENBQUNJLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztNQUNoQ1gsT0FBTyxDQUFDTyxTQUFTLENBQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDckIsS0FBSztNQUNoQkYsT0FBTyxDQUFDQyxHQUFHLENBQUNOLFFBQVEsQ0FBQztJQUN2QjtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxpRUFBZUwsU0FBUzs7Ozs7Ozs7VUNyQnhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfWmFkYW5pZSAxL2pzL1dlbGNvbWVTZWN0aW9uL2hhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSGFtYnVyZ2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xyXG4gIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXIgXCIpO1xyXG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmIChtZW51T3BlbiA9PT0gZmFsc2UpIHtcclxuICAgICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgICAgbWVudU9wZW4gPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhtZW51T3Blbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICBtZW51T3BlbiA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhtZW51T3Blbik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYW1idXJnZXI7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVlOGMxYjZkMDhjMWRmNzljYmM5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJIYW1idXJnZXIiLCJtZW51QnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2lkZUJhciIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29uc29sZSIsImxvZyIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=