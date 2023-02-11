import { createContext, useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import "./style/App.css";

export const taskContext = createContext(null);

function App() {
  const [tasks, setTasks] = useState([]);

  const setCompleted = (id) => {
    setTasks((prevTasks) => {
      const task = prevTasks.find((el) => el.id === id);
      task.completed = !task.completed;
      return [...prevTasks];
    });
  };

  const rearrangeTasks = (draggedIndex, dropIndex) => {
    setTasks((prevTasks) => {
      prevTasks.splice(dropIndex, 0, prevTasks.splice(draggedIndex, 1)[0]);
      return [...prevTasks];
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => [...prevTasks.filter((el) => el.id !== id)]);
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
