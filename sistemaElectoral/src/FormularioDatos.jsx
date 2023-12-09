import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import DatosPersonales from './DatosPersonales';
import RegionesComunas from './RegionesComunas';
import CheckBoxes from './CheckBoxes';

// Estilo global para el fondo negro en el área fuera del formulario
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #000; /* Fondo negro */
    font-family: 'Arial', sans-serif;
  }
`;

const FormularioWrapper = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #d3d3d3;
`;

const Boton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Formulario = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar los datos del formulario
    console.log('Datos del formulario:', { nombre, correo, dni, region, comuna, candidato, comoNosConociste });
  };

  return (
    <>
    <GlobalStyle/>
    <FormularioWrapper>
      <form onSubmit={handleSubmit}>

        <DatosPersonales/>

        <RegionesComunas/>  

        <CheckBoxes/>        

        <Boton type="submit">Enviar</Boton>
      </form>
    </FormularioWrapper>
    
    </>
    
  );
};

export default Formulario;


