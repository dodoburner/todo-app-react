const STATUSES = ["All", "Active", "Completed"];

const TasksFooter = ({ tasks, status, setStatus, clearCompleted }) => {
  const remainingTasks = tasks.filter((el) => !el.completed);
  const length = remainingTasks.length;

  return (
    <div className="tasks-footer">
      <div>
        {length} item{length === 1 ? "" : "s"} left
      </div>

      <ul>
        {STATUSES.map((el) => {
          return (
            <li
              key={el}
              className={`footer-btn ${status === el ? "active" : ""}`}
              onClick={() => setStatus(el)}
            >
              {el}
            </li>
          );
        })}
      </ul>

      <div className="footer-btn" onClick={clearCompleted}>
        Clear Completed
      </div>
    </div>
  );
};

export default TasksFooter;
