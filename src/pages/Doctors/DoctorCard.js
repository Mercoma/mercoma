import PropTypes from "prop-types";
import React from "react";

import styles from "./DoctorCard.module.scss";

function DoctorCard(props) {
  return (
    <div className={`card ${styles.doctorCard}`}>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={props.doctor.image} alt="Doctor" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{props.doctor.fullName}</p>
            <p className="subtitle is-6">{props.doctor.title}</p>
          </div>
        </div>
        <div className="content">
          {props.doctor.summary}
          <br />
          <p className={styles.contactText}>
            Contact:{" "}
            <a
              href={`https://${props.doctor.contact}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.doctor.contact}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

DoctorCard.propTypes = {
  doctor: PropTypes.object.isRequired,
};

export default DoctorCard;
