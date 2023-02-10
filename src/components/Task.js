const Task = ({title, description, completed, id}) => {
  return (
    <div className="Task" key={id}>
      <div></div>
      <p>{title}</p>
    </div>
  )
}

export default Task;