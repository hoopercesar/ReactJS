import React from "react";

const Boton = ({ cuenta, cambiarCuenta }) => {
  const presionarBoton = (ev) => {
    ev.preventDefault();
    cambiarCuenta(cuenta + 1);
  };

  return (
    <div>
      <button onClick={presionarBoton}>
        No toques este botón
        <ion-icon name="alert-circle"></ion-icon>
      </button>
      <div>Has ganado {cuenta} monedas de oro</div>
    </div>
  );
};

export default Boton;
