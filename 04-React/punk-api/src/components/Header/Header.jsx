import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/Brewdog-Logo-Background-PNG-Image-1.png";

const Header = (props) => {
  const { isNavBar, setIsNavBar, renderNav } = props;

  // const handleClick = (e) => {
  //   // console.log("This happens in the handle click");
  //   // setisNavBar(!false);
  //   renderNav(isNavBar);
  // };

  return (
    <>
      <section className={styles.header}>
        <div className={styles.btnWrapper}>
        <button className={styles.button} onClick={(e)=> setIsNavBar(!isNavBar)}>Filter</button>
        </div>

        <div className={styles.title}>
          <img className={styles.logo} src={logo} alt="Logo" />
        </div>
      </section>
    </>
  );
};

export default Header;
