import { createContext, useState } from "react";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import "./style/App.css";

export const taskContext = createContext(null);

function App() {
  const [tasks, setTasks] = useState([
    {
      title: "volim taskove",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      id: 1,
      completed: false,
    },
    {
      title: "jooj meni",
      description:
        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      id: 2,
      completed: false,
    },
    {
      title: "aaaaaa",
      description:
        "it to make a type specimen book. It has survived not only five centuries",
      id: 3,
      completed: false,
    },
  ]);

  const setCompleted = (id) => {
    setTasks((prevTasks) => {
      const task = prevTasks.find((el) => el.id === id);
      task.completed = !task.completed;
      return [...prevTasks];
    });
  };

  const rearrangeTasks = (draggedIndex, index) => {
    setTasks((prevTasks) => {
      prevTasks.splice(index, 0, prevTasks.splice(draggedIndex, 1)[0]);
      return [...prevTasks];
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => [...prevTasks.filter((el) => el.id !== id)]);
  };

  return (
    <div className="App">
      <div>
        <TaskForm setTasks={setTasks} />
        <taskContext.Provider
          value={{ setCompleted, rearrangeTasks, deleteTask }}
        >
          <Tasks tasks={tasks} />
        </taskContext.Provider>
      </div>
    </div>
  );
}

export default App;
