import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [stateCar, setStateCar] = useState(false);

  const OnOff = () => {
    //setStateCar(!stateCar);
    setStateCar((prevValue) => !prevValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Auto {stateCar ? "Encendido" : "Apagado"}</h3>
        <button onClick={OnOff}>Encender / Apagar</button>
      </header>
    </div>
  );
}

export default App;
