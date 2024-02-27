import { useState } from "react";

function Task(props) {
  // State for tasks to edit.
  const [toEdit, setToEdit] = useState(props.taskObj);

  const handleChange = (e) => {
    const editInputValue = e.target.value;
    setToEdit((prev) => {
      return { ...prev, objective: editInputValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    props.onSubmit(formData.get("edit-input"));
    setToEdit({ ...props.taskObj, objective: formData.get("edit-input") });
    props.onSubmit(toEdit);
    e.target.reset();
  };

  return (
    <div className={props.toggleState ? "task active" : "task"}>
      <h3>{props.number}.</h3>
      <form id="edit-form" className="task-form" onSubmit={handleSubmit}>
        {props.taskObj.edit ? (
          <label>
            Edit:{" "}
            <input
              onChange={handleChange}
              type="text"
              className="edit-input"
              defaultValue={props.taskObj.objective}
              id="edit-input"
              autoFocus
              name="edit-input"
            />
          </label>
        ) : (
          <button
            type="button"
            style={{
              textDecoration: props.taskObj.complete ? "line-through" : "none",
            }}
            className="objective-text"
            onClick={props.toggleComplete}
          >
            {props.taskObj.objective}
          </button>
        )}
        <div>
          {props.taskObj.edit ? (
            <div className="task-btns">
              <button className="save-btn">
                Save <i className="bx bx-save" onClick={handleSubmit}></i>
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={props.handleDelete}
              >
                <i className="bx bx-trash"></i>
              </button>
            </div>
          ) : (
            <div className="task-btns">
              <div>
                <button
                  type="button"
                  className="edit-btn"
                  onClick={props.handleEdit}
                >
                  Edit <i className="bx bx-edit"></i>
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={props.handleDelete}
                >
                  <i className="bx bx-trash"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Task;
