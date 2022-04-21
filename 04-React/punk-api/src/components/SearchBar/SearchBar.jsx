import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import smlLogo from "../../assets/sml-brewdog.png";

const SearchBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { placeholder } = props;
  const input = isOpen ? <input type="text" placeholder={placeholder} /> : null;

  // onInput={e => updateSearchText(e.target.value)} -> to go back in input bar after placeholder

  return (
    <div className={styles.search}>
      {input}
      <span className={styles.toggleSearch} onClick={() => setIsOpen(!isOpen)}>
        <img className={styles.smlLogo} src={smlLogo} alt="brewdog" />
      </span>
    </div>
  );
};

export default SearchBar;
