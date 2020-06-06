import PropTypes from "prop-types";
import React from "react";

import styles from "./PhotoCard.module.scss";

PhotoCard.propTypes = {
  isPlacementCard: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  photo: PropTypes.object,
};

export default function PhotoCard(props) {
  if (props.isPlacementCard) {
    return (
      <div
        id={styles.placementCard}
        className={styles.photoCard}
        onClick={props.onClick}
      >
        <i className="fas fa-plus fa-4x" />
      </div>
    );
  } else {
    return (
      <div className={`card ${styles.photoCard}`}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.photo.image} alt="Skin sample" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <p>Tumor percent: {props.photo.tumorPercent}</p>
          </div>
        </div>
      </div>
    );
  }
}
