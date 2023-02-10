import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div>
      <ul className="Tasks">
        {tasks.map((task, index) => {
          return (
            <Task
              task={task}
              index={index}
              key={task.id}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Tasks;