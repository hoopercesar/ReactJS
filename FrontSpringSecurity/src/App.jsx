import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import CreateUsers from './components/CreateUsers'
import { NavLink, BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import NavBar from './components/NavBar';

function App() {

  return (
    <div>
      <NavBar />  
    </div>
    
  )
}

export default App

