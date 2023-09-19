import posts from "./data/post";
import { useParams, Navigate } from "react-router-dom";

function Post() {
  // extrae directamente el id con el hooks useParams
  // Navigate redirecciona hacia la pagina a otra dirección
  const { id } = useParams();

  console.log(useParams());
  return (
    <>
      {posts[id - 1] ? (
        <div>
          <h1>{posts[id - 1].titulo} </h1>
          <p>{posts[id - 1].texto} </p>
        </div>
      ) : (
        // en caso que no exista la info anterior se redirecciona a la página (p.ej) de inicio "/"
        <Navigate replace to="/" />
      )}
    </>
  );
}

export default Post;
