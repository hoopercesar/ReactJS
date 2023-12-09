import React, { useState } from 'react';
import styled from 'styled-components';
import RegionesComunas from './RegionesComunas';



function DatosPersonales() {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [dni, setDNI] = useState('');


    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
    };

    const handleDNIChange = (event) => {
        setDNI(event.target.value);
    };

    const handleSubmitDatosPersonales = (event) => {
        event.preventDefault();
        // Lógica para manejar los datos personales
        console.log('Datos personales:', { nombre, correo, dni });
    };

  return (
    <>
        <Label htmlFor="nombre">Nombre:</Label>
        <Input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <Label htmlFor="correo">Correo:</Label>
        <Input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />

        <Label htmlFor="dni">DNI:</Label>
        <Input type="text" id="dni" value={dni} onChange={(e) => setDNI(e.target.value)} required />

     

    </>
  );
 
}

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;



export default DatosPersonales;