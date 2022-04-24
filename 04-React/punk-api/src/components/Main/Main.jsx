import React, {useState} from "react";
import styles from "./Main.module.scss";
import Card from "../Card";
import NavBar from "../NavBar";

import beers from "../../data/beers";

const Main = () => {
const [searchTerm, setSearchTerm] = useState("");


  const getCardJsx = (beer) => (
    <div className={styles.card} key={beer.idMeal}>
      <Card beer={beer} />
    </div>
  );





  return (
    <>
      <div className={styles.main}>
        <NavBar searchText = {searchTerm}  />
        {/* <div className={styles.grid}>{searchForBeer}</div> */}
        <div className={styles.grid}>{beers.map(getCardJsx)}</div>
        {/* {searchForBeer} */}
      </div>
    </>
  );
};

export default Main;
