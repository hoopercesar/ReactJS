// TelefonoComponent.js
import React from 'react';
import { useAppContext } from './AppContext';

const TelefonoComponent = () => {
  const { updateFormData } = useAppContext();

  const handleTelefonoChange = (e) => {
    updateFormData('telefono', e.target.value);
  };

  return (
    <div>
      <label htmlFor="telefono">Teléfono:</label>
      <input
        type="text"
        id="telefono"
        name="telefono"
        onChange={handleTelefonoChange}
      />
    </div>
  );
};

export default TelefonoComponent;
