import posts from "./data/post";
import { NavLink } from "react-router-dom";

function Especialidades() {
  return (
    <div>
      <h2>Especialidades</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <NavLink to={`/post/${post.id}`}> {post.titulo} </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Especialidades;
