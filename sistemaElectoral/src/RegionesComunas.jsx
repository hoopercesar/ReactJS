import axios from "axios";
import { useState } from "react";

function RegionesComunas(params) {
    const [datos, setDatos] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                // realizar solicitud al servidor
                const response = await axios.get("http://localhost/regiones.php");

                // comprueba que se realizó la descarga de datos
                if (!response) {
                    console.log("No hubo descarga de datos");
                } else {
                    console.log("Datos descargados exitosamente desde DB");
                }

                // actualiza la lista de datos
                setDatos(responde.data);

            } catch (error) {
                console.error("Hubo un error al conectar al servidor: ", error)

            };
        }

        fetchData();

    }, [])

    return <></>

    
}

export default RegionesComunas;