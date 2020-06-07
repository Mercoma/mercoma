import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MobileSidebar } from "../../components/Sidebar";
import profileImage from "../../assets/profile.jpeg";
import { BASE_URL } from "../../constants";

import styles from "./Profile.module.scss";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    configureComponent();
  });

  function configureComponent() {
    const userId = localStorage.getItem("auth");

    // Send get request for the user information
    axios
      .get(`${BASE_URL}/users/${userId}`)
      .then((res) => {
        console.log();
        setUser(res.data);
        // TODO: Change the line below to the actual user's avatar when the backend is updated
      })
      .catch((err) => console.log(err));
  }

  function handleLogoutButtonClicked() {
    localStorage.removeItem("auth");
  }

  return (
    <div className={styles.profile}>
      <Link className={styles.backButton} to="/dashboard/doctors">
        <i className="fas fa-times fa-2x"></i>
      </Link>
      <MobileSidebar />
      <div className={styles.profileContainer}>
        <img className={styles.profileImage} src={profileImage} alt="Profile" />
        <p className="title">{user?.name ? user.name : "Anonymous"}</p>
      </div>
      <Link to="/login">
        <button
          id={styles.logoutButton}
          className="button is-danger"
          onClick={handleLogoutButtonClicked}
        >
          Logout
        </button>
      </Link>
    </div>
  );
}
