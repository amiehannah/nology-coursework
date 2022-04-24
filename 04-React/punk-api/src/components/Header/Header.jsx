import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/Brewdog-Logo-Background-PNG-Image-1.png";
import Button from "../Button";

const Header = (props) => {
  const { clicked } = props;

  
  return (
    <>
      <section className={styles.header}>
        <div className={styles.btnWrapper}>
         <Button clicked={clicked}/>
        </div>

        <div className={styles.title}>
          {/* <button className={styles.button}>Filter</button> */}


          <img className={styles.logo} src={logo} alt="Logo" />
        </div>
      </section>
    </>
  );
};

export default Header;
