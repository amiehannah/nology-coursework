import React from 'react'
import styles from "./Button.module.scss";

const Button = (props) => {
    const {clicked} = props;
    
  return (
    <button className={styles.button} onClick={clicked} >Filter</button>
  )
}


export default Button;