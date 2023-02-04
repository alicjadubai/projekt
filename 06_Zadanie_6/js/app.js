import React from "react";
import { createRoot } from "react-dom/client";
import products from "./data/products";

const Item = ({ id, price, name }) => {
  return (
    <li key={id}>
      {name}, Cena: {price}
    </li>
  );
};

const Products = ({ products }) => {
  return (
    <div>
      <h2>Produkty</h2>
      <ul>
        {products.map((el) => (
          <Item id={el.id} price={el.price} name={el.name} />
        ))}
      </ul>
    </div>
  );
};
const App = () => {
  return <Products products={products} />;
};
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
