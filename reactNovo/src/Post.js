import { VscDebug } from "react-icons/vsc";

export const Posts = () => {
  return (
    <button
      onClick={(ev) => {
        alert("Enviando datos");
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => console.log(data[10].id))
          .catch((error) => console.log(error));
      }}
    >
      <VscDebug
        onClick={(ev) => {
          ev.preventDefault();
          console.log("RATA");
        }}
      />
      Enviar Datos
    </button>
  );
};
