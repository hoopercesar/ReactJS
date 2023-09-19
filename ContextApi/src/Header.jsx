import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <ContenedorHeader>
      <Titulo>Clinica de Salud</Titulo>
      <Menu>
        <NavLink to="/">Servicios</NavLink>
        <NavLink to="/especialidades">Especialidades</NavLink>
        <NavLink to="/tratamientos">Tratamientos</NavLink>
        <NavLink to="/neurologia">Neurologia</NavLink>
      </Menu>
    </ContenedorHeader>
  );
}

const ContenedorHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Titulo = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`;

const Menu = styled.nav`
  a {
    text-decoration: none;
    color: #165168;
    margin: 0px 10px;
  }

  a:hover {
    color: #19168;
  }

  a.active {
    border-bottom: 2px solid #165168;
    padding-bottom: 3px;
  }
`;

export default Header;
