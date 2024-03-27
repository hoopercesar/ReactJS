import React from 'react'

import { NavLink } from "react-router-dom";

const NavigateApp = () => {
  return (
    <>
        <NavLink to='/'>Home</NavLink>
        {" "}
        <span>|</span> {" "}
        <NavLink to='/about'>About</NavLink>
    </>
  )
}

export default NavigateApp