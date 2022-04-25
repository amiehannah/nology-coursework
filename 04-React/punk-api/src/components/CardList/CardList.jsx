import React from "react";
import styles from "./CardList.module.scss";

import Card from "../Card";

const CardList = (props) => {
  const { beers } = props;

  const getCardJsx = (beer) => (
    <div className={styles.card} key={beer.id}>
      <Card beer={beer} />
    </div>
  );

  return (
    <>
      <section className={styles.grid}>{beers.map(getCardJsx)}</section>
    </>
  );
};

export default CardList;
