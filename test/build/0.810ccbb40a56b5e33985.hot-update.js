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
/******/ 	__webpack_require__.h = () => ("e94df713a400a08d9733")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44MTBjY2JiNDBhNTZiNWUzMzk4NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRTtBQUU1QixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxPQUE0QjtFQUFBLElBQXRCQyxLQUFLLFFBQUxBLEtBQUs7SUFBRUMsR0FBRyxRQUFIQSxHQUFHO0lBQUVDLEdBQUcsUUFBSEEsR0FBRztFQUNwQyxvQkFDRTtJQUFJLEdBQUcsRUFBRUE7RUFBSSxnQkFDWDtJQUFHLElBQUksRUFBRUQ7RUFBSSxHQUFFRCxLQUFLLENBQUssQ0FDdEI7QUFFVCxDQUFDO0FBRUQsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixRQUEwQjtFQUFBLElBQXBCQyxLQUFLLFNBQUxBLEtBQUs7SUFBRUMsTUFBTSxTQUFOQSxNQUFNO0VBQ3ZDLElBQU1DLGFBQWEsR0FBR0YsS0FBSyxDQUFDRyxNQUFNLENBQ2hDLFVBQUNDLEVBQUUsRUFBRUMsS0FBSztJQUFBLE9BQUtBLEtBQUssSUFBSUosTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJSSxLQUFLLElBQUlKLE1BQU0sQ0FBQyxDQUFDLENBQUM7RUFBQSxFQUN4RDtFQUNELG9CQUNFLHVFQUNHQyxhQUFhLENBQUNJLEdBQUcsQ0FBQyxVQUFDRixFQUFFO0lBQUEsb0JBQ3BCLDJEQUFDLFdBQVc7TUFBQyxLQUFLLEVBQUVBLEVBQUUsQ0FBQ1IsS0FBTTtNQUFDLEdBQUcsRUFBRVEsRUFBRSxDQUFDUCxHQUFJO01BQUMsR0FBRyxFQUFFTyxFQUFFLENBQUNOO0lBQUksRUFBRztFQUFBLENBQzNELENBQUMsQ0FDQztBQUVULENBQUM7QUFDRCxJQUFNUyxPQUFPLEdBQUcsU0FBVkEsT0FBTyxHQUFTO0VBQ3BCLG9CQUNFO0lBQUssU0FBUyxFQUFDO0VBQVMsZ0JBQ3RCO0lBQUssU0FBUyxFQUFDO0VBQWtCLGdCQUMvQjtJQUFLLFNBQVMsRUFBQztFQUFjLGdCQUMzQiwyREFBQyxnQkFBZ0I7SUFBQyxLQUFLLEVBQUViLDhDQUFNO0lBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFBRSxFQUFHLENBQzlDLGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBYyxnQkFDM0IsMkRBQUMsZ0JBQWdCO0lBQUMsS0FBSyxFQUFFQSw4Q0FBTTtJQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQUUsRUFBRyxDQUM5QyxDQUNGLENBQ0Y7QUFFVixDQUFDO0FBQ0QsaUVBQWVhLE9BQU87Ozs7Ozs7O1VDckN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX1phZGFuaWUgMS9qcy9XZWxjb21lU2VjdGlvbi9TaWRlQmFyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlua3MgZnJvbSBcIi4vTGlua3NcIjtcclxuXHJcbmNvbnN0IFNpZGVCYXJMaW5rID0gKHsgdGl0bGUsIHVybCwga2V5IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGtleT17a2V5fT5cclxuICAgICAgPGEgaHJlZj17dXJsfT57dGl0bGV9PC9hPlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2lkZUJhckxpbmtHcm91cCA9ICh7IGxpbmtzLCBpdGVtTm8gfSkgPT4ge1xyXG4gIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBsaW5rcy5maWx0ZXIoXHJcbiAgICAoZWwsIGluZGV4KSA9PiBpbmRleCA+PSBpdGVtTm9bMF0gJiYgaW5kZXggPD0gaXRlbU5vWzFdXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHVsPlxyXG4gICAgICB7ZmlsdGVyZWRBcnJheS5tYXAoKGVsKSA9PiAoXHJcbiAgICAgICAgPFNpZGVCYXJMaW5rIHRpdGxlPXtlbC50aXRsZX0gdXJsPXtlbC51cmx9IGtleT17ZWwua2V5fSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufTtcclxuY29uc3QgU2lkZUJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3F1aXNoLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZXhhbXBsZS1tZW51XCI+XHJcbiAgICAgICAgICA8U2lkZUJhckxpbmtHcm91cCBsaW5rcz17TGlua3N9IGl0ZW1Obz17WzAsIDRdfSAvPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZXhhbXBsZS1tZW51XCI+XHJcbiAgICAgICAgICA8U2lkZUJhckxpbmtHcm91cCBsaW5rcz17TGlua3N9IGl0ZW1Obz17WzUsIDldfSAvPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU5NGRmNzEzYTQwMGEwOGQ5NzMzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGlua3MiLCJTaWRlQmFyTGluayIsInRpdGxlIiwidXJsIiwia2V5IiwiU2lkZUJhckxpbmtHcm91cCIsImxpbmtzIiwiaXRlbU5vIiwiZmlsdGVyZWRBcnJheSIsImZpbHRlciIsImVsIiwiaW5kZXgiLCJtYXAiLCJTaWRlQmFyIl0sInNvdXJjZVJvb3QiOiIifQ==