import axios from 'axios';
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { user1 } from "../../data/user1";
import styles from "./Sidebar.module.scss";
import { BASE_URL } from "../../constants";

function Sidebar(props) {
  const [avatar, setAvatar] = useState(null);
  const [fullName, setFullName] = useState("Anonymous");
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);

  useEffect(() => {
    configureComponent();
  });

  function configureComponent() {
    // Send get request for the user information
    axios.get(`${BASE_URL}/users`)
      .then((res) => {
        setFullName(`${res.data.firstname} ${res.data.lastname}`);
        // TODO: Change the line below to the actual user's avatar when the backend is updated
      })
      .catch((err) => console.log(err));

      setAvatar(user1.avatar);
    }

  function handleProfileCardClicked() {
    setIsProfileMenuVisible(!isProfileMenuVisible);
  }

  function handleLogoutButtonClicked() {
    localStorage.removeItem("auth");
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
          <Link className={styles.navigationLink} to="/dashboard/doctors">
            <i className="fas fa-user-md"></i>
            Doctors
          </Link>
        </div>
        <div>
          <Link className={styles.navigationLink} to="/dashboard/photos">
            <i className="fas fa-camera"></i>
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
  page: "doctors",
};

export default Sidebar;
