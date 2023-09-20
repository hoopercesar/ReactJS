import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Servicios from "./Servicios";
import Especialidades from "./Especialidades";
import Tratamientos from "./Tratamientos";
import Header from "./Header";
import styled from "styled-components";
import Post from "./Post";
import Error404 from "./Error404";
import Neurologia from "./Neurologia";
import NeuralDisease from "./NeuralDisease";
import { ContextoTema } from "./contextos/contextoTema";

function App() {
  const { tema } = useContext(ContextoTema);

  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main tema={tema}>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Servicios />} />

            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/post/:id" element={<Post />} />

            <Route path="/tratamientos" element={<Tratamientos />} />

            <Route path="/neurologia" element={<Neurologia />} />
            <Route path="/neurologia/:id" element={<NeuralDisease />} />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
}

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.main`
  font-size: ${(props) => (props.tema ? props.tema.fuente + "px" : "10px")};
  text-align: ${(props) => (props.tema ? props.tema.alineado : "right")};
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App;
