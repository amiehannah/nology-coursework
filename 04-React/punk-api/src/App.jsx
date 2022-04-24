import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";

import { fetchBeers } from "./services/beer.service";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

import beers from "./data/beers";

const App = () => {
  const [beers, setBeers] = useState([]);

  const addBeers = async () => {
    const apiBeers = await fetchBeers();
    setBeers(apiBeers);
    // console.log(beers);
  };

  useEffect(() => {
    console.log("I will only run once");
    addBeers();
  }, []);


  // const [isActive, setIsActive] = useState(false);

  // const showSideBar = isActive ? <NavBar /> : null;

  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>
          <NavBar
            searchText={searchText}
            setSearchText={setSearchText}
            beers={beers}
          />
          <Main beers={beers} searchText={searchText} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
