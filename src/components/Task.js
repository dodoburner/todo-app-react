const Task = ({ title, description, completed, id, setCompleted }) => {
  console.log(completed)
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