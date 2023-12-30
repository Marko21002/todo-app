import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTodos([...todos, newTask]);
      setNewTask("");
    }
  };

  const removeTodo = (index) => {
    const array = [...todos];
    array.splice(index, 1);
    setTodos(array);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 border p-2 rounded"
            placeholder="Enter a new task"
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        <ul className="list-none p-0">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between border p-2 rounded mb-2"
            >
              <span>{todo}</span>
              <button
                onClick={() => removeTodo(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
