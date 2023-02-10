import Task from "./Task";

const Tasks = ({ tasks, setCompleted }) => {
  return (
    <div>
      <ul className="Tasks">
        {tasks.map((task) => {
          return (
            <Task
              task={task}
              setCompleted={setCompleted}
              key={task.id}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Tasks;