import React from 'react';
import styles from './CityCard.module.css';

const CityCard = ({ name, image, price }) => (
  <button className={styles.card}>
    <div className={styles.imageContainer}>
      <img src={image} alt={`${name} city`} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.cityName}>{name}</h3>
        <p className={styles.price}>From ${price} Per/Week</p>
      </div>
    </div>
  </button>
);

export default CityCard;