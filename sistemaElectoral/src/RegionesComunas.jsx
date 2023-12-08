import axios from "axios";
import { useState, useEffect } from "react";


function RegionesComunas(params) {
    const [datos, setDatos] = useState([]);
    const [regiones, setRegiones] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                // realizar solicitud al servidor
                const response = await axios.get("http://localhost/regiones.php");

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

                // actualiza regiones
                setRegiones(uniqueRegs);
                console.log(regiones);

                

            } catch (error) {
                console.error("Hubo un error al conectar al servidor: ", error);
            };
        }

        fetchData();
        
        
        
    }, [])

    return <>
        <select>
            {regiones.map((element, index)=>(
                <option key={index}>{element}</option>
            ))}
        </select>
    </>

    
}

export default RegionesComunas;