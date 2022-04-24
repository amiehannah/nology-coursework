import React from "react";
import styles from "./Main.module.scss";
import beers from "../../data/beers";

import CardList from "../CardList";

const Main = (props) => {
  const { searchText } = props;


  const filterByBeer = beers.filter((beer)=> {
    const beerName = beer.name.toLowerCase();
    return beerName.includes(searchText.toLowerCase());
  })


  return (
    <>
      <div className={styles.main}>
        <CardList beers={filterByBeer} />
      </div>
    </>
  );
};

export default Main;
