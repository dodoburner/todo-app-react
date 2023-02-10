import { useState } from 'react';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import './style/App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const setCompleted = (id) => {
    setTasks((prevTasks) => {
      const task = prevTasks.find((el) => el.id === id);
      task.completed = !task.completed;
      return [...prevTasks];
    })
  }

  return (
    <div className="App">
      <div>
        <TaskForm setTasks={setTasks} />
        <Tasks tasks={tasks} setCompleted={setCompleted} />
      </div>
    </div>
  );
}

export default App;
