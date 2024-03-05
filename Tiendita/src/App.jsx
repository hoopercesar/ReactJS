import styled from "styled-components";
import { NavLink, BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Componentes/Inicio";
import Blog from "./Componentes/Blog";
import Tienda from "./Componentes/Tienda";
import Carrito from "./Componentes/Carrito";
import GeneraBoleta from "./Componentes/GeneraBoleta";
import Error404 from "./Componentes/Error404";
import Ofertas from "./Componentes/Ofertas";
import Promociones from "./Componentes/Promociones";
import Login from "./Auth0Components/Login";
import FormularioPago from "./Componentes/FormularioPago";


const App = () => {
  return (
    <BrowserRouter>
      {" "}
      <Fondo>
      <Contenedor>
        <Menu>
          {" "}
          <NavLink to="/tienda">Productos</NavLink>
          <NavLink to="/ofertas">Ofertas</NavLink>
          <NavLink to="/promociones">Promociones</NavLink>
          <NavLink to="/blog">Comenta</NavLink>
          <NavLink to="/registrarse">Regístrate</NavLink>
          <Login />
        </Menu>
        <main>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="boleta" element={<GeneraBoleta />} />
            <Route path="/formulariopago" element={<FormularioPago />} />
          </Routes>
        </main>
        <aside>
          <Carrito />
        </aside>
      </Contenedor>
      </Fondo>
    </BrowserRouter>
  );
};


const Fondo = styled.div`
  background-image: url('./assets/fondo.png'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.8; /* Ajusta la opacidad según tus necesidades */
`;

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