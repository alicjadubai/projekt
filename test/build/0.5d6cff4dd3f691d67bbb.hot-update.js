"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 38:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './hamburger'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



var SideBarLink = function SideBarLink(_ref) {
  var title = _ref.title,
    url = _ref.url;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
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
    className: "sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "squish-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "example-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SideBarLinkGroup, {
    links: _Links__WEBPACK_IMPORTED_MODULE_1__["default"],
    itemNo: [0, 4]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "example-menu"
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
/******/ 	__webpack_require__.h = () => ("e16b89be027e78c5db0a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZDZjZmY0ZGQzZjY5MWQ2N2JiYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0U7QUFDUTtBQUVwQyxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBVyxPQUF1QjtFQUFBLElBQWpCQyxLQUFLLFFBQUxBLEtBQUs7SUFBRUMsR0FBRyxRQUFIQSxHQUFHO0VBQy9CLG9CQUNFLG9GQUNFO0lBQUcsSUFBSSxFQUFFQTtFQUFJLEdBQUVELEtBQUssQ0FBSyxDQUN0QjtBQUVULENBQUM7QUFFRCxJQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCLFFBQTBCO0VBQUEsSUFBcEJDLEtBQUssU0FBTEEsS0FBSztJQUFFQyxNQUFNLFNBQU5BLE1BQU07RUFDdkMsSUFBTUMsYUFBYSxHQUFHRixLQUFLLENBQUNHLE1BQU0sQ0FDaEMsVUFBQ0MsRUFBRSxFQUFFQyxLQUFLO0lBQUEsT0FBS0EsS0FBSyxJQUFJSixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUlJLEtBQUssSUFBSUosTUFBTSxDQUFDLENBQUMsQ0FBQztFQUFBLEVBQ3hEO0VBQ0Qsb0JBQ0UsdUVBQ0dDLGFBQWEsQ0FBQ0ksR0FBRyxDQUFDLFVBQUNGLEVBQUU7SUFBQSxvQkFDcEIsMkRBQUMsV0FBVztNQUFDLEtBQUssRUFBRUEsRUFBRSxDQUFDUCxLQUFNO01BQUMsR0FBRyxFQUFFTyxFQUFFLENBQUNOLEdBQUk7TUFBQyxHQUFHLEVBQUVNLEVBQUUsQ0FBQ0c7SUFBSSxFQUFHO0VBQUEsQ0FDM0QsQ0FBQyxDQUNDO0FBRVQsQ0FBQztBQUNELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPLEdBQVM7RUFDcEIsb0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBUyxnQkFDdEI7SUFBSyxTQUFTLEVBQUM7RUFBa0IsZ0JBQy9CO0lBQUssU0FBUyxFQUFDO0VBQWMsZ0JBQzNCLDJEQUFDLGdCQUFnQjtJQUFDLEtBQUssRUFBRWQsOENBQU07SUFBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUFFLEVBQUcsQ0FDOUMsZUFDTjtJQUFLLFNBQVMsRUFBQztFQUFjLGdCQUMzQiwyREFBQyxnQkFBZ0I7SUFBQyxLQUFLLEVBQUVBLDhDQUFNO0lBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFBRSxFQUFHLENBQzlDLENBQ0YsQ0FDRjtBQUVWLENBQUM7QUFDRCxpRUFBZWMsT0FBTzs7Ozs7Ozs7VUN0Q3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfWmFkYW5pZSAxL2pzL1dlbGNvbWVTZWN0aW9uL1NpZGVCYXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rcyBmcm9tIFwiLi9MaW5rc1wiO1xyXG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gXCIuL2hhbWJ1cmdlclwiO1xyXG5cclxuY29uc3QgU2lkZUJhckxpbmsgPSAoeyB0aXRsZSwgdXJsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpPlxyXG4gICAgICA8YSBocmVmPXt1cmx9Pnt0aXRsZX08L2E+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaWRlQmFyTGlua0dyb3VwID0gKHsgbGlua3MsIGl0ZW1ObyB9KSA9PiB7XHJcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IGxpbmtzLmZpbHRlcihcclxuICAgIChlbCwgaW5kZXgpID0+IGluZGV4ID49IGl0ZW1Ob1swXSAmJiBpbmRleCA8PSBpdGVtTm9bMV1cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWw+XHJcbiAgICAgIHtmaWx0ZXJlZEFycmF5Lm1hcCgoZWwpID0+IChcclxuICAgICAgICA8U2lkZUJhckxpbmsgdGl0bGU9e2VsLnRpdGxlfSB1cmw9e2VsLnVybH0ga2V5PXtlbC5rZXl9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG5jb25zdCBTaWRlQmFyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVpc2gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJleGFtcGxlLW1lbnVcIj5cclxuICAgICAgICAgIDxTaWRlQmFyTGlua0dyb3VwIGxpbmtzPXtMaW5rc30gaXRlbU5vPXtbMCwgNF19IC8+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJleGFtcGxlLW1lbnVcIj5cclxuICAgICAgICAgIDxTaWRlQmFyTGlua0dyb3VwIGxpbmtzPXtMaW5rc30gaXRlbU5vPXtbNSwgOV19IC8+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTE2Yjg5YmUwMjdlNzhjNWRiMGFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rcyIsIkhhbWJ1cmdlciIsIlNpZGVCYXJMaW5rIiwidGl0bGUiLCJ1cmwiLCJTaWRlQmFyTGlua0dyb3VwIiwibGlua3MiLCJpdGVtTm8iLCJmaWx0ZXJlZEFycmF5IiwiZmlsdGVyIiwiZWwiLCJpbmRleCIsIm1hcCIsImtleSIsIlNpZGVCYXIiXSwic291cmNlUm9vdCI6IiJ9