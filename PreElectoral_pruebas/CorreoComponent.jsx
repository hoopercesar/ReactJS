// CorreoComponent.js
import React from 'react';
import { useAppContext } from './AppContext';

const CorreoComponent = () => {
  const { updateFormData } = useAppContext();

  const handleCorreoChange = (e) => {
    updateFormData('correo', e.target.value);
  };

  return (
    <div>
      <label htmlFor="correo">Correo:</label>
      <input type="text" id="correo" name="correo" onChange={handleCorreoChange} />
    </div>
  );
};

export default CorreoComponent;
