import { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";

function Candidatos({ region }) {
    const [candidatos, setCandidatos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Realizar solicitud Get a servidor php
                const response = await axios.get('http://localhost:8080/candidatos');
                
                if (!response) {
                    console.log("No hubo descarga de los datos");
                } else {
                    console.log("Datos cargados correctamente");
                }

                // actualizar candidatos
                setCandidatos(response.data);
            } catch (error) {
                console.error("Error al obtener datos del servidor: ", error);
                setError("Hubo un problema al obtener datos del servidor")
            };
        }

        fetchData();
    }, []);
   
    return (
        <>

            
            {error && <p>{error}</p>}

            <Label htmlFor="candidato">Selecciona Candidato:</Label>
            <Select>
            <option value="">Selecciona un candidato</option>
            {candidatos
                .filter(elemento => elemento.region === region)
                .map((elemento, index) => (
                    <option key={index}>{elemento.candidato} </option>
                ))}
            
            </Select>
 
        </>
      );
}

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;


const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

export default Candidatos;