import React from "react";
import { createRoot } from "react-dom/client";
import General from "./WelcomeSection/General";
const App = () => {
  return <General />;
};
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
