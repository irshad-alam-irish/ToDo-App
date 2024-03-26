import React from "react";
import styles from "../styles/InputList.module.css";
function InputList({ listItems, deleteClick }) {
  return (
    <div>
      <div>
        {listItems.map((items) => (
          <div key={Math.random()} className={styles.InputList}>
            <div className="col-6 List-cont ">{items.name}</div>
            <div className="col-4 List-cont">{items.date}</div>
            <div className="col-2 irish-btn ">
              <button
                type="button"
                className="btn btn-danger btns"
                onClick={() => deleteClick(items.name)}
              >
                Done
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InputList;
