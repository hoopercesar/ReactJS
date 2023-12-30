// CiudadComponent.js
import React, { useEffect, useState } from 'react';
import { useAppContext } from './AppContext';
import axios from 'axios';

// lista de las ciudades
// esta lista puede provenir de una base de datos
{/* 
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
]; */}


// 
const CiudadComponent = () => {

    const [ciudades, setCiudades] = useState([]);
    const [regiones, setRegiones] = useState([]);
    const [regionSeleccionada, setRegionSeleccionada] = useState([]);
    const [comunas, setComunas] = useState([]);

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

                // crea una lista de regiones no duplicadas
                const regionesUnicas = [... new Set(response.data.map(element => element.region))]
                // actualiza lista regiones (con regiones únicas)                
                setRegiones(regionesUnicas);

                // creo objeto que mapea regiones con la lista de todas sus comunas
                // para que el siguiente objeto salga fuera del useEffect debe definirse antes
                // usando el useState y actualizarse debidamente. Si no se define antes, si simplemente
                // se crea esta variable dentro del useEffect, luego no se puede acceder a sus valores
                // fuera del hook useEffect. 
                const comunasPorRegion = {};
                regiones.forEach(region => {
                    const comunas = response.data
                    .filter(element => element.region === region)
                    .map(element => element.comuna);
                    comunasPorRegion[region] = comunas;
                })
                setComunas(comunasPorRegion)
                // console.log(comunasPorRegion);


            } catch (error) {
                console.error("Error con el servidor: ", error);
            }

        }
        fetchData();
    }, [regionSeleccionada])

    // usa función updateFormData de AppContext para actualizar
    // la ciudad, según selección de usuario
  const { updateFormData } = useAppContext();

  // controla la seleccion que se haga en ciudad
  // y actualiza el valor de la ciudad seleccionada por usuario
  const handleCiudadChange = (e) => {
    updateFormData('ciudad', e.target.value);
  };

  const handleRegionChange = (ev) => {
    const selectedRegion = ev.target.value;
    setRegionSeleccionada(selectedRegion);
    updateFormData('region', selectedRegion)
  }

  return (
    <div>
        {/*selección de región*/}
      <label htmlFor="ciudad">Región:</label>
      <select id="ciudad" name="ciudad" onChange={handleRegionChange}>
        <option value="">Selecciona una Región</option>
        {regiones.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
      <br/>

        {/*selección de comuna.
        OJO: para */}
      <label htmlFor="ciudad">Ciudad:</label>
      <select id="ciudad" name="ciudad" onChange={handleCiudadChange}>
        <option value="">Selecciona una ciudad</option>
        {comunas[regionSeleccionada] && comunas[regionSeleccionada].map((comuna, index) => (
          <option key={index} value={comuna}>
            {comuna}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CiudadComponent;
