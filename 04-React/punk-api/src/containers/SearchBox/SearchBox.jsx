import React, { useState } from "react";
import styles from "./SearchBox.module.scss";
import beers from "./data/beers";
import Card from "../../components/Card"

const SearchBox = (props) => {
  const [searchTerm, setSearchTerm] = useState("");



  <section className={styles.content}>
        {beers
          .filter((beer) => {
            if (searchTerm === "") {
              return beer;
            } else if (
              beer.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return beer;
            }
          })
          .map((beer) => {
            return (
              <div className={styles.card} key={beer.id}>
                <Card beer={beer} />
              </div>
            );
          })}
      </section>
// );



  return (
    <>
      <input
        type="text"
        placeholder="Search by Employee..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />



      
    </>
  );
};

export default SearchBox;
