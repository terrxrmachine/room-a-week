import React from "react";
import { cities } from "../../constants/cities";
import styles from "./Cities.module.css";
import CityCard from "../ui/CityCard/CityCard";

const PopularCities = () => {
  return (
    <div className={styles.container}>
      <h1>Explore a Room A Week</h1>
      <h2 className={styles.title}>Popular Cities</h2>
      <div className={styles.grid}>
        {cities.map((city) => (
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
