import Task from "./Task";

const Tasks = ({ tasks, status }) => {
  const renderTasks = () => {
    const mapped = tasks.map((task, index) => {
      return <Task task={task} index={index} key={task.id} />;
    });

    if (status === "All") {
      return mapped;
    }

    if (status === "Active") {
      return mapped.filter((el) => !el.props.task.completed);
    }

    return mapped.filter((el) => el.props.task.completed);
  };

  return <ul className="Tasks">{renderTasks()}</ul>;
};

export default Tasks;
