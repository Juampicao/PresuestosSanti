import { useState } from "react";
import "./App.css";
import Inicio from "./components/pages/Inicio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="uppercase text-3xl font-bold">Presupuestos Travertino</h1>
      <Inicio />
    </div>
  );
}

export default App;
