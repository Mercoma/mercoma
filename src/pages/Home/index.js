import React from "react";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <h1>Mercoma</h1>
        <p>Identify skin tumors with a single snap of a camera!</p>
        <Link to="/signUp">Get started now!</Link>
      </div>
    </section>
  );
};

export default Home;
