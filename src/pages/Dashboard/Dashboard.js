import React, { useEffect } from "react";

import { MobileSidebar, Sidebar } from "../../components/Sidebar";
import Base from '../../layout/Base';

import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Mercoma - Dashboard"
  }, []);

  return (
    <Base>
      <Sidebar page="dashboard" />
      <MobileSidebar />
      <section className={styles.dashboardContent}>
        <h1>Dashboard</h1>
        <button className="button is-primary">Button</button>
      </section>
    </Base>
  );
}
