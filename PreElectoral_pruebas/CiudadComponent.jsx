// CiudadComponent.js
import React, { useEffect, useState } from 'react';
import { useAppContext } from './AppContext';
import axios from 'axios';

// lista de las ciudades
// esta lista puede provenir de una base de datos
{/* algo */}
const cities = [
  'Los Ángeles',
  'New York',
  'Washington',
  'Wisconsin',
  'Texas',
  'Dallas',
  'Wyoming',
  'Iowa',
  'Kansas City',
  'San Francisco',
];



// 
const CiudadComponent = () => {

    const [ciudades, setCiudades] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                // realiza solicitud GET a base de datos
                const response = await axios.get("http://localhost:8080/regiones");

                if (!response) {
                    console.log("Problemas con la carga de datos desde la DB")
                } else {
                    console.log("Datos cargados correctamente desde DB")
                }
                // actualiza ciudades con datos carga
                setCiudades(response.data);
            } catch (error) {
                console.error("Error con el servidor: ", error);
            }

        }
        fetchData();
    }, [])

    // usa función updateFormData de AppContext para actualizar
    // la ciudad, según selección de usuario
  const { updateFormData } = useAppContext();

  // controla la seleccion que se haga en ciudad
  // y actualiza el valor de la ciudad seleccionada por usuario
  const handleCiudadChange = (e) => {
    updateFormData('ciudad', e.target.value);
  };

  return (
    <div>
      <label htmlFor="ciudad">Ciudad:</label>
      <select id="ciudad" name="ciudad" onChange={handleCiudadChange}>
        <option value="">Selecciona una ciudad</option>
        {ciudades.map((city, index) => (
          <option key={index} value={city.comuna}>
            {city.comuna}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CiudadComponent;
