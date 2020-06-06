import React from "react";
import { Link } from "react-router-dom";

import styles from "./MobileSidebar.module.scss";

export default function MobileSidebar() {
  return (
    <div className={styles.mobileSidebar}>
      <ul className={styles.navigationItems}>
        <Link to="/dashboard/photos">
          <div className={styles.navigationLink}>
            <i className="fas fa-camera fa-2x"></i>
            Photos
          </div>
        </Link>
        <Link to="/dashboard">
          <div className={styles.navigationLink}>
            <i className="fas fa-tachometer-alt fa-2x"></i>
            Dashboard
          </div>
        </Link>
        <Link to="/dashboard/profile">
          <div className={styles.navigationLink}>
            <i className="fas fa-user fa-2x"></i>
            Profile
          </div>
        </Link>
      </ul>
    </div>
  );
}
