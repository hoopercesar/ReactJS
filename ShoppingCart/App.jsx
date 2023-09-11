import styled from "styled-components";
import { NavLink, BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Inicio from "./Componentes/Inicio";
import Blog from "./Componentes/Blog";
import Tienda from "./Componentes/Tienda";
import Error404 from "./Componentes/Error404";
import Carrito from "./Componentes/Carrito";

const App = () => {
  const productos = [
    { id: 1, nombre: "manzana" },
    { id: 2, nombre: "producto 2" },
    { id: 3, nombre: "producto 3" },
    { id: 4, nombre: "producto 4" },
    { id: 5, nombre: "producto 5" },
    { id: 6, nombre: "producto 6" },
  ];

  const [carrito, setCarrito] = useState([]);
  return (
    <BrowserRouter>
      {" "}
      <Contenedor>
        <Menu>
          {" "}
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/tienda">Tienda</NavLink>
        </Menu>
        <main>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/tienda" element={<Tienda productos={productos} />} />
          </Routes>
        </main>
        <aside>
          <Carrito carrito={carrito} />
        </aside>
      </Contenedor>
    </BrowserRouter>
  );
};

const Contenedor = styled.div`
  max-width: 1000px;
  padding: 40px;
  width: 90%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #092c4c;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #1d85e8;
    text-decoration: none;
  }
`;

export default App;
