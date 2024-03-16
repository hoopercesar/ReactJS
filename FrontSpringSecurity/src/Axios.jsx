import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axios = () => {

  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Configura las credenciales de autenticación
        const username = 'cesar';
        const password = '12334';
        
        // Codifica las credenciales en base64
        const base64Credentials = btoa(`${username}:${password}`);

        // Configura el encabezado de autorización
        const headers = {
          'Authorization': `Basic ${base64Credentials}`
        };

        // Realiza la solicitud HTTP con Axios
        const response = await axios.get('http://localhost:8081/hello', { headers });

        // Guarda los datos en el estado del componente
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <h2>Respuesta de la API:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Axios