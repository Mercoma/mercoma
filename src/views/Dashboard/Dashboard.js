import React from "react";

import Sidebar from "../../components/Sidebar";

import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Sidebar page="dashboard" />
      <section className={styles.dashboardContent}>
        <h1>Dashboard</h1>
        <button className="button is-primary">Button</button>
      </section>
    </div>
  );
}
