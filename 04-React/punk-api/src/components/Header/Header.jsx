import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/Brewdog-Logo-Background-PNG-Image-1.png";
import Button from "../Button";

const Header = (props) => {
  const { showSideBar } = props;


const handleClick = () => {
  showSideBar();
}
  // const checkClick = () => {
  //   console.log("i've been clicked")

  // }
  
  return (
    <>
      <section className={styles.header}>
        <div className={styles.btnWrapper}>
         <Button clicked={handleClick} />
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
