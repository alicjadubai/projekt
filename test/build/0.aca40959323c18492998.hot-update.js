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
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);



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
    onClick: _hamburger__WEBPACK_IMPORTED_MODULE_2__["default"],
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
/******/ 	__webpack_require__.h = () => ("14e57f32f3fe76dc14c7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hY2E0MDk1OTMyM2MxODQ5Mjk5OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0U7QUFDUTtBQUVwQyxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBVyxPQUF1QjtFQUFBLElBQWpCQyxLQUFLLFFBQUxBLEtBQUs7SUFBRUMsR0FBRyxRQUFIQSxHQUFHO0VBQy9CLG9CQUNFLG9GQUNFO0lBQUcsSUFBSSxFQUFFQTtFQUFJLEdBQUVELEtBQUssQ0FBSyxDQUN0QjtBQUVULENBQUM7QUFFRCxJQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCLFFBQTBCO0VBQUEsSUFBcEJDLEtBQUssU0FBTEEsS0FBSztJQUFFQyxNQUFNLFNBQU5BLE1BQU07RUFDdkMsSUFBTUMsYUFBYSxHQUFHRixLQUFLLENBQUNHLE1BQU0sQ0FDaEMsVUFBQ0MsRUFBRSxFQUFFQyxLQUFLO0lBQUEsT0FBS0EsS0FBSyxJQUFJSixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUlJLEtBQUssSUFBSUosTUFBTSxDQUFDLENBQUMsQ0FBQztFQUFBLEVBQ3hEO0VBQ0Qsb0JBQ0UsdUVBQ0dDLGFBQWEsQ0FBQ0ksR0FBRyxDQUFDLFVBQUNGLEVBQUU7SUFBQSxvQkFDcEIsMkRBQUMsV0FBVztNQUFDLEtBQUssRUFBRUEsRUFBRSxDQUFDUCxLQUFNO01BQUMsR0FBRyxFQUFFTyxFQUFFLENBQUNOLEdBQUk7TUFBQyxHQUFHLEVBQUVNLEVBQUUsQ0FBQ0c7SUFBSSxFQUFHO0VBQUEsQ0FDM0QsQ0FBQyxDQUNDO0FBRVQsQ0FBQztBQUNELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPLEdBQVM7RUFDcEIsb0JBQ0U7SUFBSyxPQUFPLEVBQUViLGtEQUFVO0lBQUMsU0FBUyxFQUFDO0VBQVMsZ0JBQzFDO0lBQUssU0FBUyxFQUFDO0VBQWtCLGdCQUMvQjtJQUFLLFNBQVMsRUFBQztFQUFjLGdCQUMzQiwyREFBQyxnQkFBZ0I7SUFBQyxLQUFLLEVBQUVELDhDQUFNO0lBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFBRSxFQUFHLENBQzlDLGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBYyxnQkFDM0IsMkRBQUMsZ0JBQWdCO0lBQUMsS0FBSyxFQUFFQSw4Q0FBTTtJQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQUUsRUFBRyxDQUM5QyxDQUNGLENBQ0Y7QUFFVixDQUFDO0FBQ0QsaUVBQWVjLE9BQU87Ozs7Ozs7O1VDdEN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX1phZGFuaWUgMS9qcy9XZWxjb21lU2VjdGlvbi9TaWRlQmFyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlua3MgZnJvbSBcIi4vTGlua3NcIjtcclxuaW1wb3J0IEhhbWJ1cmdlciBmcm9tIFwiLi9oYW1idXJnZXJcIjtcclxuXHJcbmNvbnN0IFNpZGVCYXJMaW5rID0gKHsgdGl0bGUsIHVybCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaT5cclxuICAgICAgPGEgaHJlZj17dXJsfT57dGl0bGV9PC9hPlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2lkZUJhckxpbmtHcm91cCA9ICh7IGxpbmtzLCBpdGVtTm8gfSkgPT4ge1xyXG4gIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBsaW5rcy5maWx0ZXIoXHJcbiAgICAoZWwsIGluZGV4KSA9PiBpbmRleCA+PSBpdGVtTm9bMF0gJiYgaW5kZXggPD0gaXRlbU5vWzFdXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHVsPlxyXG4gICAgICB7ZmlsdGVyZWRBcnJheS5tYXAoKGVsKSA9PiAoXHJcbiAgICAgICAgPFNpZGVCYXJMaW5rIHRpdGxlPXtlbC50aXRsZX0gdXJsPXtlbC51cmx9IGtleT17ZWwua2V5fSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufTtcclxuY29uc3QgU2lkZUJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBvbkNsaWNrPXtIYW1idXJnZXJ9IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVpc2gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJleGFtcGxlLW1lbnVcIj5cclxuICAgICAgICAgIDxTaWRlQmFyTGlua0dyb3VwIGxpbmtzPXtMaW5rc30gaXRlbU5vPXtbMCwgNF19IC8+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJleGFtcGxlLW1lbnVcIj5cclxuICAgICAgICAgIDxTaWRlQmFyTGlua0dyb3VwIGxpbmtzPXtMaW5rc30gaXRlbU5vPXtbNSwgOV19IC8+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTRlNTdmMzJmM2ZlNzZkYzE0YzdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rcyIsIkhhbWJ1cmdlciIsIlNpZGVCYXJMaW5rIiwidGl0bGUiLCJ1cmwiLCJTaWRlQmFyTGlua0dyb3VwIiwibGlua3MiLCJpdGVtTm8iLCJmaWx0ZXJlZEFycmF5IiwiZmlsdGVyIiwiZWwiLCJpbmRleCIsIm1hcCIsImtleSIsIlNpZGVCYXIiXSwic291cmNlUm9vdCI6IiJ9