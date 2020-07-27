import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Saludar from "./components/Saludar";

function App() {
  const user = {
    nombre: "Aaron Garcia Gonzalez",
    edad: "21",
    color: "azul",
  };

  const saludarFn = (nombre, edad) => {
    alert(`Hola ${nombre}, tienes ${edad} años.`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} saludarFn={saludarFn} />
      </header>
    </div>
  );
}

// ahora sigue propiedades por defecto.
export default App;
