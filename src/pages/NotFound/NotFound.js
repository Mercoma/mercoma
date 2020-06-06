import React from "react";
import { Link } from 'react-router-dom'

import { MobileSidebar, Sidebar } from "../../components/Sidebar";
import Base from "../../layout/Base";

import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <Base>
      <Sidebar page="not found" />
      <MobileSidebar />
      <section className={styles.notFoundContent}>
        <h1>
          The page you navigated to does not exist. <Link to="/">Return to dashboard</Link>
        </h1>
      </section>
    </Base>
  );
}
