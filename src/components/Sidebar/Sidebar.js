import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { user1 } from "../../data/user1";
import styles from "./Sidebar.module.scss";

Sidebar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default function Sidebar(props) {
  const [avatar, setAvatar] = useState(undefined);
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    configureComponent();
  });

  function configureComponent() {
    // TODO: API call to be implemented later
    setFullName(`${user1.firstName} ${user1.lastName}`);
    setAvatar(user1.avatar);

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
      <div className={styles.profileCard}>
        <img src={avatar} alt="Profile" />
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
