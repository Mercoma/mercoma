import React from "react";

import Sidebar from "../../components/Sidebar";

import styles from "./Photos.module.scss";

export default function Photos() {
  return (
    <div className={styles.photos}>
      <Sidebar page="photos" />
      <section className={styles.photosContent}>
        <h1>Photos</h1>
        <button className="button is-primary">Button</button>
      </section>
    </div>
  );
}
