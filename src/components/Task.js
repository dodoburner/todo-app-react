import { useContext, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { taskContext } from "../App";

const Task = ({ task, index }) => {
  const { title, description, completed, id } = task;
  const { setCompleted, rearrangeTasks, deleteTask, updateTask } =
    useContext(taskContext);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleArrowClick = (e) => {
    if (e.target.className !== "description-input") {
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

  const handleTitleUpdate = (e) => {
    const trimmed = e.target.value.trim();
    if (trimmed) {
      updateTask(id, trimmed, description);
    }
  };

  const handleDescriptionUpdate = (e) => {
    updateTask(id, title, e.target.value);
  };

  const renderDescription = () => {
    return isDescriptionOpen ? (
      <>
        <ReactTextareaAutosize
          value={description}
          onChange={handleDescriptionUpdate}
          name="description"
          className="description-input"
        />
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
        >
          {completed ? <i className="fa-solid fa-check" /> : ""}
        </div>

        <input
          required
          value={title}
          onChange={handleTitleUpdate}
          type="text"
          name="title"
          className="title-input"
        />

        <div onClick={() => deleteTask(id)}>
          <i className="fa-regular fa-trash-can" />
        </div>
      </div>

      <div onClick={handleArrowClick} className="task-bottom-part">
        {renderDescription()}
      </div>
    </li>
  );
};

export default Task;
