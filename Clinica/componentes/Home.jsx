import React from 'react'
import '/home/cesar/nodeprojects/clinica/src/style.css';

const Home = () => {
  return (
    <section id="home" className="d-flex align-items-center">
    <div className="container">
      <h1>Bienvenido a Clinica</h1>
      <h1> Cuidados de Salud</h1>
      <h2>Somos un equipo de Médicos Especializados</h2>
      <h2> "Your devotion and care bring healing, comfort and hope."</h2>
      <a href="#about" className="btn-get-started scrollto">Más de Nosotros</a>
    </div>
   </section>
  )
}

export default Home;