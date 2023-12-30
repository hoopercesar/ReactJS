import React, { useState, useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import DatosPersonales from './DatosPersonales';
import RegionesComunas from './RegionesComunas';
import CheckBoxes from './CheckBoxes';
import { useContexto } from './Contexto';

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
  const { datosFormulario, actualizarDatos } = useContexto();

  {/*const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    correo: '',
    rut: '',
    region: '',
    comuna: '',
    candidato: '',
    opcionesSeleccionadas: []
  })

  const actualizarDatos = (nombreCampo, valor) => {
    setDatosFormulario(prevDatos => ({
      ...prevDatos,
      [nombreCampo]: valor,
    }))
  } */}
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("url", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosFormulario),
      });

      if (response.ok) {
        console.log('Datos del formulario enviados correctamente');
      } else {
        console.error('Error al enviar datos del formulario');
      }
    } catch (error) {
      console.error('Error al procesar la solicitud', error);
    }
    // Lógica para manejar los datos del formulario
    console.log('Datos del formulario:', datosFormulario);
  };

  return (
    <>
    <GlobalStyle/>
    <FormularioWrapper>
      <form onSubmit={handleSubmit} autoComplete="off">

        <DatosPersonales actualizarDatos={actualizarDatos}/>

        <RegionesComunas />  

        <CheckBoxes actualizarDatos={actualizarDatos}/>        

        <Boton type="submit">Enviar</Boton>
      </form>
    </FormularioWrapper>
    
    </>
    
  );
};

export default Formulario;


