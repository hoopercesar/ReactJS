import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Posts } from "./Post";
// # al crear la función  en Hola.js se puse

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "pepe",
    image: "https://robohash.org/pepe?set=set2",
  },
  {
    id: 2,
    name: "yoyo",
    image: "https://robohash.org/yoyo?set=set2",
  },
];

root.render(
  <>
    <Posts />
    {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name} </h1>
          <img src={user.image} />
        </div>
      );
    })}
    {/* <App /> */}
  </>
);
