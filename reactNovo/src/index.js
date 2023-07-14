import React from "react";
import ReactDOM from "react-dom/client";
import { Hola } from "./Hola";
import Product, { BotIcon, Navbar, TruckIcon, UsuarioInfo } from "./Product";
import { Button } from "./Button";

// # al crear la función  en Hola.js se puse

const root = ReactDOM.createRoot(document.getElementById("root"));
const lista = ["Tos", "Jaqueca", "Alergia"];
root.render(
  <>
    <Navbar nombre="julio" apellido="sosa" />
    {/* <Hola title="excelente" poto="feo" />
    <Hola title="muy bien" /> */}
    {/* <Hola title={[1, 2, 3, 4]} /> */}
    <Product title="red" />
    <Navbar nombre="raquel" apellido="soto" />
    <Navbar nombre="andrea" />
    <UsuarioInfo
      name="carlos"
      apellido="Nunes"
      amount={200}
      adress={{ street: "holguin", number: "22" }}
    />
    <TruckIcon fuerza="1000N" />
    <BotIcon />
    <Button text="Fiebre" />
    <Button text="Dolor Muscular" numero={55} adress={[1, 2, 3]} />
    <Button text="Nauseas" numero={23} />
    <Button text="Diarrea" />
    <Button text={lista[2]} numero={5 * 2} />
  </>
);
