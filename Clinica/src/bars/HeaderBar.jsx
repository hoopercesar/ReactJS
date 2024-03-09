import React from 'react'
import '/home/cesar/nodeprojects/clinica/src/style.css';
import { NavLink, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Odontologia from "../componentes/Odontologia";

const HeaderBar = () => {
  return (
    <>
    <BrowserRouter>
    
      <header id="header" className="fixed-top">
          
          <div className="container d-flex align-items-center">

            <h1 className="logo me-auto">Clinica</h1>
            <NavLink to="/">Inicio</NavLink>{" "}
            <NavLink to="/odontologia">Odontologia</NavLink>{" "}
            <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline"></span> Pide una Cita</a>


         </div> 
      </header>
    
    </BrowserRouter>
    
      


    </>
  )
}

export default HeaderBar;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #DA2007;
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