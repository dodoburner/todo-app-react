import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.completed = false;
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name="title"
        className="title-input"
        placeholder="Title"
      />

      <ReactTextareaAutosize
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        name="description"
        className="description-input"
        placeholder="Description"
      />

      <button type="submit" className="submit-btn">
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
