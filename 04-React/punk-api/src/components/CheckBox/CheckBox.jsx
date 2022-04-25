import React from "react";
import styles from "./CheckBox.module.scss";

const CheckBox = (props) => {
  const { name, checked, id, toggleFilterBoxes } = props;

  return (
    <>
      <li>
        <label htmlFor={id} className={styles.checkbox}>
          <input
            type="checkbox"
            name={id}
            defaultChecked={checked}
            // onChange={() => toggleFilterBoxes(id)}
          />
          {name}
        </label>
      </li>
    </>
  );
};

export default CheckBox;
