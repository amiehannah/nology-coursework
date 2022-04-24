import React, { useState } from "react";
import styles from "./NavBar.module.scss";

import FilterList from "../../containers/FilterList/FilterList";

const NavBar = (props) => {
  const { searchText, setSearchText, beers } = props;
  const [isActive, setIsActive] = useState(false);

  const toggleNav = isActive ? toggleNav : "";

  return (
    <>
      <section className={`${styles.nav} ${toggleNav}`}>
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
