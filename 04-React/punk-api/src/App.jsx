import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";

import { fetchBeers } from "./services/beer.service";
import { FILTER_DATA } from "./services/beer.service";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [isNavBar, setIsNavBar] = useState(false);
  const [searchText, setSearchText] = useState("");

  const addBeers = async () => {
    const apiBeers = await fetchBeers();
    setBeers(apiBeers);
    // console.log(beers);
  };

  useEffect(() => {
    console.log("I will only run once");
    addBeers();
  }, []);

  //handleFilter function

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
            filters={FILTER_DATA}
          />
          <Main beers={beers} searchText={searchText} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
