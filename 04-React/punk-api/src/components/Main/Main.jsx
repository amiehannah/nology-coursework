import React from "react";
import styles from "./Main.module.scss";
import beers from "../../data/beers"

import CardList from "../CardList";

const Main = () => {

  return (
    <>
      <div className={styles.main}>
        <CardList beers={beers}/>
      </div>
    </>
  );
};

export default Main;
