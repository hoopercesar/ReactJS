import TopBar from "./bars/TopBar"
import HeaderBar from "./bars/HeaderBar";
import Home from "./componentes/Home";

import { NavLink, BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
   <>

    <TopBar />
    <HeaderBar />
    <Home />

   </>
    

  )
}

export default App