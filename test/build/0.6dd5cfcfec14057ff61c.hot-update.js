"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
  var handleClick = function handleClick() {
    setMenuOpen(!menuOpen);
    if (menuOpen === false) {
      sideBar.classList.add("hide");
      menuBtn.classList.add("open");
    } else {
      sideBar.classList.remove("hide");
      menuBtn.classList.remove("open");
    }
  };
};
var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "masthead"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sidebar-switcher"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: Hamburger,
    className: "menu-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu-btn__burger"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ee26f7173fafc4541a3f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZGQ1Y2ZjZmVjMTQwNTdmZjYxYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBUyxHQUFTO0VBQ3RCLElBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBQ25ELElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBQ25ELGdCQUFnQ0osK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUF4Q00sUUFBUTtJQUFFQyxXQUFXO0VBQzVCLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXLEdBQVM7SUFDeEJELFdBQVcsQ0FBQyxDQUFDRCxRQUFRLENBQUM7SUFDdEIsSUFBSUEsUUFBUSxLQUFLLEtBQUssRUFBRTtNQUN0QkQsT0FBTyxDQUFDSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDN0JSLE9BQU8sQ0FBQ08sU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUMsTUFBTTtNQUNMTCxPQUFPLENBQUNJLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztNQUNoQ1QsT0FBTyxDQUFDTyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEM7RUFDRixDQUFDO0FBQ0gsQ0FBQztBQUVELElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFNLEdBQVM7RUFDbkIsb0JBQ0U7SUFBUSxTQUFTLEVBQUM7RUFBVSxnQkFDMUI7SUFBSyxTQUFTLEVBQUM7RUFBa0IsZ0JBQy9CO0lBQUssT0FBTyxFQUFFWCxTQUFVO0lBQUMsU0FBUyxFQUFDO0VBQVUsZ0JBQzNDO0lBQUssU0FBUyxFQUFDO0VBQWtCLEVBQU8sQ0FDcEMsQ0FDRixDQUNDO0FBRWIsQ0FBQztBQUVELGlFQUFlVyxNQUFNOzs7Ozs7OztVQzlCckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9aYWRhbmllIDEvanMvV2VsY29tZVNlY3Rpb24vSGVhZGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIYW1idXJnZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik7XHJcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhciBcIik7XHJcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRNZW51T3BlbighbWVudU9wZW4pO1xyXG4gICAgaWYgKG1lbnVPcGVuID09PSBmYWxzZSkge1xyXG4gICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1hc3RoZWFkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zd2l0Y2hlclwiPlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17SGFtYnVyZ2VyfSBjbGFzc05hbWU9XCJtZW51LWJ0blwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWJ0bl9fYnVyZ2VyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWUyNmY3MTczZmFmYzQ1NDFhM2ZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhhbWJ1cmdlciIsIm1lbnVCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzaWRlQmFyIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsImhhbmRsZUNsaWNrIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiSGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==