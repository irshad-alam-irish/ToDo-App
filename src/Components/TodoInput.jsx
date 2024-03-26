import React from "react";
import styles from "../styles/TodoInput.module.css";
function TodoInput({ inputChange, dateChange, addButtonClick, name, date }) {
  return (
    <div className={styles.todoInput}>
      <div className="col-6 input-cont">
        <input
          value={name}
          required
          type="text"
          onChange={inputChange}
          placeholder="Enter Your ToDo's here"
        />
      </div>
      <div className="col-4 input-cont">
        <input value={date} required type="date" onChange={dateChange} />
      </div>
      <div className="col-2 irish-btn">
        <button
          type="button"
          className="btn btn-success btns"
          onClick={addButtonClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
