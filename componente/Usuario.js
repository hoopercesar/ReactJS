import React from "react";
import { TituloVerde, TituloOrange } from "./Titulo";
import Frutas from "./Frutas";
import Amigos from "./Amigos";
import Nombre from "./Nombre";
import { Pais } from "./Pais";

const Usuario = () => {
  return (
    <div>
      <TituloVerde cor="red" />
      <Nombre nombre="Pepo" />
      <Pais pais="Chile" />
      <Amigos />
      <Frutas cor="green" />
      <TituloOrange cor="yellow" />
      <Nombre nombre="Fernanda" edad="30" />
    </div>
  );
};

export default Usuario;
