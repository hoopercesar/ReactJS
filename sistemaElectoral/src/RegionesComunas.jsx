import axios from "axios";
import { useState, useEffect } from "react";
import Candidatos from "./Candidatos";


function RegionesComunas() {
    const [datos, setDatos] = useState([]);
    const [regiones, setRegiones] = useState([]);
    const [comunasPorRegion, setComunasPorRegion] = useState({});
    const [regionSeleccionada, setRegionSeleccionada] = useState('');

    

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
    

    const handleRegionChange = (ev) => {
        const selectedRegion = ev.target.value;
        setRegionSeleccionada(selectedRegion);
    }

    return <>
        <select 
            onChange={handleRegionChange} 
            value={regionSeleccionada}>
            <option value="">Selecciona una Región</option>
            {regiones.map((element, index)=>(
                <option key={index}>{element}</option>
            ))}
        </select>
        <select>
            <option value="">Selecciona una Comuna</option>
            {/* la siguiente línea contiene un condicional. si comunasPorRegion[regionSeleccionada] es true
            entonces se ejecuta el map, si es false no se ejecuta el map */}
            {comunasPorRegion[regionSeleccionada] && comunasPorRegion[regionSeleccionada].map((comuna, index) => (                
            <option key={index}>{comuna}</option>
            ))}
        </select>
        <Candidatos region={regionSeleccionada} />
    </>
    

    
}

export default RegionesComunas;