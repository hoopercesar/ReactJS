import React from "react";

const Header = ({ mostrarCompletadas, cambiarMostrarCompletadas }) => {
  const toggleCompletadas = () => {
    cambiarMostrarCompletadas(!mostrarCompletadas);
  };

  return (
    <header className="header">
      <h1 className="header__title">Lista de Tareas</h1>
      {mostrarCompletadas ? (
        <button className="header__boton" onClick={() => toggleCompletadas()}>
          No mostrar completadas
          <ion-icon name="eye-off-outline"></ion-icon>
        </button>
      ) : (
        <button className="header__boton" onClick={() => toggleCompletadas()}>
          Mostrar completadas
          <ion-icon name="eye-outline"></ion-icon>
        </button>
      )}
    </header>
  );
};

export default Header;
