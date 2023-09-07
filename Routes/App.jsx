import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>Clinica de Salud</h1>
          <nav>
            <NavLink to="/">Servicios</NavLink>
            <NavLink to="/especialidades">Especialidades</NavLink>
            <NavLink to="/tratamientos">Tratamientos</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h2>Servicios</h2>
                  <p>Aquí encontrará todos nuestros servicios</p>
                </div>
              }
            />

            <Route
              path="/especialidades"
              element={
                <div>
                  <h2>Especialidades</h2>
                  <ul>
                    <li>Broncopulmonar</li>
                    <li>Dermatología</li>
                    <li>Radiología</li>
                  </ul>
                </div>
              }
            />

            <Route
              path="/tratamientos"
              element={
                <div>
                  <h2>Tratamientos</h2>
                  <p>Estos son los tratamientos</p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
