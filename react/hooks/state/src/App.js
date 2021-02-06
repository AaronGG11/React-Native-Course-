import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [stateCar, setStateCar] = useState(false); /*El false es el valor por defecto */
  const [contar, setContar] = useState(0);

  const OnOff = () => {
    setStateCar(!stateCar);
    //setStateCar((prevValue) => !prevValue);
    setContar(contar + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Auto {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={OnOff}>Encender / Apagar</button>
      </header>
    </div>
  );
}

export default App;
