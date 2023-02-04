/**
 * Poniżej pisz swój kod!
 */

class Product {
  constructor(name, price, InStock, quantity, itemsOrdered) {
    this.name = name;
    this.price = price;
    this.InStock = true;
    this.quantity = quantity;
    this.itemsOrdered = itemsOrdered;
  }
  isInStock() {
    if (this.InStock === true) {
      console.log("Product dostepny");
    } else {
      console.log("Brak w magazynie");
    }
  }
  order(quantity) {
    if (this.itemsOrdered < this.quantity && this.quantity > 0) {
      this.quantity = this.quantity - this.itemsOrdered;
    } else if (this.quantity === 0) {
      this.InStock = false;
    }
  }
}

class Shoes extends Product {
  constructor(name, price, InStock, quantity, itemsOrdered) {
    super(name, price, InStock, quantity, itemsOrdered), (this.colors = []);
    this.sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
  }
  addColor(...color) {
    this.colors.push(color);
  }
  removeSizes(size) {
    const existingSize = this.sizes.indexOf(size);
    return this.sizes.splice(existingSize, 1);
  }
}

const adidas = new Shoes("Adidas", 299.99, true, 25, 1, 40);
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
