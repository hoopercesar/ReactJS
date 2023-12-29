// App.js
import React from 'react';
import { AppProvider } from './AppContext';
import FormularioComponent from './FormularioComponent';

const App = () => {
  return (
    <AppProvider>
      <div>
        <h1>Formulario PreProjecto - Pruebas</h1>
        <FormularioComponent />
      </div>
    </AppProvider>
  );
};


export default App;