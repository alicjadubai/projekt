import React from "react";
import { createRoot } from "react-dom/client";

const UserDetails = ({ name, surname, address, postal, city }) => {
  return (
    <div class="card">
      <div>
        <h5>
          {name} {surname}
        </h5>
        <div>{address}</div>
        <div>
          {postal} {city}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <UserDetails
      name="Alicja"
      surname="Jagielska"
      address="Zlota"
      postal="70-754"
      city="Szczecin"
    />
  );
};
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
