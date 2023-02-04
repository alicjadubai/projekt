self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Poniżej pisz swój kod!
 */
var Product = /*#__PURE__*/function () {
  function Product(name, price, InStock, quantity) {
    _classCallCheck(this, Product);
    this.name = name;
    this.price = price;
    this.InStock = true;
    this.quantity = quantity;
  }
  _createClass(Product, [{
    key: "isInStock",
    value: function isInStock() {
      if (this.InStock === true) {
        console.log("Product dostepny");
      } else {
        console.log("Brak w magazynie");
      }
    }
  }]);
  return Product;
}();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a9dbaf08fea5b1bf3c45")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40OTIyMmRhODM1ZWRmZmRjZWE4OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRkEsSUFJTUEsT0FBTztFQUNYLGlCQUFZQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFBQTtJQUMxQyxJQUFJLENBQUNILElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLE9BQU8sR0FBRyxJQUFJO0lBQ25CLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0VBQzFCO0VBQUM7SUFBQTtJQUFBLE9BQ0QscUJBQVk7TUFDVixJQUFJLElBQUksQ0FBQ0QsT0FBTyxLQUFLLElBQUksRUFBRTtRQUN6QkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7TUFDakMsQ0FBQyxNQUFNO1FBQ0xELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO01BQ2pDO0lBQ0Y7RUFBQztFQUFBO0FBQUE7Ozs7Ozs7O1VDakJIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBQb25pxbxlaiBwaXN6IHN3w7NqIGtvZCFcclxuICovXHJcblxyXG5jbGFzcyBQcm9kdWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgSW5TdG9jaywgcXVhbnRpdHkpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB0aGlzLkluU3RvY2sgPSB0cnVlO1xyXG4gICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gIH1cclxuICBpc0luU3RvY2soKSB7XHJcbiAgICBpZiAodGhpcy5JblN0b2NrID09PSB0cnVlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdCBkb3N0ZXBueVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQnJhayB3IG1hZ2F6eW5pZVwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTlkYmFmMDhmZWE1YjFiZjNjNDVcIikiXSwibmFtZXMiOlsiUHJvZHVjdCIsIm5hbWUiLCJwcmljZSIsIkluU3RvY2siLCJxdWFudGl0eSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9