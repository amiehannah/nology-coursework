import React from 'react'
import styles from "./Footer.module.scss";
import logo from "../../assets/sml-brewdog.png"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={logo} alt="brewdog" />
    </div>
  )
}

export default Footer