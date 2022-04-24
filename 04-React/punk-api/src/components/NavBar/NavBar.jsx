import React, { useState } from "react";
import styles from "./NavBar.module.scss";

import FilterList from "../../containers/FilterList/FilterList";

const NavBar = (props) => {
  const { searchText, setSearchText, beers, isNavBar, setIsNavBar } = props;

  const renderNav = isNavBar ? styles.nav : styles.navHidden;

  return (
    <>
      <section className={`${styles.nav} ${renderNav}`}>
        
        <div className={styles.search}>
          <input
            className={styles.inputBar}
            type="text"
            placeholder="Search for a beer..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <FilterList beers={beers} />
        </div>
      </section>
    </>
  );
};

export default NavBar;
