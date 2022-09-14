import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Lista de Tareas</h1>
      <button className="header__boton">
        No mostrar completadas
        <ion-icon name="eye-off-outline"></ion-icon>
      </button>
    </header>
  );
};

export default Header;
