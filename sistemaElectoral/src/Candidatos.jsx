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
                const response = await axios.get('http://localhost/candidatos.php');
                
                if (!response) {
                    console.log("No hubo descarga de los datos");
                } else {
                    console.log("Datos cargados", response.data);
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
        <div>
            
            {error && <p>{error}</p>}
             <Seleccion>
                <option value="">Selecciona un Candidato</option>
                {candidatos
                .filter(elemento => elemento.region === region)
                .map((elemento, index) => (
                    <option key={index}>{elemento.candidato} </option>
                ))}
             </Seleccion>     
        </div>
      );
}

const Seleccion = styled.select`
    width: calc(100% - 10px); /* Ajusta el ancho para considerar el relleno */
    padding: 5px;
    box-sizing: border-box;
    margin-bottom: 10px;
    border-radius: 3px;
`;

export default Candidatos;