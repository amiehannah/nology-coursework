import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";

import { fetchBeers } from "./services/beer.service";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";


const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isNavBar, setIsNavBar] = useState(false);

  const [beersWithHighABV, setBeersWithHighABV] = useState(false);
  const [beersBrewedBefore, setBeersBrewedBefore] = useState(false);
  const [acidicBeers, setAcidicBeers] = useState(false);

  const BREWED_BEFORE = "?brewed_before=01-2010";
  const ABV = "?abv_gt=6";

  const getBeersWithHighABV = beersWithHighABV ? ABV : "";
  const getClassicBeers = beersBrewedBefore ? BREWED_BEFORE : "";
  const getAcidicBeers = acidicBeers ? acidicBeers : "";

  const addBeers = async () => {
    const apiBeers = await fetchBeers(
      getBeersWithHighABV,
      getClassicBeers,
      getAcidicBeers
    );
    setBeers(apiBeers);
    // console.log(beers);
  };

  useEffect(() => {
    console.log("I will only run once");
    addBeers();
  }, [getBeersWithHighABV, getClassicBeers, getAcidicBeers]);

  const filteredBeers = beers.filter((beer) => beer.ph < 4);

  //   const filterBySearchTerm = beers.filter((beer)=> {
  //     const beerName = beer.name.toLowerCase();
  //     return beerName.includes(searchText.toLowerCase());
  //   })

  // const getBeersBySearchTerm = searchText ? filterBySearchTerm : "";

  return (
    <>
      <div className={styles.main}>
        <Header isNavBar={isNavBar} setIsNavBar={setIsNavBar} />
        <div className={styles.content}>
          <NavBar
            searchText={searchText}
            setSearchText={setSearchText}
            beers={beers}
            isNavBar={isNavBar}
            setIsNavBar={setIsNavBar}
            beersWithHighABV={beersWithHighABV}
            setBeersWithHighABV={setBeersWithHighABV}
            beersBrewedBefore={beersBrewedBefore}
            setBeersBrewedBefore={setBeersBrewedBefore}
            acidicBeers={acidicBeers}
            setAcidicBeers={setAcidicBeers}
          />
          <Main
            beers={beers}
            filteredBeers={filteredBeers}
            acidicBeers={acidicBeers}
            searchText={searchText}
            // getBeersBySearchTerm={getBeersBySearchTerm}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
