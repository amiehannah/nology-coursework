import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import smlLogo from "../../assets/sml-brewdog.png";

const SearchBar = (props) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const { placeholder } = props;
  // const input = isOpen ? <input type="text" placeholder={placeholder} /> : null;

  // onInput={e => updateSearchText(e.target.value)} -> to go back in input bar after placeholder

  return (
    <div className={styles.search}>
      <input
        className={styles.inputBar}
        type="text"
        placeholder="Search for a beer..."
      />
      <section className={styles.filter}>
        <ul className={styles.list}>
          <li> High ABV ({">"} 6.0%)</li>
          <li> Classic Range</li>
          <li>Acidic (ph {"<"} 4)</li>
        </ul>
      </section>
      {/* {input}
      <span className={styles.toggleSearch} onClick={() => setIsOpen(!isOpen)}>
        <img className={styles.smlLogo} src={smlLogo} alt="brewdog" />
      </span> */}
    </div>
  );
};

export default SearchBar;
