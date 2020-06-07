import axios from "axios";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../constants";

import styles from "./Login.module.scss";

function Login(props) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isRequestErrorVisible, setIsRequestErrorVisible] = useState(false);

  function handleEmailInputChange(e) {
    setEmailInput(e.target.value);
    hideErrorStatusMessages();
  }

  function handlePasswordInputChange(e) {
    setPasswordInput(e.target.value);
    hideErrorStatusMessages();
  }

  function hideErrorStatusMessages() {
    setIsRequestErrorVisible(false);
  }

  function handleFormSubmission(e) {
    e.preventDefault();

    const data = {
      email: emailInput,
      password: passwordInput,
    };

    axios.defaults.withCredentials = true;

    axios
      .post(`${BASE_URL}/users/signin`, data)
      .then((res) => {
        // TODO: Add token to local storage and redirect to the dashboard
        console.log(res.data.id);
        localStorage.setItem("auth", res.data.id);
        props.history.push("/dashboard/doctors");
      })
      .catch(() => {
        setIsRequestErrorVisible(true);
      });
  }

  return (
    <div className={styles.login}>
      <Link className={styles.title} to="/">
        <h1>Mercoma</h1>
      </Link>
      <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={handleFormSubmission}>
          <h2>Welcome Back</h2>
          <div className={styles.inputContainer}>
            <input
              onChange={handleEmailInputChange}
              placeholder="Email"
              type="email"
              value={emailInput}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handlePasswordInputChange}
              placeholder="Password"
              type="password"
              value={passwordInput}
              required
            />
          </div>
          <button>Submit</button>
        </form>
        {/* Status messages */}
        {isRequestErrorVisible && (
          <div className={`notification is-danger ${styles.statusMessage}`}>
            <button
              className="delete"
              onClick={hideErrorStatusMessages}
            ></button>
            Error! The account was not found. Re-enter your email or password.
          </div>
        )}
      </div>
      <div id={styles.signUpSection}>
        <p>
          Don't have an account?
          <Link className={styles.navigationLink} to="/signUp">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.object,
};

export default Login;
