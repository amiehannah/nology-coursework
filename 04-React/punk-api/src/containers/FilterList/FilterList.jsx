import React from "react";
import styles from "./FilterList.module.scss";

const FilterList = (props) => {
  const { beers } = props;
  // FILTER BY ALCOHOL CONTENT - ABV GREATER THAN 6%
  // https://api.punkapi.com/v2/beers/?abv_gt=6

  const handleClickAbv = (e) => {
    const highAVB = beers
      .filter((beer) => {
        const beerABV = beer.abv;
        if (beerABV > 6) {
          return beer;
        }
      })
      .map((beer) => beer.name);
    console.log(highAVB);
  };

  // FILTER BY CLASSIC RANGE -> FIRST BREWED BEFORE 2010
  // https://api.punkapi.com/v2/beers/?brewed_before=01-2010

  const handleClickYear = (e) => {
    const filterByBrewDate = beers
      .filter((beer) => {
        const firstBrewed = beer.first_brewed;
        const year = firstBrewed.split("/");
        if (year[1] < 2010) {
          return beer;
        }
      })
      .map((beer) => beer.name);
    console.log(filterByBrewDate);
  };

  // FILTER BY HIGH ACIDITY (PH LOWER THAN 4)

  const handleClickAcidity = (e) => {
    const filterByAcidity = beers
      .filter((beer) => {
        const phLevel = beer.ph;
        // console.log(phLevel);
        if (phLevel < 4) {
          return beer;
        }
      })
      .map((beer) => beer.name);
    console.log(filterByAcidity);
  };

  return (
    <>
      <form className={styles.filter}>
        <ul className={styles.list}>
          <li>
            <label htmlFor="abv" className={styles.checkbox}>
              <input
                type="checkbox"
                name="abv"
                onClick={(e) => handleClickAbv(e.target.value)}
              />
              High ABV ({">"} 6.0%)
            </label>
          </li>

          <li>
            <label htmlFor="classic" className={styles.checkbox}>
              <input
                type="checkbox"
                name="classic"
                onClick={(e) => handleClickYear(e.target.value)}
              />
              Classic Range
            </label>
          </li>

          <li>
            <label htmlFor="acidic" className={styles.checkbox}>
              <input
                type="checkbox"
                name="acidic"
                onClick={(e) => handleClickAcidity(e.target.value)}
              />
              Acidic (ph {"<"} 4)
            </label>
          </li>
        </ul>
      </form>
    </>
  );
};

export default FilterList;
