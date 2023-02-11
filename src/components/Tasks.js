import Task from "./Task";

const Tasks = ({ tasks, status }) => {
  const renderTasks = () => {
    if (status === "All") {
      return tasks.map((task, index) => {
        return <Task task={task} index={index} key={task.id} />;
      });
    }

    if (status === "Active") {
      const filtered = tasks.filter((el) => !el.completed);
      return filtered.map((task, index) => {
        return <Task task={task} index={index} key={task.id} />;
      });
    }

    const filtered = tasks.filter((el) => el.completed);
    return filtered.map((task, index) => {
      return <Task task={task} index={index} key={task.id} />;
    });
  };

  return (
    <div>
      <ul className="Tasks">{renderTasks()}</ul>
    </div>
  );
};

export default Tasks;
