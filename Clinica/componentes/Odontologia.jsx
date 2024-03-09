import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';
import React, { useState } from 'react';

const StyledDropdownItem = styled(Dropdown.Item)`
  /* Estilos personalizados para los elementos del desplegable */
  color: #FFFFF; /* Cambia el color del texto */
  background-color: #58B3D8; /* Cambia el color de fondo */
`;

const StyledDropdownToggle = styled(Dropdown.Toggle)`
  background-color: #58B3D8;
  color: #FFFFFF;
  border: none;
  &:focus, &:active {
    outline: none; /* Elimina el contorno al enfocar y al activar el botón */
    box-shadow: none; /* Elimina la sombra al enfocar y al activar el botón */
  }
`;


const Odontologia = () => {

  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };



  return (
    <>
    <Dropdown
     className="d-inline mx-2"     
     show={showMenu}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
    >

        <StyledDropdownToggle >
          Odontologia
        </StyledDropdownToggle>

        <Dropdown.Menu>
          <StyledDropdownItem href="#">Menu Item</StyledDropdownItem>
          <StyledDropdownItem href="#">Menu Item</StyledDropdownItem>
        </Dropdown.Menu>

      </Dropdown>


    </>
  )
}

export default Odontologia

