import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Login.module.scss";

export default function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  function handleEmailInputChange(e) {
    setEmailInput(e.target.value);
  }

  function handlePasswordInputChange(e) {
    setPasswordInput(e.target.value);
  }

  function handleFormSubmission(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.login}>
      <h1>Mercoma</h1>
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
