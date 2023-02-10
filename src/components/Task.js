import { useContext, useState } from "react";
import { taskContext } from "../App";
import elipsis from "../assets/icon-vertical-ellipsis.svg";

const Task = ({ task, index }) => {
  const { title, description, completed, id } = task;
  const { setCompleted, rearrangeTasks } = useContext(taskContext);

  const handleOnDrop = (e) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("text"));
    if (draggedIndex !== index) {
      rearrangeTasks(draggedIndex, index);
    }
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDrag = (e) => {
    e.dataTransfer.setData("text", index);
  };

  return (
    <li
      draggable
      className={`Task ${completed ? "completed" : ""}`}
      onDragStart={handleOnDrag}
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
    >
      <div className="task-content-container">
        <div
          onClick={() => {
            setCompleted(id);
          }}
          className="checkbox"
        />
        <p className="task-text">{title}</p>
      </div>

      <div>
        <img src={elipsis} alt="task menu" />
      </div>
    </li>
  );
};

export default Task;
