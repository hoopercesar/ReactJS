import { useState } from "react";
import styled from "styled-components";


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

    return (
        <>

        <CheckboxContainer>            
          <input
            type="checkbox"
            id="tv"
            value="TV"
            checked={comoNosConociste.includes('TV')}
            onChange={() => setComoNosConociste((prev) => (prev.includes('TV') ? prev.filter((item) => item !== 'TV') : [...prev, 'TV']))}
          />
          <CheckboxLabel htmlFor="tv">TV</CheckboxLabel>

          <input
            type="checkbox"
            id="rrss"
            value="RRSS"
            checked={comoNosConociste.includes('RRSS')}
            onChange={() => setComoNosConociste((prev) => (prev.includes('RRSS') ? prev.filter((item) => item !== 'RRSS') : [...prev, 'RRSS']))}
          />
          <CheckboxLabel htmlFor="rrss">RRSS</CheckboxLabel>

          <input
            type="checkbox"
            id="web"
            value="WEB"
            checked={comoNosConociste.includes('WEB')}
            onChange={() => setComoNosConociste((prev) => (prev.includes('WEB') ? prev.filter((item) => item !== 'WEB') : [...prev, 'WEB']))}
          />
          <CheckboxLabel htmlFor="web">WEB</CheckboxLabel>

          <input
            type="checkbox"
            id="amigos"
            value="Amigos"
            checked={comoNosConociste.includes('Amigos')}
            onChange={() => setComoNosConociste((prev) => (prev.includes('Amigos') ? prev.filter((item) => item !== 'Amigos') : [...prev, 'Amigos']))}
          />
          <CheckboxLabel htmlFor="amigos">Amigos</CheckboxLabel>
        </CheckboxContainer>
        
        </>
    )
}

export default CheckBoxes;