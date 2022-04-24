import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";

import { fetchBeers } from "./services/beer.service";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

import beers from "./data/beers";

const App = (props) => {
  const { beers } = props;

  const [searchText, setSearchText] = useState("");

  const [isActive, setIsActive] = useState(false);

  const showSideBar = isActive ? <NavBar /> : null;

  return (
    <>
      <div className={styles.main}>
        <Header showSideBar={showSideBar} />
        <div className={styles.content}>
          <NavBar searchText={searchText} setSearchText={setSearchText}/>
          <Main searchText={searchText} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
