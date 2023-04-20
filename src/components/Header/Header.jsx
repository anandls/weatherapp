import React from "react";
import styles from "./header.module.scss";
import { HEADINGTEXT } from "constants";

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <h1>{HEADINGTEXT}</h1>
      </div>
    </header>
  );
};
