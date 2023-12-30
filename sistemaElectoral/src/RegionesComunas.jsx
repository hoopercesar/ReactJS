import axios from "axios";
import { useState, useEffect, useContext } from "react";

import styled from "styled-components";
import { useContexto } from './Contexto';

// definición del tag Selección
const Seleccion = styled.select`
width: calc(70% - 10px); /* Ajusta el ancho para considerar el relleno */
padding: 5px;
box-sizing: border-box;
margin-bottom: 10px;
border-radius: 3px;
`;    

const FormularioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

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

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

function RegionesComunas() {
    const [datos, setDatos] = useState([]);
    const [regiones, setRegiones] = useState([]);
    const [comunasPorRegion, setComunasPorRegion] = useState({});
    const [regionSeleccionada, setRegionSeleccionada] = useState('');
   

    useEffect(() => {
        const fetchData = async () => {
            try {
                // realizar solicitud al servidor con SpringBoot!!
                const response = await axios.get("http://localhost:8080/regiones");

                // comprueba que se realizó la carga de datos
                if (!response) {
                    console.log("No hubo descarga de datos");
                } else {
                    console.log("Datos descargados exitosamente desde DB");
                }

                // actualiza la lista de datos
                setDatos(response.data);

                // crea una lista sin regiones duplicadas
                const uniqueRegs = [... new Set(response.data.map(element => element.region))];            

                // actualiza regiones. 
                setRegiones(uniqueRegs);

                // objeto que mapea regiones y sus comunas
                const comunasPorRegionMap = {};
                regiones.forEach(region => {
                    const comunas = response.data
                    .filter(element => element.region === region)
                    .map(element => element.comuna);
                    comunasPorRegionMap[region] = comunas;                           
                })                

                // actualiza comunasPorRegion
                setComunasPorRegion(comunasPorRegionMap);                               

            } catch (error) {
                console.error("Hubo un error al conectar al servidor: ", error);
            };
        }

        fetchData();                    
        
    }, [regionSeleccionada])
    // usamos useEffect(() => {}, [regionSeleccionada]) --> 
    // ésto significa que el useEffect se va a ejecutar cada vez que cambie la región seleccionada
    
    // usa la función global actualizarDatos para actualizar
    // las selecciones e información que ingrese el usuario
    const { actualizarDatos } = useContexto();

    // controla la seleccion que se haga en comuna y actualiza el valor 
    // de la ciudad seleccionada por el usuario
    const handleComunaChange = (ev) => {
        actualizarDatos('comuna', ev.target.value);
    }
    
    // controla selección de región y actualiza el valor de región seleccionada por usuario
    const handleRegionChange = async (ev) => {
        const selectedRegion = ev.target.value;
        setRegionSeleccionada(selectedRegion); 
        actualizarDatos('region', selectedRegion)
    }

    return <>

        {/*Selección de region*/}
        <Label htmlFor="region">Selecciona Región:</Label>
        <Select value={regionSeleccionada} onChange={handleRegionChange} required>
          <option value="">Selecciona una región</option>
          {regiones.map((element, index)=>(
                <option key={index}>{element}</option>
            ))}
        </Select>

        {/*Selección de Comuna */}
        <Label htmlFor="comuna">Selecciona Comuna:</Label>
        <Select required onChange={handleComunaChange}>
          <option value="">Selecciona una comuna</option>
          {comunasPorRegion[regionSeleccionada] && comunasPorRegion[regionSeleccionada].map((comuna, index) => (                
                <option key={index}>{comuna}</option>
                ))}
        </Select>

        
        {/*Componente candidatos con props region */}
        {/*<Candidatos region={regionSeleccionada} /> */}        

    </>    
}

export default RegionesComunas;

