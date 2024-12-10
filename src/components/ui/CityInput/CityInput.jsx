import { useState, useEffect } from "react";
import Input from "../Input/Input";
import { cities } from "../../../constants/cities";
import styles from "./CityInput.module.css";

function CityInput({ value, onChange }) {
  const [filteredCities, setFilteredCities] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (value) {
      setFilteredCities(
        cities.filter((city) =>
          city.toLowerCase().startsWith(value.toLowerCase())
        )
      );
    } else {
      setFilteredCities([]);
    }
  }, [value]);

  const handleSelectCity = (city) => {
    onChange(city);
    setFilteredCities([]);
    setIsFocused(false);
  };

  return (
    <div className={styles.cityInputWrapper}>
      <Input
        label="City"
        name="city"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setIsFocused(true);
        }}
        placeholder="Enter City"
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          // Закрываем список с небольшой задержкой, чтобы избежать закрытия при клике
          setTimeout(() => setIsFocused(false), 100);
        }}
      />
      {isFocused && filteredCities.length > 0 && (
        <ul className={styles.cityInputList}>
          {filteredCities.map((city, index) => (
            <li
              key={index}
              onClick={() => {
                handleSelectCity(city);
                setIsFocused(false);
              }}
              className={styles.cityInputItem}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CityInput;
