import React, { useState } from "react";
import styles from "./NavBar.module.scss";
// import SearchBar from "../SearchBar";

const NavBar = (props) => {
  const { searchText, setSearchText } = props;

  return (
    <>
      <section className={styles.nav}>
        <div className={styles.search}>
          <input
            className={styles.inputBar}
            type="text"
            placeholder="Search for a beer..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <section className={styles.filter}>
            <ul className={styles.list}>
              <li> High ABV ({">"} 6.0%)</li>
              <li> Classic Range</li>
              <li>Acidic (ph {"<"} 4)</li>
            </ul>
          </section>
        </div>
      </section>
    </>
  );
};

export default NavBar;
