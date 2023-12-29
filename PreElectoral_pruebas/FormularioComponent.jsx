// FormularioComponent.js
import React from 'react';
import TelefonoComponent from './TelefonoComponent';
import CorreoComponent from './CorreoComponent';
import CiudadComponent from './CiudadComponent';
import { useAppContext } from './AppContext';

const FormularioComponent = () => {
  const { formData } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos recopilados:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TelefonoComponent />
      <CorreoComponent />
      <CiudadComponent />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioComponent;
