import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import profileImage from "../../assets/profile.jpeg";
import styles from "./Sidebar.module.scss";

Sidebar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default function Sidebar(props) {
  const [fullName, setFullName] = useState("Doge McDoodle");

  useEffect(() => {
    configureComponent();
  });

  function configureComponent() {
    switch (props.page) {
      case "dashboard":
        console.log("Dashboard loaded");
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.sidebar}>
      {/* Fetch image from server */}
      <div className={styles.profileCard}>
        <img src={profileImage} alt="Profile" />
        <h1>{fullName}</h1>
      </div>
      <div className={styles.navigationItems}>
        <h1>Dashboard</h1>
        <h1>Photos</h1>
      </div>
    </div>
  );
}
