import TaskList from "./TaskList.jsx";

const App = () => {
  return (
    <div>
      <button
        onClick={() => {
          fetch("http://localhost:5005")
            .then((response) => response.json())
            .then((data) => console.log(data));
          // .catch((error) => console.log(error));
        }}
      >
        Hell
      </button>
      <TaskList />
    </div>
  );
};

export default App;
