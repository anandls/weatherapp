import React from "react";
import PropTypes from "prop-types";
import styles from "./label.module.scss";

export const Label = ({ label }) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <h2>
          {label
            ? label.toUpperCase()
            : "No city was selected, please select a city"}
        </h2>
      </div>
    </div>
  );
};

Label.propTypes = {
  label: PropTypes.string,
};
