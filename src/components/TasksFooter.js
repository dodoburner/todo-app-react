const TasksFooter = ({ tasks }) => {
  const remainingTasks = tasks.filter((el) => !el.completed);
  return (
    <div>
      <div>{remainingTasks.length} items remaining</div>

      <div>All</div>

      <div>Active</div>

      <div>Completed</div>

      <div>Clear Completed</div>
    </div>
  );
};
