"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Hamburger = function Hamburger() {
  var menuBtn = document.querySelector(".menu-btn");
  var sideBar = document.querySelector(".sidebar ");
  var menuOpen = false;
  menuBtn.addEventListener("click", function () {
    if (!menuOpen) {
      sideBar.classList.add("hide");
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      sideBar.classList.remove("hide");
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
};

/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);



var SideBarLink = function SideBarLink(_ref) {
  var title = _ref.title,
    url = _ref.url,
    key = _ref.key;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: key
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: url
  }, title));
};
var SideBarLinkGroup = function SideBarLinkGroup(_ref2) {
  var links = _ref2.links,
    itemNo = _ref2.itemNo;
  var filteredArray = links.filter(function (el, index) {
    return index >= itemNo[0] && index <= itemNo[1];
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, filteredArray.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SideBarLink, {
      title: el.title,
      url: el.url,
      key: el.key
    });
  }));
};
var SideBar = function SideBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "squish-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    "class": "example-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SideBarLinkGroup, {
    links: _Links__WEBPACK_IMPORTED_MODULE_1__["default"],
    itemNo: [0, 4]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    "class": "example-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SideBarLinkGroup, {
    links: _Links__WEBPACK_IMPORTED_MODULE_1__["default"],
    itemNo: [5, 9]
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f5b2982055abdd9f09e0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMTA0MDQ5NmQ1NDkzNTlmZDM5OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBUyxHQUFTO0VBQ3RCLElBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBQ25ELElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBQ25ELElBQUlFLFFBQVEsR0FBRyxLQUFLO0VBQ3BCSixPQUFPLENBQUNLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3RDLElBQUksQ0FBQ0QsUUFBUSxFQUFFO01BQ2JELE9BQU8sQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzdCUCxPQUFPLENBQUNNLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUM3QkgsUUFBUSxHQUFHLElBQUk7SUFDakIsQ0FBQyxNQUFNO01BQ0xELE9BQU8sQ0FBQ0csU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO01BQ2hDUixPQUFPLENBQUNNLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztNQUNoQ0osUUFBUSxHQUFHLEtBQUs7SUFDbEI7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqQnlCO0FBQ0U7QUFDUTtBQUVwQyxJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxPQUE0QjtFQUFBLElBQXRCQyxLQUFLLFFBQUxBLEtBQUs7SUFBRUMsR0FBRyxRQUFIQSxHQUFHO0lBQUVDLEdBQUcsUUFBSEEsR0FBRztFQUNwQyxvQkFDRTtJQUFJLEdBQUcsRUFBRUE7RUFBSSxnQkFDWDtJQUFHLElBQUksRUFBRUQ7RUFBSSxHQUFFRCxLQUFLLENBQUssQ0FDdEI7QUFFVCxDQUFDO0FBRUQsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixRQUEwQjtFQUFBLElBQXBCQyxLQUFLLFNBQUxBLEtBQUs7SUFBRUMsTUFBTSxTQUFOQSxNQUFNO0VBQ3ZDLElBQU1DLGFBQWEsR0FBR0YsS0FBSyxDQUFDRyxNQUFNLENBQ2hDLFVBQUNDLEVBQUUsRUFBRUMsS0FBSztJQUFBLE9BQUtBLEtBQUssSUFBSUosTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJSSxLQUFLLElBQUlKLE1BQU0sQ0FBQyxDQUFDLENBQUM7RUFBQSxFQUN4RDtFQUNELG9CQUNFLHVFQUNHQyxhQUFhLENBQUNJLEdBQUcsQ0FBQyxVQUFDRixFQUFFO0lBQUEsb0JBQ3BCLDJEQUFDLFdBQVc7TUFBQyxLQUFLLEVBQUVBLEVBQUUsQ0FBQ1IsS0FBTTtNQUFDLEdBQUcsRUFBRVEsRUFBRSxDQUFDUCxHQUFJO01BQUMsR0FBRyxFQUFFTyxFQUFFLENBQUNOO0lBQUksRUFBRztFQUFBLENBQzNELENBQUMsQ0FDQztBQUVULENBQUM7QUFDRCxJQUFNUyxPQUFPLEdBQUcsU0FBVkEsT0FBTyxHQUFTO0VBQ3BCLG9CQUNFO0lBQUssU0FBTTtFQUFTLGdCQUNsQjtJQUFLLFNBQU07RUFBa0IsZ0JBQzNCO0lBQUssU0FBTTtFQUFjLGdCQUN2QiwyREFBQyxnQkFBZ0I7SUFBQyxLQUFLLEVBQUViLDhDQUFNO0lBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFBRSxFQUFHLENBQzlDLGVBQ047SUFBSyxTQUFNO0VBQWMsZ0JBQ3ZCLDJEQUFDLGdCQUFnQjtJQUFDLEtBQUssRUFBRUEsOENBQU07SUFBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUFFLEVBQUcsQ0FDOUMsQ0FDRixDQUNGO0FBRVYsQ0FBQztBQUNELGlFQUFlYSxPQUFPOzs7Ozs7OztVQ3RDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9aYWRhbmllIDEvanMvV2VsY29tZVNlY3Rpb24vSGFtYnVyZ2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX1phZGFuaWUgMS9qcy9XZWxjb21lU2VjdGlvbi9TaWRlQmFyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSGFtYnVyZ2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xyXG4gIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXIgXCIpO1xyXG4gIGxldCBtZW51T3BlbiA9IGZhbHNlO1xyXG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmICghbWVudU9wZW4pIHtcclxuICAgICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgICAgbWVudU9wZW4gPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgbWVudU9wZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlua3MgZnJvbSBcIi4vTGlua3NcIjtcclxuaW1wb3J0IEhhbWJ1cmdlciBmcm9tIFwiLi9IYW1idXJnZXJcIjtcclxuXHJcbmNvbnN0IFNpZGVCYXJMaW5rID0gKHsgdGl0bGUsIHVybCwga2V5IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGtleT17a2V5fT5cclxuICAgICAgPGEgaHJlZj17dXJsfT57dGl0bGV9PC9hPlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2lkZUJhckxpbmtHcm91cCA9ICh7IGxpbmtzLCBpdGVtTm8gfSkgPT4ge1xyXG4gIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBsaW5rcy5maWx0ZXIoXHJcbiAgICAoZWwsIGluZGV4KSA9PiBpbmRleCA+PSBpdGVtTm9bMF0gJiYgaW5kZXggPD0gaXRlbU5vWzFdXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHVsPlxyXG4gICAgICB7ZmlsdGVyZWRBcnJheS5tYXAoKGVsKSA9PiAoXHJcbiAgICAgICAgPFNpZGVCYXJMaW5rIHRpdGxlPXtlbC50aXRsZX0gdXJsPXtlbC51cmx9IGtleT17ZWwua2V5fSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufTtcclxuY29uc3QgU2lkZUJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzcz1cInNpZGViYXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNxdWlzaC1jb250YWluZXJcIj5cclxuICAgICAgICA8bmF2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCI+XHJcbiAgICAgICAgICA8U2lkZUJhckxpbmtHcm91cCBsaW5rcz17TGlua3N9IGl0ZW1Obz17WzAsIDRdfSAvPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxuYXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIj5cclxuICAgICAgICAgIDxTaWRlQmFyTGlua0dyb3VwIGxpbmtzPXtMaW5rc30gaXRlbU5vPXtbNSwgOV19IC8+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjViMjk4MjA1NWFiZGQ5ZjA5ZTBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJIYW1idXJnZXIiLCJtZW51QnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2lkZUJhciIsIm1lbnVPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIkxpbmtzIiwiU2lkZUJhckxpbmsiLCJ0aXRsZSIsInVybCIsImtleSIsIlNpZGVCYXJMaW5rR3JvdXAiLCJsaW5rcyIsIml0ZW1ObyIsImZpbHRlcmVkQXJyYXkiLCJmaWx0ZXIiLCJlbCIsImluZGV4IiwibWFwIiwiU2lkZUJhciJdLCJzb3VyY2VSb290IjoiIn0=