import React from "react";
import FilterItem from "../FilterItem";

const FiltersList = (props) => {
  const { beersWithHighABV, setBeersWithHighABV, beersBrewedBefore,
  setBeersBrewedBefore, acidicBeers, setAcidicBeers} =
    props;
  return (
    <>
      <form action="">
        <FilterItem
          beersWithHighABV={beersWithHighABV}
          setBeersWithHighABV={setBeersWithHighABV}
          beersBrewedBefore={beersBrewedBefore}
          setBeersBrewedBefore={setBeersBrewedBefore}
          acidicBeers={acidicBeers}
          setAcidicBeers={setAcidicBeers}
        />
      </form>
    </>
  );
};

export default FiltersList;
