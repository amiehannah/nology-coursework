import React from "react";
import styles from "./CardList.module.scss";

import Card from "../Card";

const CardList = (props) => {
  const { beers, searchText } = props;

  const getCardJsx = (beer) => (
    <div className={styles.card} key={beer.id}>
      <Card beer={beer} />
    </div>
  );

  const filterBeerByInput = () => {
    beers
      .filter((beer) => {
        if (searchText == "") {
          return beer;
        } else if (beer.name.toLowerCase().includes(searchText.toLowerCase())) {
          return beer;
        }
      })
      .map((beer) => {
        return (
          <div className={styles.card} key={beer.id}>
            <Card beer={beer} />
          </div>
        );
      });
  };




  return <section className={styles.grid}>{beers.map(getCardJsx)}</section>;
};

export default CardList;
