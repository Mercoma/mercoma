import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./SignUp.module.scss";

export default function SignUp() {
  const [emailInput, setEmailInput] = useState("");

  function handleEmailInputChange(e) {
    setEmailInput(e.target.value);
  }

  function handleFormSubmission(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.signUp}>
      <Link className={styles.backButton} to="/login">
        <i className="fas fa-chevron-left fa-2x"></i>
      </Link>
      <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={handleFormSubmission}>
          <h1>What's your email?</h1>
          <p>
            Welcome to Mercoma. Connect with doctors and identify possible
            tumors with a snapshot.
          </p>
          <div className={styles.inputContainer}>
            <input
              onChange={handleEmailInputChange}
              placeholder="Email"
              type="email"
              value={emailInput}
              required
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
