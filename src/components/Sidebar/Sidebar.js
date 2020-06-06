import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { user1 } from "../../data/user1";
import styles from "./Sidebar.module.scss";

function Sidebar(props) {
  const [avatar, setAvatar] = useState(null);
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    configureComponent();
  });

  function configureComponent() {
    // TODO: API call to be implemented later
    setFullName(`${user1.firstName} ${user1.lastName}`);
    setAvatar(user1.avatar);

    // TODO: Add indicator of which page is selected
    switch (props.page) {
      case "dashboard":
        break;
      case "photos":
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.profileCard}>
        <img src={avatar} alt="Avatar" />
        <p>{fullName}</p>
      </div>
      <div className={styles.navigationItems}>
        <div>
          <Link className={styles.navigationLink} to="/dashboard">
            Dashboard
          </Link>
        </div>
        <div>
          <Link className={styles.navigationLink} to="/dashboard/photos">
            Photos
          </Link>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  page: PropTypes.string.isRequired,
};

Sidebar.defaultProps = {
  page: "dashboard",
};

export default Sidebar;
