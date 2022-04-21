import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";

import { fetchBeers } from "./services/beer.service";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Card from "./components/Card"

import beers from "./data/beers";

const App = () => {
  // const [beers, setBeers] = useState([]);

  // const addBeers = async () => {
  //   const apiBeers = await fetchBeers();
  //   setBeers(apiBeers);
  //   console.log(beers);
  // }
  // const {
  //   name,
  //   tagline,
  //   image_url,
  //   abv,
  // } = props.beers;

  // useEffect(() => {
  //   console.log("I will only run once");
  //   addBeers();
  // }, []);

  const getCardFrontJsx = (beer) => (
    <Card beer = {beer} key={beer.id}/>
  )


  return (
    <>
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>
          {/* <NavBar /> */}
          {/* <Main /> */}
          {/* <Card beer={beersData[0]} /> */}
          {beers.map(getCardFrontJsx)}
        </div>

        {/* {beers.map((beer) => {
        return (
          <>
            <h1 key={beer.id}>{beer.name}</h1>
            <img src={beer.image_url} alt="Beer" />
            <p>{beer.tagline}</p>
            <h2>{beer.abv}%</h2>
          </>
        );
      })} */}
      </div>
    
    </>
  );
};

export default App;
