import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Frios from '../views/Frios'
import Entradas from '../views/Entradas'
import Inicio from '../views/Inicio'
import Promociones from '../views/Promociones'
import Rolls from '../views/Rolls'
import Sopas from '../views/Sopas'
import NavigateApp from '../componentes/NavigateApp'
import Error from '../views/Error'
import Login from '../views/Login'

const RoutesApp = () => {
  return (
    <div>
        <NavigateApp />
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/entradas' element={<Entradas />} />
            <Route path='/frios' element={<Frios />} />
            <Route path='/promociones' element={<Promociones />} />
            <Route path='/rolls' element={<Rolls />} />
            <Route path='/sopas' element={<Sopas />} />
            <Route path='/login' element={<Login />} />
            <Route path='/*' element={<Error />} />
        </Routes>


    </div>
  )
}

export default RoutesApp