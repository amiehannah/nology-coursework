import React from 'react'
import styles from "./CardBack.module.scss"

const CardBack = (props) => {
  const { description, food_pairing} = props.beer;

  const foodListItems = food_pairing.map((food) =>
  <li key={food}>- {food}</li>
);
  return (
    <div className={styles.cardBack}>
      <p>{description}</p>
      <section className={styles.pairing}>
      <p className={styles.bold}>Pairs well with:</p>
      <p>{foodListItems}</p>
      </section>
    </div>
  )
}

export default CardBack