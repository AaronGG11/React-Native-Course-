import React from "react";

export default function Saludar(props) {
  const { userInfo, saludarFn } = props;
  const { nombre = "Anonimo", edad = X } = userInfo; // valor default
  //console.log(props);

  return (
    <div>
      <button onClick={() => saludarFn(nombre, edad)}>Saludar</button> {/* Funcion anonima */}
    </div>
  );
}
