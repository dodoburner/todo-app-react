import Task from "./Task";

const Tasks = ({ tasks, setCompleted }) => {
  return (
    <div>
      <div className="Tasks">
        {tasks.map((task) => {
          const { title, description, completed, id } = task;
          return (
            <Task
              task={task}
              setCompleted={setCompleted}
              key={id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Tasks;