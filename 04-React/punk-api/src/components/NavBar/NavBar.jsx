import React, { useState } from "react";
import styles from "./NavBar.module.scss";

import SearchBar from "../../containers/SearchBar";
import FilterList from "../../containers/FilterList/FilterList";
import CheckBox from "../CheckBox/CheckBox";

const NavBar = (props) => {
  const {
    searchText,
    setSearchText,
    beers,
    isNavBar,
    highAbvValue,
    setHighAbvValue,
    yearBrewed,
    setYearBrewed,
    acidicValue,
    setAcidicValue,
    filters,
  } = props;

  const renderNav = isNavBar ? styles.nav : styles.navHidden;



  const FilterCheckBoxes = filters.map((filter) => (
    <CheckBox
      id={filter.id}
      name={filter.name}
      checked={filter.checked}
      key={filter.id}
    />
  ));

  return (
    <>
      <section className={`${styles.nav} ${renderNav}`}>
        <div className={styles.search}>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />

          <form className={styles.filter}>
            <ul className={styles.list}>{FilterCheckBoxes}</ul>
          </form>

          {/* <FilterList
            beers={beers}
            highAbvValue={highAbvValue}
            setHighAbvValue={setHighAbvValue}
            yearBrewed={yearBrewed}
            setYearBrewed={setYearBrewed}
            acidicValue={acidicValue}
            setAcidicValue={setAcidicValue}
          /> */}
        </div>
      </section>
    </>
  );
};

export default NavBar;
