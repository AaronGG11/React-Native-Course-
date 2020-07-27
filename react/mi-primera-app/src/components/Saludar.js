import React from "react";

export default function Saludar(props) {
  const { userInfo, saludarFn } = props;
  const { nombre = "Anonimo", edad } = userInfo; // valor default
  //console.log(props);

  return (
    <div>
      <button onClick={() => saludarFn(nombre, edad)}>Saludar</button>
    </div>
  );
}
