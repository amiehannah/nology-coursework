import React from "react";
import styles from "./Main.module.scss";
// import beers from "../../data/beers";

import CardList from "../CardList";
import FeedbackPanel from "../FeedbackPanel"

const Main = (props) => {
  const { beers, searchText } = props;


  const filterByBeer = beers.filter((beer)=> {
    const beerName = beer.name.toLowerCase();
    return beerName.includes(searchText.toLowerCase());
  })

  const contentJsx = filterByBeer.length ? (
    <CardList beers={filterByBeer} /> 
    ) : (
      <FeedbackPanel 
      header="No Matches"
      text="None of our beers matched that search"/>
    )

  return (
    <>
      <div className={styles.main}>
        {contentJsx}
      </div>
    </>
  );
};

export default Main;
