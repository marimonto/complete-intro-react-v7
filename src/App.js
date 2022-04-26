const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.brand),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "brand" }, "Adopt Me!"),
    React.createElement(Pet,{
        name: "Trixie",
        animal: "Cat",
        brand: "Creole"
    }),
    React.createElement(Pet,{
        name: "Fruna",
        animal: "Cat",
        brand: "Creole"
    }),
    React.createElement(Pet,{
        name: "Matias",
        animal: "Dog",
        brand: ""
    }),
    React.createElement(Pet,{
        name: "Brandy",
        animal: "Dog",
        brand: ""
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
