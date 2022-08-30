import React, { useState } from "react";

const FormularioInicioSesion = () => {
  const [usuario, cambiarUsuario] = useState("");
  const [password, cambiarPassword] = useState("");

  // esta parte del código es una manera de ingresar y recibir el password.
  const onChangePassword = (ev) => {
    //console.log(ev);
    cambiarPassword(ev.target.value);
  };

  return (
    <form action="">
      <p>Usuario: {usuario} </p>
      <p>Contraseña: {password} </p>
      <div>
        <label htmlFor="usuario">Usuario</label>
        {/* 
          lo que viene a continuación es un evento de formulario. el evento
          onChange se activa cuando cambia una variable.
          Aquí utilizaremos otra forma de recibir y guardar la información
          del input. Sólo para comparar los dos métodos, el del usuario y el del password. 
        */}
        <input
          type="text"
          name="usuario"
          id="usuario"
          value={usuario}
          onChange={(ev) => {
            cambiarUsuario(ev.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <button type="submit">Iniciar Sesion</button>
    </form>
  );
};

export default FormularioInicioSesion;
