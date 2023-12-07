import { useEffect, useState } from "react";
import axios from 'axios';

function Candidatos() {
    const [candidatos, setCandidatos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Realizar solicitud Get a servidor php
                const response = await axios.get('http://localhost:3306/candidatos.php')
                
                if (!response) {
                    console.log("No hubo descarga de los datos");
                }

                // actualizar candidatos
                setCandidatos(response.data);
            } catch (error) {
                console.error("Error al obtener datos del servidor: ", error);
                setError("Hubo un problema al obtener datos del servidor")
            };
        }
    }, []);

    return (<> 
        <p>Estos son los candidatos</p>
        <ul>
            {candidatos.map((candidato, index)=>{
                console.log("di algo");
                <li key={index}>{candidato.region} </li>
            })}
        </ul>
     </>);

}

export default Candidatos;