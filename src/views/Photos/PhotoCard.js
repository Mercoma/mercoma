import PropTypes from "prop-types";
import React from "react";

import styles from "./PhotoCard.module.scss";

PhotoCard.propTypes = {
  isPlacementCard: PropTypes.bool.isRequired,
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
        {/* TODO: Replace comment with image data */}
        <i id={styles.photoPlacement} className="fas fa-plus fa-4x" />
      </div>
    );
  }
}
