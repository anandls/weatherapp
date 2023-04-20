import React from "react";
import PropTypes from "prop-types";
import styles from "./weather.module.scss";
import { capitalize } from "utils/strings";
import { ICON_URL } from "constants";
import { mapForecastWeather } from "utils/formatWeatherData";
import { Loader } from "components/Loader";
import { useFetch } from "hooks/useFetch";

export const ForecastWeather = ({ city }) => {
  const { data, error, errorInfo, status } = useFetch(
    {
      city,
      param: "forecast",
    },
    [city]
  );

  const forecast = data && mapForecastWeather(data.data.list);

  if (status !== 200 && !error) {
    return (
      <div className={styles["forecast-weather-container"]}>
        <div className={styles.conditions}>
          <Loader />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles["forecast-weather-container"]}>
        <div className={styles.conditions}>
          <div className={styles.error}>{errorInfo.message}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["forecast-weather-container"]}>
      <div className={styles["forecast-headings"]}>
        <div className={styles["grid"]}>
          {forecast &&
            forecast?.map((weekDay, index) => {
              return (
                <div className={styles.col} key={index}>
                  <h3>{weekDay.day.toUpperCase()}</h3>
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles["forecast-info"]}>
        <div className={styles["grid"]}>
          {forecast &&
            forecast?.map((weekDay, index) => {
              const weatherIcon = weekDay.iconInfo.icon
                ? ICON_URL + weekDay.iconInfo.icon + "@2x.png"
                : null;
              return (
                <div className={styles.col} key={index}>
                  <div className={styles.row}>
                    <div>
                      <img
                        src={weatherIcon}
                        alt={capitalize(weekDay.iconInfo.description)}
                      />
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.temp}>
                      {Math.round(weekDay.temp_max)}
                      <sup>o</sup>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.temp}>
                      {Math.round(weekDay.temp_min)}
                      <sup>o</sup>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

ForecastWeather.propTypes = {
  city: PropTypes.string,
};
