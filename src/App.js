import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Trixie" animal="Cat" brand="Creole" />
      <Pet name="Fruna" animal="Cat" brand="Creole" />
      <Pet name="Matias" animal="Dog" brand="Creole" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
