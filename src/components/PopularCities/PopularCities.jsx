import React from "react";
import { imagesCities } from "../../constants/imagesCities";
import styles from "./Cities.module.css";
import CityCard from "../ui/CityCard/CityCard";

const PopularCities = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore a Room A Week</h1>
      <h2 className={styles.subtitle}>Popular Cities</h2>
      <div className={styles.grid}>
        {imagesCities.map((city) => (
          <CityCard
            key={city.id}
            name={city.name}
            image={city.image}
            price={city.price}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
