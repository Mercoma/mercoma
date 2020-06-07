import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { user1 } from "../../data/user1";
import styles from "./Sidebar.module.scss";

function Sidebar(props) {
  const [avatar, setAvatar] = useState(null);
  const [fullName, setFullName] = useState("");
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);

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

  function handleProfileCardClicked() {
    setIsProfileMenuVisible(!isProfileMenuVisible);
  }

  function handleLogoutButtonClicked() {
    localStorage.removeItem("userId");
  }

  return (
    <div className={styles.sidebar}>
      <div className={`dropdown ${isProfileMenuVisible && "is-active"}`}>
        <div className="dropdown-trigger">
          <div
            className={styles.profileCard}
            onClick={handleProfileCardClicked}
          >
            <img src={avatar} alt="Avatar" />
            <p>{fullName}</p>
          </div>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <Link to="/dashboard/profile" className="dropdown-item">
              Profile
            </Link>
            <hr className="dropdown-divider" />
            <Link to="/login">
              <button
                id={styles.logoutButton}
                className="dropdown-item"
                onClick={handleLogoutButtonClicked}
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
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
