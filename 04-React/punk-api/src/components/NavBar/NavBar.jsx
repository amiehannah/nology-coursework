import React from "react";
import styles from "./NavBar.module.scss";

import SearchBar from "../../containers/SearchBar";
import CheckBox from "../CheckBox/CheckBox";
import FiltersList from "../../containers/FiltersList/FiltersList";

const NavBar = (props) => {
  const { searchText, setSearchText, isNavBar, filters } = props;

  const renderNav = isNavBar ? styles.nav : styles.navHidden;

  const FilterCheckBoxes = filters.map((filter) => (
    <CheckBox
      id={filter.id}
      name={filter.name}
      checked={filter.checked}
      key={filter.id}
      handleFilter={filter.handleFilter(filter.checked)}
    />
  ));

  return (
    <>
      <section className={`${styles.nav} ${renderNav}`}>
        <div className={styles.search}>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />

          {/* <FiltersList /> */}
          <form className={styles.filter}>
            <ul className={styles.list}>{FilterCheckBoxes}</ul>
          </form>
        </div>
      </section>
    </>
  );
};

export default NavBar;
