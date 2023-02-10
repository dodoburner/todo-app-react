import { useState } from 'react';
import Task from './components/Task';
import './style/App.css';

class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.completed = false
  }
}

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <div className="Tasks">
        {tasks.map((task) => {
          const { title, description, completed } = task;
          return (
            <Task
              title={title}
              description={description}
              completed={completed}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
