import axios from "axios";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../constants";

import styles from "./SignUp.module.scss";

function SignUp(props) {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [isPasswordErrorVisible, setIsPasswordErrorVisible] = useState(false);
  const [isRequestErrorVisible, setIsRequestErrorVisible] = useState(false);

  function handleFirstNameInputChange(e) {
    setFirstNameInput(e.target.value);
    hideErrorStatusMessages();
  }

  function handleLastNameInputChange(e) {
    setLastNameInput(e.target.value);
    hideErrorStatusMessages();
  }

  function handleEmailInputChange(e) {
    setEmailInput(e.target.value);
    hideErrorStatusMessages();
  }

  function handlePasswordInputChange(e) {
    setPasswordInput(e.target.value);
    hideErrorStatusMessages();
  }

  function handleConfirmPasswordInputChange(e) {
    setConfirmPasswordInput(e.target.value);
    hideErrorStatusMessages();
  }

  function hideErrorStatusMessages() {
    setIsPasswordErrorVisible(false);
    setIsRequestErrorVisible(false);
  }

  function handleFormSubmission(e) {
    e.preventDefault();

    const data = {
      email: emailInput,
      password: passwordInput,
      firstname: firstNameInput,
      lastname: lastNameInput,
    };

    if (passwordInput === confirmPasswordInput) {
      axios
        .post(`${BASE_URL}/users/signup`, data)
        .then((res) => {
          props.history.push("/login");
        })
        .catch(() => {
          setIsRequestErrorVisible(true);
        });
    } else {
      setIsPasswordErrorVisible(true);
    }
  }

  return (
    <div className={styles.signUp}>
      <Link className={styles.backButton} to="/login">
        <i className="fas fa-chevron-left fa-2x"></i>
      </Link>
      <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={handleFormSubmission}>
          <h1>Create an account.</h1>
          <p>
            Welcome to Mercoma. Connect with doctors and identify possible
            tumors with a snapshot.
          </p>
          <div className={styles.inputContainer}>
            <input
              onChange={handleFirstNameInputChange}
              placeholder="First name"
              type="text"
              value={firstNameInput}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              onChange={handleLastNameInputChange}
              placeholder="Last name"
              type="text"
              value={lastNameInput}
              required
            />
          </div>
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
          <div className={styles.inputContainer}>
            <input
              onChange={handleConfirmPasswordInputChange}
              placeholder="Confirm password"
              type="password"
              value={confirmPasswordInput}
              required
            />
          </div>
          <button>Submit</button>
        </form>
        {/* Status messages */}
        {isPasswordErrorVisible && (
          <div className={`notification is-danger ${styles.statusMessage}`}>
            <button className="delete" onClick={hideErrorStatusMessages}></button>
            Error! The passwords do no match.
          </div>
        )}
        {isRequestErrorVisible && (
          <div className={`notification is-danger ${styles.statusMessage}`}>
            <button className="delete" onClick={hideErrorStatusMessages}></button>
            An error was encountered! Please try again.
          </div>
        )}
      </div>
    </div>
  );
}

SignUp.propTypes = {
  history: PropTypes.object,
};

export default SignUp;
