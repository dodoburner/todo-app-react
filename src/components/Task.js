import { useState } from "react";
import elipsis from "../assets/icon-vertical-ellipsis.svg";

const Task = ({ task, setCompleted }) => {
  const { title, description, completed, id } = task;
  const [isHovering, setIsHovering] = useState(false);
  return (
    <li
      className={`Task ${completed ? "completed" : ""}`}>
      <div className="task-content-container">
        <div
          onClick={() => { setCompleted(id) }}
          className="checkbox"
        />
        <p
          className="task-text"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {isHovering ? description : title}
        </p>
      </div>

      <div>
        <img src={elipsis} alt="task menu" />
      </div>
    </li>
  )
}

export default Task;