import React from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = () => {
  return (
    <>
      <ul>
        <li>
          <label htmlFor="HighABV" className={styles.checkbox}>
            <input
              type="checkbox"
              name="filter"
              id="highABV"
              value="abv"
              // onChange={handleFilter}
            />
            High ABV ({">"} 6.0%){" "}
          </label>
        </li>

        <li>
          <label htmlFor="HighABV" className={styles.checkbox}>
            <input
              type="checkbox"
              name="filter"
              id="highABV"
              value="abv"
              // onChange={handleFilter}
            />
            High ABV ({">"} 6.0%){" "}
          </label>
        </li>
      </ul>
    </>
  );
};

export default FilterItem;
