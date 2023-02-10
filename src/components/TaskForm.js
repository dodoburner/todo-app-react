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
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">
          Title
        </label>
        <input
          required
          value={title}
          onChange={((e) => setTitle(e.target.value))}
          type="text"
          name="title"
        />
      </div>
      <div>
        <label htmlFor="description">
          Description
        </label>
        <textarea
          value={description}
          onChange={((e) => setDescription(e.target.value))}
          name="description"
        />
      </div>
      <button type="submit" className="submit-btn">Create Task</button>
    </form>
  )
}

export default TaskForm;