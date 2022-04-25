import React, { useState } from "react";
import styles from "./FilterList.module.scss";

import { FilterData } from "../../services/beer.service";

const FilterList = (props) => {
  const { beers, setHighAbvValue, setYearBrewed, setAcidicValue } = props;
  // FILTER BY ALCOHOL CONTENT - ABV GREATER THAN 6%
  // https://api.punkapi.com/v2/beers/?abv_gt=6

  const [checkedAbv, setCheckedAbv] = useState(false);
  const [checkedYear, setCheckedYear] = useState(false);
  const [checkedAcidity, setCheckedAcidity] = useState(false);

  // const [favourites, setFavourites] = useState(recipes.filter(recipe => recipe.isFav))

  const handleCheckAbv = (e) => {
    setCheckedAbv(!checkedAbv);
    const highAbv = beers
      .filter((beer) => {
        const beerABV = beer.abv;
        if (beerABV > 6) {
          return beer;
        }
      })
      .map((beer) => beer.name);
    console.log(highAbv);
    setHighAbvValue(highAbv);
  };

  // FILTER BY CLASSIC RANGE -> FIRST BREWED BEFORE 2010
  // https://api.punkapi.com/v2/beers/?brewed_before=01-2010

  const handleClickYear = (e) => {
    setCheckedYear(!checkedYear);
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
    setYearBrewed(filterByBrewDate);
  };

  // FILTER BY HIGH ACIDITY (PH LOWER THAN 4)

  const handleClickAcidity = (e) => {
    setCheckedAcidity(!checkedAcidity);
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
    setAcidicValue(filterByAcidity);
  };

  return (
    <>
      {/* HOW CAN I GET THIS TO WORK - MAPPING OVER AND PASSING IN UNIQUE HANDLECLICK FUNCTIONS? */}
      {/* <form className={styles.filter}>
        <ul className={styles.list}>
          {FilterData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <label htmlFor={item.name} className={item.cName}>
                  <input type={item.type} name={item.name} onClick={(e)=> handleClick(e.target.value)} /> 
                  {item.title}
                </label>
              </li>
            );
          })}
        </ul>
      </form> */}


      


    </>
  );
};

export default FilterList;
