import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { name, tagline, image_url, abv } = props.beer;

  
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <img src={image_url} alt="{name}" />

      <section className={styles.beerDetails}>
        <p>{tagline}</p>
        <h3>{abv} %</h3>
        {/* <button>Discover More</button> */}
      </section>
    </div>
  );
};

export default Card;
