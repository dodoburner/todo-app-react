const Task = ({ task, setCompleted }) => {
  const { title, description, completed, id } = task;
  return (
    <div className={`Task ${completed ? "completed" : ""}`}>
      <div
        onClick={() => { setCompleted(id) }}
        className="checkbox"
      />
      <p>{title}</p>
    </div>
  )
}

export default Task;