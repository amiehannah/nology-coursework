import React, { useState } from "react";
import styles from "./SearchBox.module.scss";
import beers from "./data/beers";
import Card from "../../components/Card";

const SearchBox = (props) => {
  const { searchText, setSearchText } = props;

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

  return (
    <>
      <input
        className={styles.inputBar}
        type="text"
        placeholder="Search for a beer..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </>
  );
};

export default SearchBox;
