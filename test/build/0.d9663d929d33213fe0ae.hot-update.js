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
/******/ 	__webpack_require__.h = () => ("926f15290d67498ff3a9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kOTY2M2Q5MjlkMzMyMTNmZTBhZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRTtBQUU1QixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxPQUE0QjtFQUFBLElBQXRCQyxLQUFLLFFBQUxBLEtBQUs7SUFBRUMsR0FBRyxRQUFIQSxHQUFHO0lBQUVDLEdBQUcsUUFBSEEsR0FBRztFQUNwQyxvQkFDRSxvRkFDRTtJQUFHLElBQUksRUFBRUQ7RUFBSSxHQUFFRCxLQUFLLENBQUssQ0FDdEI7QUFFVCxDQUFDO0FBRUQsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixRQUEwQjtFQUFBLElBQXBCQyxLQUFLLFNBQUxBLEtBQUs7SUFBRUMsTUFBTSxTQUFOQSxNQUFNO0VBQ3ZDLElBQU1DLGFBQWEsR0FBR0YsS0FBSyxDQUFDRyxNQUFNLENBQ2hDLFVBQUNDLEVBQUUsRUFBRUMsS0FBSztJQUFBLE9BQUtBLEtBQUssSUFBSUosTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJSSxLQUFLLElBQUlKLE1BQU0sQ0FBQyxDQUFDLENBQUM7RUFBQSxFQUN4RDtFQUNELG9CQUNFLHVFQUNHQyxhQUFhLENBQUNJLEdBQUcsQ0FBQyxVQUFDRixFQUFFO0lBQUEsb0JBQ3BCLDJEQUFDLFdBQVc7TUFBQyxLQUFLLEVBQUVBLEVBQUUsQ0FBQ1IsS0FBTTtNQUFDLEdBQUcsRUFBRVEsRUFBRSxDQUFDUCxHQUFJO01BQUMsR0FBRyxFQUFFTyxFQUFFLENBQUNOO0lBQUksRUFBRztFQUFBLENBQzNELENBQUMsQ0FDQztBQUVULENBQUM7QUFDRCxJQUFNUyxPQUFPLEdBQUcsU0FBVkEsT0FBTyxHQUFTO0VBQ3BCLG9CQUNFO0lBQUssU0FBUyxFQUFDO0VBQVMsZ0JBQ3RCO0lBQUssU0FBUyxFQUFDO0VBQWtCLGdCQUMvQjtJQUFLLFNBQVMsRUFBQztFQUFjLGdCQUMzQiwyREFBQyxnQkFBZ0I7SUFBQyxLQUFLLEVBQUViLDhDQUFNO0lBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFBRSxFQUFHLENBQzlDLGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBYyxnQkFDM0IsMkRBQUMsZ0JBQWdCO0lBQUMsS0FBSyxFQUFFQSw4Q0FBTTtJQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQUUsRUFBRyxDQUM5QyxDQUNGLENBQ0Y7QUFFVixDQUFDO0FBQ0QsaUVBQWVhLE9BQU87Ozs7Ozs7O1VDckN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX1phZGFuaWUgMS9qcy9XZWxjb21lU2VjdGlvbi9TaWRlQmFyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlua3MgZnJvbSBcIi4vTGlua3NcIjtcclxuXHJcbmNvbnN0IFNpZGVCYXJMaW5rID0gKHsgdGl0bGUsIHVybCwga2V5IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpPlxyXG4gICAgICA8YSBocmVmPXt1cmx9Pnt0aXRsZX08L2E+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaWRlQmFyTGlua0dyb3VwID0gKHsgbGlua3MsIGl0ZW1ObyB9KSA9PiB7XHJcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IGxpbmtzLmZpbHRlcihcclxuICAgIChlbCwgaW5kZXgpID0+IGluZGV4ID49IGl0ZW1Ob1swXSAmJiBpbmRleCA8PSBpdGVtTm9bMV1cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWw+XHJcbiAgICAgIHtmaWx0ZXJlZEFycmF5Lm1hcCgoZWwpID0+IChcclxuICAgICAgICA8U2lkZUJhckxpbmsgdGl0bGU9e2VsLnRpdGxlfSB1cmw9e2VsLnVybH0ga2V5PXtlbC5rZXl9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG5jb25zdCBTaWRlQmFyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVpc2gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJleGFtcGxlLW1lbnVcIj5cclxuICAgICAgICAgIDxTaWRlQmFyTGlua0dyb3VwIGxpbmtzPXtMaW5rc30gaXRlbU5vPXtbMCwgNF19IC8+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJleGFtcGxlLW1lbnVcIj5cclxuICAgICAgICAgIDxTaWRlQmFyTGlua0dyb3VwIGxpbmtzPXtMaW5rc30gaXRlbU5vPXtbNSwgOV19IC8+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTI2ZjE1MjkwZDY3NDk4ZmYzYTlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rcyIsIlNpZGVCYXJMaW5rIiwidGl0bGUiLCJ1cmwiLCJrZXkiLCJTaWRlQmFyTGlua0dyb3VwIiwibGlua3MiLCJpdGVtTm8iLCJmaWx0ZXJlZEFycmF5IiwiZmlsdGVyIiwiZWwiLCJpbmRleCIsIm1hcCIsIlNpZGVCYXIiXSwic291cmNlUm9vdCI6IiJ9