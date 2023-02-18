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
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8a528fe610a9a984fbd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNGRlMmYzM2QwMmUyNzE4ZWZhZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRTtBQUU1QixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxPQUE0QjtFQUFBLElBQXRCQyxLQUFLLFFBQUxBLEtBQUs7SUFBRUMsR0FBRyxRQUFIQSxHQUFHO0lBQUVDLEdBQUcsUUFBSEEsR0FBRztFQUNwQyxvQkFDRTtJQUFJLEdBQUcsRUFBRUE7RUFBSSxnQkFDWDtJQUFHLElBQUksRUFBRUQ7RUFBSSxHQUFFRCxLQUFLLENBQUssQ0FDdEI7QUFFVCxDQUFDO0FBRUQsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixRQUEwQjtFQUFBLElBQXBCQyxLQUFLLFNBQUxBLEtBQUs7SUFBRUMsTUFBTSxTQUFOQSxNQUFNO0VBQ3ZDLElBQU1DLGFBQWEsR0FBR0YsS0FBSyxDQUFDRyxNQUFNLENBQ2hDLFVBQUNDLEVBQUUsRUFBRUMsS0FBSztJQUFBLE9BQUtBLEtBQUssSUFBSUosTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJSSxLQUFLLElBQUlKLE1BQU0sQ0FBQyxDQUFDLENBQUM7RUFBQSxFQUN4RDtFQUNELG9CQUNFLHVFQUNHQyxhQUFhLENBQUNJLEdBQUcsQ0FBQyxVQUFDRixFQUFFO0lBQUEsb0JBQ3BCLDJEQUFDLFdBQVc7TUFBQyxLQUFLLEVBQUVBLEVBQUUsQ0FBQ1IsS0FBTTtNQUFDLEdBQUcsRUFBRVEsRUFBRSxDQUFDUCxHQUFJO01BQUMsR0FBRyxFQUFFTyxFQUFFLENBQUNOO0lBQUksRUFBRztFQUFBLENBQzNELENBQUMsQ0FDQztBQUVULENBQUM7QUFDRCxJQUFNUyxPQUFPLEdBQUcsU0FBVkEsT0FBTyxHQUFTO0VBQ3BCLG9CQUNFO0lBQUssU0FBTTtFQUFTLGdCQUNsQjtJQUFLLFNBQU07RUFBa0IsZ0JBQzNCO0lBQUssU0FBTTtFQUFjLGdCQUN2QiwyREFBQyxnQkFBZ0I7SUFBQyxLQUFLLEVBQUViLDhDQUFNO0lBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFBRSxFQUFHLENBQzlDLGVBQ047SUFBSyxTQUFNO0VBQWMsRUFBTyxDQUM1QixDQUNGO0FBRVYsQ0FBQztBQUNELGlFQUFlYSxPQUFPOzs7Ozs7OztVQ25DdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9aYWRhbmllIDEvanMvV2VsY29tZVNlY3Rpb24vU2lkZUJhci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmtzIGZyb20gXCIuL0xpbmtzXCI7XHJcblxyXG5jb25zdCBTaWRlQmFyTGluayA9ICh7IHRpdGxlLCB1cmwsIGtleSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBrZXk9e2tleX0+XHJcbiAgICAgIDxhIGhyZWY9e3VybH0+e3RpdGxlfTwvYT5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNpZGVCYXJMaW5rR3JvdXAgPSAoeyBsaW5rcywgaXRlbU5vIH0pID0+IHtcclxuICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gbGlua3MuZmlsdGVyKFxyXG4gICAgKGVsLCBpbmRleCkgPT4gaW5kZXggPj0gaXRlbU5vWzBdICYmIGluZGV4IDw9IGl0ZW1Ob1sxXVxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bD5cclxuICAgICAge2ZpbHRlcmVkQXJyYXkubWFwKChlbCkgPT4gKFxyXG4gICAgICAgIDxTaWRlQmFyTGluayB0aXRsZT17ZWwudGl0bGV9IHVybD17ZWwudXJsfSBrZXk9e2VsLmtleX0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IFNpZGVCYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzcXVpc2gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzcz1cImV4YW1wbGUtbWVudVwiPlxyXG4gICAgICAgICAgPFNpZGVCYXJMaW5rR3JvdXAgbGlua3M9e0xpbmtzfSBpdGVtTm89e1swLCA0XX0gLz5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8bmF2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCI+PC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYThhNTI4ZmU2MTBhOWE5ODRmYmRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rcyIsIlNpZGVCYXJMaW5rIiwidGl0bGUiLCJ1cmwiLCJrZXkiLCJTaWRlQmFyTGlua0dyb3VwIiwibGlua3MiLCJpdGVtTm8iLCJmaWx0ZXJlZEFycmF5IiwiZmlsdGVyIiwiZWwiLCJpbmRleCIsIm1hcCIsIlNpZGVCYXIiXSwic291cmNlUm9vdCI6IiJ9