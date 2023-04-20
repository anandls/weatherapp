import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./search.module.scss";
import { fetchCities } from "libs/fetch";
import { Dropdown } from "elements/Dropdown";

export const Search = ({ props }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const Cities = async () => {
      const response = await fetchCities();
      setCities(response.data);
    };
    Cities();
  }, []);

  const changeHandler = (e) => {
    props(e.target.value);
  };

  const citiesList = cities && Object.values(cities);

  return (
    <div>
      <Dropdown changeHandler={changeHandler} data={citiesList} />
    </div>
  );
};

Search.propTypes = {
  props: PropTypes.func,
};
