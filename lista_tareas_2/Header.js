import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Lista de Tareas</h1>
      <button className="header__boton">
        <ion-icon name="construct"></ion-icon>
        En construccion
        <ion-icon name="logo-react"></ion-icon>
      </button>
    </header>
  );
};

export default Header;
