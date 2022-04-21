import React from 'react'
import styles from "./NavBar.module.scss"
import SearchBar from "../SearchBar";

const NavBar = () => {
  return (
    <div className={styles.nav} >

      <section>
      <SearchBar placeholder="Search for a beer..." />
      </section>
    </div>
  )
}

export default NavBar