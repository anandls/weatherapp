import React from "react";
import styles from "./layout.module.scss";
import { Card } from "components/Card";

export const Layout = () => {
  return (
    <main className={styles.container}>
      <Card />
    </main>
  );
};
