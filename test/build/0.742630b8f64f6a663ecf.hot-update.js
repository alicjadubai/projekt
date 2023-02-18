"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);


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
    return index < itemNo;
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
    itemNo: 5
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    "class": "example-menu"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d3192bc3a2052ccb8e53")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43NDI2MzBiOGY2NGY2YTY2M2VjZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRTtBQUU1QixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxPQUE0QjtFQUFBLElBQXRCQyxLQUFLLFFBQUxBLEtBQUs7SUFBRUMsR0FBRyxRQUFIQSxHQUFHO0lBQUVDLEdBQUcsUUFBSEEsR0FBRztFQUNwQyxvQkFDRTtJQUFJLEdBQUcsRUFBRUE7RUFBSSxnQkFDWDtJQUFHLElBQUksRUFBRUQ7RUFBSSxHQUFFRCxLQUFLLENBQUssQ0FDdEI7QUFFVCxDQUFDO0FBRUQsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixRQUEwQjtFQUFBLElBQXBCQyxLQUFLLFNBQUxBLEtBQUs7SUFBRUMsTUFBTSxTQUFOQSxNQUFNO0VBQ3ZDLElBQU1DLGFBQWEsR0FBR0YsS0FBSyxDQUFDRyxNQUFNLENBQUMsVUFBQ0MsRUFBRSxFQUFFQyxLQUFLO0lBQUEsT0FBS0EsS0FBSyxHQUFHSixNQUFNO0VBQUEsRUFBQztFQUNqRSxvQkFDRSx1RUFDR0MsYUFBYSxDQUFDSSxHQUFHLENBQUMsVUFBQ0YsRUFBRTtJQUFBLG9CQUNwQiwyREFBQyxXQUFXO01BQUMsS0FBSyxFQUFFQSxFQUFFLENBQUNSLEtBQU07TUFBQyxHQUFHLEVBQUVRLEVBQUUsQ0FBQ1AsR0FBSTtNQUFDLEdBQUcsRUFBRU8sRUFBRSxDQUFDTjtJQUFJLEVBQUc7RUFBQSxDQUMzRCxDQUFDLENBQ0M7QUFFVCxDQUFDO0FBQ0QsSUFBTVMsT0FBTyxHQUFHLFNBQVZBLE9BQU8sR0FBUztFQUNwQixvQkFDRTtJQUFLLFNBQU07RUFBUyxnQkFDbEI7SUFBSyxTQUFNO0VBQWtCLGdCQUMzQjtJQUFLLFNBQU07RUFBYyxnQkFDdkIsMkRBQUMsZ0JBQWdCO0lBQUMsS0FBSyxFQUFFYiw4Q0FBTTtJQUFDLE1BQU0sRUFBRTtFQUFFLEVBQUcsQ0FDekMsZUFDTjtJQUFLLFNBQU07RUFBYyxFQUFPLENBQzVCLENBQ0Y7QUFFVixDQUFDO0FBQ0QsaUVBQWVhLE9BQU87Ozs7Ozs7O1VDakN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX1phZGFuaWUgMS9qcy9XZWxjb21lU2VjdGlvbi9TaWRlQmFyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlua3MgZnJvbSBcIi4vTGlua3NcIjtcclxuXHJcbmNvbnN0IFNpZGVCYXJMaW5rID0gKHsgdGl0bGUsIHVybCwga2V5IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGtleT17a2V5fT5cclxuICAgICAgPGEgaHJlZj17dXJsfT57dGl0bGV9PC9hPlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2lkZUJhckxpbmtHcm91cCA9ICh7IGxpbmtzLCBpdGVtTm8gfSkgPT4ge1xyXG4gIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBsaW5rcy5maWx0ZXIoKGVsLCBpbmRleCkgPT4gaW5kZXggPCBpdGVtTm8pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWw+XHJcbiAgICAgIHtmaWx0ZXJlZEFycmF5Lm1hcCgoZWwpID0+IChcclxuICAgICAgICA8U2lkZUJhckxpbmsgdGl0bGU9e2VsLnRpdGxlfSB1cmw9e2VsLnVybH0ga2V5PXtlbC5rZXl9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG5jb25zdCBTaWRlQmFyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzPVwic2lkZWJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic3F1aXNoLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIj5cclxuICAgICAgICAgIDxTaWRlQmFyTGlua0dyb3VwIGxpbmtzPXtMaW5rc30gaXRlbU5vPXs1fSAvPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxuYXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIj48L25hdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkMzE5MmJjM2EyMDUyY2NiOGU1M1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmtzIiwiU2lkZUJhckxpbmsiLCJ0aXRsZSIsInVybCIsImtleSIsIlNpZGVCYXJMaW5rR3JvdXAiLCJsaW5rcyIsIml0ZW1ObyIsImZpbHRlcmVkQXJyYXkiLCJmaWx0ZXIiLCJlbCIsImluZGV4IiwibWFwIiwiU2lkZUJhciJdLCJzb3VyY2VSb290IjoiIn0=