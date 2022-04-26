import React from "react";
import { render } from "react-dom";
import Pet from "./pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Trixie",
      animal: "Cat",
      brand: "Creole",
    }),
    React.createElement(Pet, {
      name: "Fruna",
      animal: "Cat",
      brand: "Creole",
    }),
    React.createElement(Pet, {
      name: "Matias",
      animal: "Dog",
      brand: "Creole",
    }),
    React.createElement(Pet, {
      name: "Brandy",
      animal: "Dog",
      brand: "",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
