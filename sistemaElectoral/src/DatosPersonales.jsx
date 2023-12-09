import React, { useState } from 'react';
import styled from 'styled-components';
import VerificaRUT from './validaRut';


function DatosPersonales() {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [rut, setRUT] = useState('');
    const [rutValido, setRutValido] = useState(false);
    const [interactuoConRUT, setInteractuoConRUT] = useState(false);

    const validaRut = (rut) => {
        const rutNew = new VerificaRUT(rut);
        if (rutNew.valida()) return true;
    }


    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
    };

    const handleRUTChange = (event) => {
        let nuevoRUT = event.target.value
        setRUT(nuevoRUT);

        // Validar el RUT y actualizar el estado
        setRutValido(validaRut(nuevoRUT));

        // Indicar que el usuario ha interactuado con el campo de RUT
        setInteractuoConRUT(true);

    };

    const handleSubmitDatosPersonales = (event) => {
        event.preventDefault();
        // Lógica para manejar los datos personales
        console.log('Datos personales:', { nombre, correo, rut });
    };

  return (
    <>
        <Label htmlFor="nombre">Nombre:</Label>
        <Input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <Label htmlFor="correo">Correo:</Label>
        <Input 
          type="email" 
          id="correo" 
          value={correo} 
          onChange={(e) => setCorreo(e.target.value)} 
          required 
        />
        

        <Label htmlFor="dni">RUT:</Label>
        <Input 
          type="text" 
          id="rut" 
          value={rut} 
          onChange={(e) => handleRUTChange(e)} 
          className={interactuoConRUT && !rutValido ? 'rut-invalido' : ''}
          required 
        />
        {interactuoConRUT && !rutValido && (<MensajeError>Ingrese un RUT válido</MensajeError>)}     

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

const MensajeError = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;



export default DatosPersonales;