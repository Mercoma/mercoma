import PropTypes from "prop-types";
import React from "react";

import styles from "./PhotoCard.module.scss";

PhotoCard.propTypes = {
  isPlacementCard: PropTypes.bool.isRequired,
  photo: PropTypes.object,
};

export default function PhotoCard(props) {
  if (props.isPlacementCard) {
    return (
      <div className={styles.photoCard}>
        <i className="fas fa-plus fa-4x" />
      </div>
    );
  } else {
    return (
      <div className={styles.photoCard}>
        <img
          className={styles.photoCardImage}
          src={props.photo}
          alt="Skin sample"
        />
      </div>
    );
  }
}
