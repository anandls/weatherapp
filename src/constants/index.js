const ERROR_NODATA_MESSAGE =
  "So sorry, the server did not respond or no data was found";
const DEFAULT_CITY = "Abbeville";
const HEADINGTEXT = "Sélectionner voltre ville";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const UNIT = "metric";
const WEATHER_TYPE = {
  CURRENT: "weather",
  FORECAST: "forecast",
};
const ICON_URL = "https://openweathermap.org/img/wn/";

export {
  ERROR_NODATA_MESSAGE,
  DEFAULT_CITY,
  HEADINGTEXT,
  BASE_URL,
  API_URL,
  API_KEY,
  UNIT,
  WEATHER_TYPE,
  ICON_URL
};
