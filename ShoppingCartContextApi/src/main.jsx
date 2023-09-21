import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProveedorContexto } from "./Contextos/Contexto.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProveedorContexto>
      <App />
    </ProveedorContexto>
  </React.StrictMode>
);
