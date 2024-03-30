import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavigateApp = () => {

    const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user')) || null;
  

  const handleButton = () => {

    localStorage.removeItem('user');
    console.log('Usuario ha cerrado sesión');
    navigate('/login', {replace:true});
}
  

  return (
    <>
      <NavLink to='/'>Home</NavLink>
      {' '}
      <span>|</span> {' '}
      <NavLink to='/about'>About</NavLink>
      {' '}
      <span>|</span> {' '}
      <button onClick={handleButton}>Logout</button>
    </>
  );
};

export default NavigateApp;
