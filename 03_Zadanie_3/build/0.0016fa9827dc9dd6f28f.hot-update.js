self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ (() => {

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
  function Product(name, price, InStock, quantity, itemsOrdered) {
    _classCallCheck(this, Product);
    this.name = name;
    this.price = price;
    this.InStock = true;
    this.quantity = quantity;
    this.itemsOrdered = itemsOrdered;
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
  }, {
    key: "order",
    value: function order(quantity) {
      if (this.itemsOrdered < this.quantity && this.quantity > 0) {
        this.quantity = this.quantity - this.itemsOrdered;
      } else if (this.quantity === 0) {
        this.InStock = false;
      }
    }
  }]);
  return Product;
}();
var Shoes = /*#__PURE__*/function (_Product) {
  _inherits(Shoes, _Product);
  var _super = _createSuper(Shoes);
  function Shoes(name, price, InStock, quantity, itemsOrdered) {
    var _this;
    _classCallCheck(this, Shoes);
    _this = _super.call(this, name, price, InStock, quantity, itemsOrdered), _this.colors = [];
    _this.sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
    return _this;
  }
  _createClass(Shoes, [{
    key: "addColor",
    value: function addColor() {
      for (var _len = arguments.length, color = new Array(_len), _key = 0; _key < _len; _key++) {
        color[_key] = arguments[_key];
      }
      this.colors.push(color);
    }
  }, {
    key: "removeSizes",
    value: function removeSizes(size) {
      var existingSize = this.sizes.indexOf(size);
      return this.sizes.splice(existingSize, 1);
    }
  }]);
  return Shoes;
}(Product);
var adidas = new Shoes("Adidas", 299.99, true, 25, 1, 40);
console.log(adidas.isInStock());
console.log(adidas.order(30));
console.log(adidas.order(10));
console.log(adidas.isInStock());

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7038fc0fe387e60b0b4d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7Ozs7Ozs7O1VDL0MvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUG9uacW8ZWogcGlzeiBzd8OzaiBrb2QhXHJcbiAqL1xyXG5cclxuY2xhc3MgUHJvZHVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIEluU3RvY2ssIHF1YW50aXR5LCBpdGVtc09yZGVyZWQpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB0aGlzLkluU3RvY2sgPSB0cnVlO1xyXG4gICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gICAgdGhpcy5pdGVtc09yZGVyZWQgPSBpdGVtc09yZGVyZWQ7XHJcbiAgfVxyXG4gIGlzSW5TdG9jaygpIHtcclxuICAgIGlmICh0aGlzLkluU3RvY2sgPT09IHRydWUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJQcm9kdWN0IGRvc3RlcG55XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJCcmFrIHcgbWFnYXp5bmllXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBvcmRlcihxdWFudGl0eSkge1xyXG4gICAgaWYgKHRoaXMuaXRlbXNPcmRlcmVkIDwgdGhpcy5xdWFudGl0eSAmJiB0aGlzLnF1YW50aXR5ID4gMCkge1xyXG4gICAgICB0aGlzLnF1YW50aXR5ID0gdGhpcy5xdWFudGl0eSAtIHRoaXMuaXRlbXNPcmRlcmVkO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnF1YW50aXR5ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuSW5TdG9jayA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgU2hvZXMgZXh0ZW5kcyBQcm9kdWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgSW5TdG9jaywgcXVhbnRpdHksIGl0ZW1zT3JkZXJlZCkge1xyXG4gICAgc3VwZXIobmFtZSwgcHJpY2UsIEluU3RvY2ssIHF1YW50aXR5LCBpdGVtc09yZGVyZWQpLCAodGhpcy5jb2xvcnMgPSBbXSk7XHJcbiAgICB0aGlzLnNpemVzID0gWzM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDMsIDQ0XTtcclxuICB9XHJcbiAgYWRkQ29sb3IoLi4uY29sb3IpIHtcclxuICAgIHRoaXMuY29sb3JzLnB1c2goY29sb3IpO1xyXG4gIH1cclxuICByZW1vdmVTaXplcyhzaXplKSB7XHJcbiAgICBjb25zdCBleGlzdGluZ1NpemUgPSB0aGlzLnNpemVzLmluZGV4T2Yoc2l6ZSk7XHJcbiAgICByZXR1cm4gdGhpcy5zaXplcy5zcGxpY2UoZXhpc3RpbmdTaXplLCAxKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGFkaWRhcyA9IG5ldyBTaG9lcyhcIkFkaWRhc1wiLCAyOTkuOTksIHRydWUsIDI1LCAxLCA0MCk7XHJcblxyXG5jb25zb2xlLmxvZyhhZGlkYXMuaXNJblN0b2NrKCkpO1xyXG5jb25zb2xlLmxvZyhhZGlkYXMub3JkZXIoMzApKTtcclxuY29uc29sZS5sb2coYWRpZGFzLm9yZGVyKDEwKSk7XHJcbmNvbnNvbGUubG9nKGFkaWRhcy5pc0luU3RvY2soKSk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjcwMzhmYzBmZTM4N2U2MGIwYjRkXCIpIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJuYW1lIiwicHJpY2UiLCJJblN0b2NrIiwicXVhbnRpdHkiLCJpdGVtc09yZGVyZWQiLCJjb25zb2xlIiwibG9nIiwiU2hvZXMiLCJjb2xvcnMiLCJzaXplcyIsImNvbG9yIiwicHVzaCIsInNpemUiLCJleGlzdGluZ1NpemUiLCJpbmRleE9mIiwic3BsaWNlIiwiYWRpZGFzIiwiaXNJblN0b2NrIiwib3JkZXIiXSwic291cmNlUm9vdCI6IiJ9