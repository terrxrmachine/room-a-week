import React, { useState } from "react";
import { imagesCities } from "../../constants/imagesCities";
import styles from "./Cities.module.css";
import CityCard from "../ui/CityCard/CityCard";
import ExploreModal from "../Modals/ExploreModal/ExploreModal";

const PopularCities = () => {
  const [selectedCity, setSelectedCity] = useState(null); // Состояние для выбранного города
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия модалки

  // Обработчик клика на карточку города
  const handleCardClick = (city) => {
    setSelectedCity(city); // Устанавливаем текущий город
    setIsModalOpen(true); // Открываем модалку
  };

  // Закрытие модалки
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCity(null); // Сбрасываем выбранный город
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
            onClick={() => handleCardClick(city)} // Передаем обработчик клика
          />
        ))}
      </div>

      {/* Модалка ExploreModal */}
      {isModalOpen && (
        <ExploreModal selectedCity={selectedCity} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default PopularCities;
