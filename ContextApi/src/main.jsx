import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProveedorTema } from "./contextos/contextoTema.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProveedorTema>
      <App />
    </ProveedorTema>
  </React.StrictMode>
);
