import React, { useState } from "react";
import styles from "./NavBar.module.scss";
// import SearchBar from "../SearchBar";

import beers from "../../data/beers";

const NavBar = (props) => {
  const { searchText, setSearchText } = props;
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
          <section className={styles.filter}>
            <ul className={styles.list}>
              <li>
                <label for="abv" className={styles.checkbox}>
                  <input type="checkbox" name="abv" />
                  High ABV ({">"} 6.0%)
                </label>
              </li>


              <li>
                <label for="classic" className={styles.checkbox} >
                  <input type="checkbox" name="classic" />
                Classic Range
                </label>
              </li>

      

              <li>
                <label for="acidic" className={styles.checkbox}>
                  <input type="checkbox" name="acidic" />
                  Acidic (ph {"<"} 4)
                </label>
              </li>

            
            </ul>
          </section>
        </div>
      </section>
    </>
  );
};

export default NavBar;
