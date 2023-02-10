import Task from "./Task";

const Tasks = ({ tasks, setCompleted }) => {
  return (
    <div>
      <div className="Tasks">
        {tasks.map((task) => {
          const { title, description, completed, id } = task;
          return (
            <Task
              title={title}
              description={description}
              completed={completed}
              setCompleted={setCompleted}
              id={id}
              key={id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Tasks;