import React, { useState } from "react";
import { imagesCities } from "../../constants/imagesCities";
import styles from "./Cities.module.css";
import CityCard from "../ui/CityCard/CityCard";
import Modal from "../ui/Modal/Modal";

const PopularCities = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setShowModal(true);
  };

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
            onClick={handleCityClick}
          />
        ))}
      </div>
      {showModal && selectedCity && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <h2>{selectedCity.name}</h2>
          <p>From ${selectedCity.price} Per Week</p>
        </Modal>
      )}
    </div>
  );
};

export default PopularCities;