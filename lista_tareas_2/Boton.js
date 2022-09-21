import React from "react";

const Boton = ({ cuenta, cambiarCuenta }) => {
  const presionarBoton = (ev) => {
    ev.preventDefault();
    cambiarCuenta(cuenta + 1);
  };

  return (
    <div>
      <button onClick={presionarBoton}>
        No lo toques
        <ion-icon name="alert-circle"></ion-icon>
      </button>
      <div>Has presionado {cuenta} veces</div>
    </div>
  );
};

export default Boton;
