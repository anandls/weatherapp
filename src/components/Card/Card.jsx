import React, { useState } from "react";
import { DEFAULT_CITY } from "constants";
import styles from "./card.module.scss";
import { Header } from "components/Header";
import { Search } from "components/Search";
import { Label } from "components/Label";
import { CurrentWeather, ForecastWeather } from "components/Weather";

export const Card = () => {
  const [city, setCity] = useState(DEFAULT_CITY);

  const handleChangeCity = (value) => {
    setCity(value);
  };

  return (
    <section className={styles.card}>
      <div className={styles.container}>
        <Header />
        <Search props={handleChangeCity} />
        <Label label={city} />
        <CurrentWeather city={city} />
        <ForecastWeather city={city} />
      </div>
    </section>
  );
};
