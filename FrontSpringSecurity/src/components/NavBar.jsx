import React from 'react';
import { NavLink, Link, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Inicio from './Inicio';
import Productos from './Productos';
import Login from './Login';
import Blog from './Blog';
import Usuarios from './Usuarios';
import CreateUsers from './CreateUsers';
import ProtectedRoutes from '../utils/ProtectedRoutes';

const NavBar = () => {
  const activacion = false;
  return (
   
    <>
       <Nav>
            <NavLink to="/" >Inicio</NavLink>
            <NavLink to="/productos" >Productos</NavLink>
            <NavLink to="/usuarios" >Usuarios</NavLink>
            <NavLink to="/blog" >Blog</NavLink>
            <NavLink to="/login">Login</NavLink>
        </Nav>

        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/blog" element={<Blog />} />

            <Route element={<ProtectedRoutes canActivate={!activacion}/>} >
              <Route path="/login" element={<Login />} />
            </Route>
            
            <Route element={<ProtectedRoutes canActivate={activacion}/>}>
              <Route path="/createusers" element={<CreateUsers />} />
            </Route>
            
        </Routes>

    </>
 


  );
}

const Nav = styled.nav`
  background-color: #333;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-top: 0;

  a {
    color: #fff;
    text-decoration: none;
    padding: 5px 40px;
    border-radius: 5px;
  }

  .active {
    background-color: #555;
  }
`;

export default NavBar;
