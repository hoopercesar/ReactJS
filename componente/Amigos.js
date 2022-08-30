import React from "react";

const Amigos = () => {
  const amigos = ["fernanda", "carlos", "camila", "fresia"];
  return (
    <ul>
      {amigos.map((amigo, index) => {
        return <li key={index}>{amigo} </li>;
      })}
    </ul>
  );
};

export default Amigos;
