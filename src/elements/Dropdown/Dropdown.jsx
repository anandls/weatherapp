import React from "react";
import PropTypes from "prop-types";
import "./dropdown.module.scss";

export const Dropdown = ({ changeHandler, data }) => {
  return (
    <select onChange={changeHandler}>
      {data?.map((city, index) => {
        return (
          <option key={index} value={city.nm}>
            {city.nm}
          </option>
        );
      })}
    </select>
  );
};

Dropdown.propTypes = {
  changeHandler: PropTypes.func,
  data: PropTypes.array,
};
