import { getShortDay } from "utils/time";

export const mapCurrentWeather = ({ data }) => {
  const {
    main: { temp, temp_min, temp_max },
    dt,
    weather,
  } = data;
  const { description, icon } = weather[0];
  return {
    temp,
    temp_min,
    temp_max,
    dt,
    description,
    icon,
  };
};

export const mapForecastWeather = (data) => {
  let forecast = data.filter((f) => f.dt_txt.match(/00:00:00/))
    .slice(0, 3).map((day) => {
      const {
        main: { temp_min, temp_max }
      } = day;  
      const { description, icon } = day.weather[0];
      return {
        day: getShortDay(day.dt_txt),        
        temp_min,
        temp_max,
        iconInfo: { description, icon }
      }
    });
  return  forecast;
};