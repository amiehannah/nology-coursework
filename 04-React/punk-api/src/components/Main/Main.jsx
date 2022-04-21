import React from "react";
import styles from "./Main.module.scss";
import Card from "../Card";
import NavBar from "../NavBar";

import beers from "../../data/beers";

const Main = () => {
  // const getCardFrontJsx = (beer) => <Card beer={beer} key={beer.id} />;

  const getCardJsx = (beer) => (
    <div className={styles.card} key={beer.idMeal}>
      <Card beer={beer} />
    </div>
  )

  return (
    <>
      {/* <NavBar  /> */}
      <div className={styles.main}>{beers.map(getCardJsx)}</div>
    </>
  );
};

export default Main;
