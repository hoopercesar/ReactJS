import { useEffect, useState } from "react";
import axios from 'axios';

function Candidatos() {
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
             <select required>
                {candidatos.map((elemento) => (
                    <option key={elemento.id} >{elemento.candidato} </option>
                ))}
             </select>     
        </div>
      );
}

export default Candidatos;