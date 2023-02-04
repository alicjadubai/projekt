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
  function Shoes(name, price, InStock, quantity, itemsOrdered, colors, sizes) {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dc2257b593212d93ddfb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZmI4YTg1OGUyZWYxYmM2Mjg1Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUZBLElBSU1BLE9BQU87RUFDWCxpQkFBWUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUU7SUFBQTtJQUN4RCxJQUFJLENBQUNKLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLE9BQU8sR0FBRyxJQUFJO0lBQ25CLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQSxZQUFZO0VBQ2xDO0VBQUM7SUFBQTtJQUFBLE9BQ0QscUJBQVk7TUFDVixJQUFJLElBQUksQ0FBQ0YsT0FBTyxLQUFLLElBQUksRUFBRTtRQUN6QkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7TUFDakMsQ0FBQyxNQUFNO1FBQ0xELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO01BQ2pDO0lBQ0Y7RUFBQztJQUFBO0lBQUEsT0FDRCxlQUFNSCxRQUFRLEVBQUU7TUFDZCxJQUFJLElBQUksQ0FBQ0MsWUFBWSxHQUFHLElBQUksQ0FBQ0QsUUFBUSxJQUFJLElBQUksQ0FBQ0EsUUFBUSxHQUFHLENBQUMsRUFBRTtRQUMxRCxJQUFJLENBQUNBLFFBQVEsR0FBRyxJQUFJLENBQUNBLFFBQVEsR0FBRyxJQUFJLENBQUNDLFlBQVk7TUFDbkQsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDRCxRQUFRLEtBQUssQ0FBQyxFQUFFO1FBQzlCLElBQUksQ0FBQ0QsT0FBTyxHQUFHLEtBQUs7TUFDdEI7SUFDRjtFQUFDO0VBQUE7QUFBQTtBQUFBLElBR0dLLEtBQUs7RUFBQTtFQUFBO0VBQ1QsZUFBWVAsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVJLE1BQU0sRUFBRUMsS0FBSyxFQUFFO0lBQUE7SUFBQTtJQUN2RSwwQkFBTVQsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEdBQUksTUFBS0ksTUFBTSxHQUFHLEVBQUc7SUFDdkUsTUFBS0MsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQUM7RUFDeEQ7RUFBQztJQUFBO0lBQUEsT0FDRCxvQkFBbUI7TUFBQSxrQ0FBUEMsS0FBSztRQUFMQSxLQUFLO01BQUE7TUFDZixJQUFJLENBQUNGLE1BQU0sQ0FBQ0csSUFBSSxDQUFDRCxLQUFLLENBQUM7SUFDekI7RUFBQztJQUFBO0lBQUEsT0FDRCxxQkFBWUUsSUFBSSxFQUFFO01BQ2hCLElBQU1DLFlBQVksR0FBRyxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssT0FBTyxDQUFDRixJQUFJLENBQUM7TUFDN0MsT0FBTyxJQUFJLENBQUNILEtBQUssQ0FBQ00sTUFBTSxDQUFDRixZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzNDO0VBQUM7RUFBQTtBQUFBLEVBWGlCZCxPQUFPOzs7Ozs7OztVQzVCM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFBvbmnFvGVqIHBpc3ogc3fDs2oga29kIVxyXG4gKi9cclxuXHJcbmNsYXNzIFByb2R1Y3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBJblN0b2NrLCBxdWFudGl0eSwgaXRlbXNPcmRlcmVkKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgdGhpcy5JblN0b2NrID0gdHJ1ZTtcclxuICAgIHRoaXMucXVhbnRpdHkgPSBxdWFudGl0eTtcclxuICAgIHRoaXMuaXRlbXNPcmRlcmVkID0gaXRlbXNPcmRlcmVkO1xyXG4gIH1cclxuICBpc0luU3RvY2soKSB7XHJcbiAgICBpZiAodGhpcy5JblN0b2NrID09PSB0cnVlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdCBkb3N0ZXBueVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQnJhayB3IG1hZ2F6eW5pZVwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgb3JkZXIocXVhbnRpdHkpIHtcclxuICAgIGlmICh0aGlzLml0ZW1zT3JkZXJlZCA8IHRoaXMucXVhbnRpdHkgJiYgdGhpcy5xdWFudGl0eSA+IDApIHtcclxuICAgICAgdGhpcy5xdWFudGl0eSA9IHRoaXMucXVhbnRpdHkgLSB0aGlzLml0ZW1zT3JkZXJlZDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5xdWFudGl0eSA9PT0gMCkge1xyXG4gICAgICB0aGlzLkluU3RvY2sgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFNob2VzIGV4dGVuZHMgUHJvZHVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIEluU3RvY2ssIHF1YW50aXR5LCBpdGVtc09yZGVyZWQsIGNvbG9ycywgc2l6ZXMpIHtcclxuICAgIHN1cGVyKG5hbWUsIHByaWNlLCBJblN0b2NrLCBxdWFudGl0eSwgaXRlbXNPcmRlcmVkKSwgKHRoaXMuY29sb3JzID0gW10pO1xyXG4gICAgdGhpcy5zaXplcyA9IFszNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NF07XHJcbiAgfVxyXG4gIGFkZENvbG9yKC4uLmNvbG9yKSB7XHJcbiAgICB0aGlzLmNvbG9ycy5wdXNoKGNvbG9yKTtcclxuICB9XHJcbiAgcmVtb3ZlU2l6ZXMoc2l6ZSkge1xyXG4gICAgY29uc3QgZXhpc3RpbmdTaXplID0gdGhpcy5zaXplcy5pbmRleE9mKHNpemUpO1xyXG4gICAgcmV0dXJuIHRoaXMuc2l6ZXMuc3BsaWNlKGV4aXN0aW5nU2l6ZSwgMSk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRjMjI1N2I1OTMyMTJkOTNkZGZiXCIpIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJuYW1lIiwicHJpY2UiLCJJblN0b2NrIiwicXVhbnRpdHkiLCJpdGVtc09yZGVyZWQiLCJjb25zb2xlIiwibG9nIiwiU2hvZXMiLCJjb2xvcnMiLCJzaXplcyIsImNvbG9yIiwicHVzaCIsInNpemUiLCJleGlzdGluZ1NpemUiLCJpbmRleE9mIiwic3BsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==