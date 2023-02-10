import { useContext, useState } from "react";
import { taskContext } from "../App";

const Task = ({ task, index }) => {
  const { title, description, completed, id } = task;
  const { setCompleted, rearrangeTasks, deleteTask } = useContext(taskContext);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleClick = (e) => {
    const arr = ["checkbox", "fa-trash-can"];
    if (!arr.some((el) => e.target.className.includes(el))) {
      setIsDescriptionOpen((prev) => !prev);
    }
  };

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

  const renderDescription = () => {
    return isDescriptionOpen ? (
      <>
        <p>{description}</p>
        <div className="description-btn">
          <i className="fa-solid fa-chevron-up" />
        </div>
      </>
    ) : (
      <div className="description-btn">
        <i className="fa-solid fa-chevron-down" />
      </div>
    );
  };

  return (
    <li
      draggable
      className={`Task ${completed ? "completed" : ""}`}
      onClick={handleClick}
      onDragStart={handleOnDrag}
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
    >
      <div className="task-top-part">
        <div
          onClick={() => {
            setCompleted(id);
          }}
          className="checkbox"
        />

        <p className="task-text">{title}</p>

        <div onClick={() => deleteTask(id)}>
          <i className="fa-regular fa-trash-can" />
        </div>
      </div>

      <div className="task-bottom-part">{renderDescription()}</div>
    </li>
  );
};

export default Task;
