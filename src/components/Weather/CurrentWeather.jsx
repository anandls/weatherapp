import React from "react";
import PropTypes from "prop-types";
import styles from "./weather.module.scss";
import { capitalize } from "utils/strings";
import { ICON_URL } from "constants";
import { formatDay } from "utils/time";
import { mapCurrentWeather } from "utils/formatWeatherData";
import { Loader } from "components/Loader";
import { useFetch } from "hooks/useFetch";

export const CurrentWeather = ({ city }) => {
  const { data, error, errorInfo, status } = useFetch(
    {
      city,
      param: "weather",
    },
    [city]
  );

  const current = data && mapCurrentWeather(data);

  if (status !== 200 && !error) {
    return (
      <div className={styles["current-weather-container"]}>
        <div className={styles.conditions}>
          <Loader />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles["current-weather-container"]}>
        <div className={styles.conditions}>
          <div className={styles.error}>{errorInfo.message}</div>
        </div>
      </div>
    );
  }

  const weatherIcon = current.icon ? ICON_URL + current.icon + "@4x.png" : null;

  return (
    <div className={styles["current-weather-container"]}>
      <div className={styles.conditions}>
        <div>
          {data && (
            <div>
              <div>
                <img src={weatherIcon} alt={capitalize(current.description)} />
              </div>
              <span className={styles.temp}>
                {Math.round(current.temp)}
                <sup>o</sup>
              </span>
              <div className={styles.day}>{formatDay(current.dt)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

CurrentWeather.propTypes = {
  city: PropTypes.string,
};
