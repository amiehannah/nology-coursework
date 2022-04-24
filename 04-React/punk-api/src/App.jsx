import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";

import { fetchBeers } from "./services/beer.service";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

import beers from "./data/beers";

const App = (props) => {
  const {beers} = props;
  
  const [searchText, setSearchText] = useState("");



  return (
    <>
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>
          <NavBar searchTerm={searchText} setSearchText={setSearchText} />
          <Main />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
