import React from 'react'
import { NavLink } from 'react-router-dom'


const NavigateApp = () => {
  return (
    <>
        <NavLink to='/'>Inicio</NavLink>
        {' '}
        <span>|</span> {' '}
        <NavLink to='/frios'>Platos Frios</NavLink>
        {' '}
        <span>|</span> {' '}
        <NavLink to='/entradas'>Entradas</NavLink>
        {' '}
        <span>|</span> {' '}
        <NavLink to='/sopas'>Sopas</NavLink>
        {' '}
        <span>|</span> {' '}
        <NavLink to='/rolls'>Rolls</NavLink>
        {' '}
        <span>|</span> {' '}
        <NavLink to='/promociones'>Promociones</NavLink>
        {' '}
        <span>|</span> {' '}
        <NavLink to='/login'>Ingresar</NavLink>


        
    </>
  )
}

export default NavigateApp