import React from "react";
import styles from "./CheckBox.module.scss";

const CheckBox = (props) => {
  const { name, checked, id, handleFilter } = props;

  // const handleFilter =() => {
  //   console.log("hi")
  // }

  // console.log(props)
  return (
    <>
      <li>
        <label htmlFor={id} className={styles.checkbox}>
          <input
            type="checkbox"
            name={id}
            defaultChecked={checked}
            onChange={handleFilter}
          />
          {name}
        </label>
      </li>
    </>
  );
};

export default CheckBox;
