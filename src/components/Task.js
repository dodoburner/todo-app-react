import { useContext, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { taskContext } from "../App";

const Task = ({ task, index }) => {
  const {
    title: prevTitle,
    description: prevDescription,
    completed,
    id,
  } = task;
  const [title, setTitle] = useState(prevTitle);
  const [description, setDescription] = useState(prevDescription);
  const { setCompleted, rearrangeTasks, deleteTask } = useContext(taskContext);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleClick = (e) => {
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

  const renderDescription = () => {
    return isDescriptionOpen ? (
      <>
        <ReactTextareaAutosize
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
        />

        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          className="title-input"
        />

        <div onClick={() => deleteTask(id)}>
          <i className="fa-regular fa-trash-can" />
        </div>
      </div>

      <div onClick={handleClick} className="task-bottom-part">
        {renderDescription()}
      </div>
    </li>
  );
};

export default Task;
