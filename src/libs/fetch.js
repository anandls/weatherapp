import { axiosClient } from "./axiosinstance";
import { BASE_URL, API_URL, API_KEY, UNIT } from "../constants";

const getRequest = async(location, param) => {
  const controller = new AbortController();
  const query = "?q=" + location + "&units=" + UNIT;

  return await axiosClient
    .get(`${API_URL}/${param}/${query}&APPID=${API_KEY}`, {
      signal: controller.signal,
    })
    .then((response) => response);
}

const fetchCities = async() => {
  const controller = new AbortController();
  
  return await axiosClient
    .get(BASE_URL + '/cities-fr.full.pub.json', {
      signal: controller.signal,
    })
    .then((response) => response);
}

export { getRequest, fetchCities };