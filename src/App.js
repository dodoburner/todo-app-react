import { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import './style/App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <TaskForm setTasks={setTasks} />
  
      <div className="Tasks">
        {tasks.map((task) => {
          const { title, description, completed, id } = task;
          return (
            <Task
              title={title}
              description={description}
              completed={completed}
              id={id}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
