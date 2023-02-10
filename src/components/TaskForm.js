import { useState } from "react"

class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.completed = false
    this.id = crypto.randomUUID();
  }
}

const TaskForm = ({ setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = new Todo(title, description);
    setTasks((prev) => [...prev, todo]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={((e) => setTitle(e.target.value))}
        type="text"
      />
      <input
        value={description}
        onChange={((e) => setDescription(e.target.value))}
        type="text"
      />
      <button type="submit">+</button>
    </form>
  )
}

export default TaskForm;