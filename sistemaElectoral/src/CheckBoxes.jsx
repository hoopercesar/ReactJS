import { useEffect, useState } from "react";
import styled from "styled-components";
import { useContexto } from "./Contexto";


const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckboxLabel = styled.label`
  margin-left: 5px;
`;

function CheckBoxes() {
    const [comoNosConociste, setComoNosConociste] = useState([]);
    const {actualizarDatos} = useContexto();

    //console.log(comoNosConociste)

    const handleCheckBoxChange = (option) => {
      setComoNosConociste((prev) => prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]);
      
    }
    
    useEffect(() => {
      actualizarDatos('opcionesSeleccionadas', comoNosConociste.join('-'))
    }, [comoNosConociste])

    return (
        <>

        <CheckboxContainer>            
          <input
            type="checkbox"
            id="tv"
            value="TV"
            checked={comoNosConociste.includes('TV')}
            onChange={() => handleCheckBoxChange('TV')}
          />
          <CheckboxLabel htmlFor="tv">TV</CheckboxLabel>

          <input
            type="checkbox"
            id="rrss"
            value="RRSS"
            checked={comoNosConociste.includes('RRSS')}
            onChange={() => handleCheckBoxChange('RRSS')}
          />
          <CheckboxLabel htmlFor="rrss">RRSS</CheckboxLabel>

          <input
            type="checkbox"
            id="web"
            value="WEB"
            checked={comoNosConociste.includes('WEB')}
            onChange={() => handleCheckBoxChange('WEB')}
          />
          <CheckboxLabel htmlFor="web">WEB</CheckboxLabel>

          <input
            type="checkbox"
            id="amigos"
            value="Amigos"
            checked={comoNosConociste.includes('Amigos')}
            onChange={() => handleCheckBoxChange('Amigos')}
          />
          <CheckboxLabel htmlFor="amigos">Amigos</CheckboxLabel>
        </CheckboxContainer>
        
        </>
    )
}

export default CheckBoxes;