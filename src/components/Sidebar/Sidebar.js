import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import profileImage from "../../assets/profile.jpeg";
import styles from "./Sidebar.module.scss";

Sidebar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default function Sidebar(props) {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    configureComponent();
  });

  function configureComponent() {
    // TODO: API call to be implemented later
    setFullName("Jerry Turcios")

    switch (props.page) {
      case "dashboard":
        console.log("Dashboard loaded");
        break;
      case "photos":
        console.log("Photos loaded");
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.sidebar}>
      {/* TODO: Fetch image from server */}
      <div className={styles.profileCard}>
        <img src={profileImage} alt="Profile" />
        <p>{fullName}</p>
      </div>
      <div className={styles.navigationItems}>
        <div>
          <Link className={styles.navigationLink} to="/">
            Dashboard
          </Link>
        </div>
        <div>
          <Link className={styles.navigationLink} to="/photos">
            Photos
          </Link>
        </div>
      </div>
    </div>
  );
}
