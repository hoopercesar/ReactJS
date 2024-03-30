import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavigateApp from '../componentes/NavigateApp'
import HomeScreen from '../views/HomeScreen'
import AboutScreen from '../views/AboutScreen'
import ErrorScreen from '../views/ErrorScreen'


const RoutesApp = () => {
  return (
    <div>
        <NavigateApp />
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/about' element={<AboutScreen />} /> {" "}
            <Route path='*' element={<ErrorScreen />} />  
        </Routes>

    </div>
  )
}

export default RoutesApp