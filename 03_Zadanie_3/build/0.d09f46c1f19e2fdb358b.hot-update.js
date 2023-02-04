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
console.log(adidas);
console.log(adidas.isInStock());
console.log(adidas.order(30));
console.log(adidas.order(10));
console.log(adidas.isInStock());
adidas.addColor("red");
adidas.addColor("blue");
adidas.addColor("green");
console.log(adidas.colors);
adidas.removeSize(38);
adidas.removeSize(40);
adidas.removeSize(43);
console.log(adidas.sizes);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("645b136f847f60d70b79")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDQyxHQUFHLENBQUNVLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFLENBQUM7QUFDL0JELE1BQU0sQ0FBQ0csUUFBUSxDQUFDLEtBQUssQ0FBQztBQUN0QkgsTUFBTSxDQUFDRyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ3ZCSCxNQUFNLENBQUNHLFFBQVEsQ0FBQyxPQUFPLENBQUM7QUFDeEJkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVSxNQUFNLENBQUNSLE1BQU0sQ0FBQztBQUUxQlEsTUFBTSxDQUFDSSxVQUFVLENBQUMsRUFBRSxDQUFDO0FBQ3JCSixNQUFNLENBQUNJLFVBQVUsQ0FBQyxFQUFFLENBQUM7QUFDckJKLE1BQU0sQ0FBQ0ksVUFBVSxDQUFDLEVBQUUsQ0FBQztBQUNyQmYsT0FBTyxDQUFDQyxHQUFHLENBQUNVLE1BQU0sQ0FBQ1AsS0FBSyxDQUFDOzs7Ozs7OztVQ3pEekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFBvbmnFvGVqIHBpc3ogc3fDs2oga29kIVxyXG4gKi9cclxuXHJcbmNsYXNzIFByb2R1Y3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBJblN0b2NrLCBxdWFudGl0eSwgaXRlbXNPcmRlcmVkKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgdGhpcy5JblN0b2NrID0gdHJ1ZTtcclxuICAgIHRoaXMucXVhbnRpdHkgPSBxdWFudGl0eTtcclxuICAgIHRoaXMuaXRlbXNPcmRlcmVkID0gaXRlbXNPcmRlcmVkO1xyXG4gIH1cclxuICBpc0luU3RvY2soKSB7XHJcbiAgICBpZiAodGhpcy5JblN0b2NrID09PSB0cnVlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdCBkb3N0ZXBueVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQnJhayB3IG1hZ2F6eW5pZVwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgb3JkZXIocXVhbnRpdHkpIHtcclxuICAgIGlmICh0aGlzLml0ZW1zT3JkZXJlZCA8IHRoaXMucXVhbnRpdHkgJiYgdGhpcy5xdWFudGl0eSA+IDApIHtcclxuICAgICAgdGhpcy5xdWFudGl0eSA9IHRoaXMucXVhbnRpdHkgLSB0aGlzLml0ZW1zT3JkZXJlZDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5xdWFudGl0eSA9PT0gMCkge1xyXG4gICAgICB0aGlzLkluU3RvY2sgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFNob2VzIGV4dGVuZHMgUHJvZHVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIEluU3RvY2ssIHF1YW50aXR5LCBpdGVtc09yZGVyZWQpIHtcclxuICAgIHN1cGVyKG5hbWUsIHByaWNlLCBJblN0b2NrLCBxdWFudGl0eSwgaXRlbXNPcmRlcmVkKSwgKHRoaXMuY29sb3JzID0gW10pO1xyXG4gICAgdGhpcy5zaXplcyA9IFszNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NF07XHJcbiAgfVxyXG4gIGFkZENvbG9yKC4uLmNvbG9yKSB7XHJcbiAgICB0aGlzLmNvbG9ycy5wdXNoKGNvbG9yKTtcclxuICB9XHJcbiAgcmVtb3ZlU2l6ZXMoc2l6ZSkge1xyXG4gICAgY29uc3QgZXhpc3RpbmdTaXplID0gdGhpcy5zaXplcy5pbmRleE9mKHNpemUpO1xyXG4gICAgcmV0dXJuIHRoaXMuc2l6ZXMuc3BsaWNlKGV4aXN0aW5nU2l6ZSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhZGlkYXMgPSBuZXcgU2hvZXMoXCJBZGlkYXNcIiwgMjk5Ljk5LCB0cnVlLCAyNSwgMSwgNDApO1xyXG5jb25zb2xlLmxvZyhhZGlkYXMpO1xyXG5cclxuY29uc29sZS5sb2coYWRpZGFzLmlzSW5TdG9jaygpKTtcclxuY29uc29sZS5sb2coYWRpZGFzLm9yZGVyKDMwKSk7XHJcbmNvbnNvbGUubG9nKGFkaWRhcy5vcmRlcigxMCkpO1xyXG5jb25zb2xlLmxvZyhhZGlkYXMuaXNJblN0b2NrKCkpO1xyXG5hZGlkYXMuYWRkQ29sb3IoXCJyZWRcIik7XHJcbmFkaWRhcy5hZGRDb2xvcihcImJsdWVcIik7XHJcbmFkaWRhcy5hZGRDb2xvcihcImdyZWVuXCIpO1xyXG5jb25zb2xlLmxvZyhhZGlkYXMuY29sb3JzKTtcclxuXHJcbmFkaWRhcy5yZW1vdmVTaXplKDM4KTtcclxuYWRpZGFzLnJlbW92ZVNpemUoNDApO1xyXG5hZGlkYXMucmVtb3ZlU2l6ZSg0Myk7XHJcbmNvbnNvbGUubG9nKGFkaWRhcy5zaXplcyk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY0NWIxMzZmODQ3ZjYwZDcwYjc5XCIpIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJuYW1lIiwicHJpY2UiLCJJblN0b2NrIiwicXVhbnRpdHkiLCJpdGVtc09yZGVyZWQiLCJjb25zb2xlIiwibG9nIiwiU2hvZXMiLCJjb2xvcnMiLCJzaXplcyIsImNvbG9yIiwicHVzaCIsInNpemUiLCJleGlzdGluZ1NpemUiLCJpbmRleE9mIiwic3BsaWNlIiwiYWRpZGFzIiwiaXNJblN0b2NrIiwib3JkZXIiLCJhZGRDb2xvciIsInJlbW92ZVNpemUiXSwic291cmNlUm9vdCI6IiJ9