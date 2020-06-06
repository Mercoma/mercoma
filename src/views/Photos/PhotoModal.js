import classnames from "classnames";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";

import styles from "./PhotoModal.module.scss";

function PhotoModal(props) {
  const [isFileAdded, setIsFileAdded] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const classes = classnames("is-active", { active: props.isActive });
  let imageInput = useRef(null);

  function handleImageChange() {
    const files = imageInput.files;
    const image = files[0];

    setIsFileAdded(true);
    setImageFile(image);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const files = imageInput.files;
    console.log(files);
  }

  return (
    <div className={`modal ${classes}`}>
      <form onSubmit={handleFormSubmit}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add photo</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section id={styles.modalCardBody} className="modal-card-body">
            {isFileAdded ? (
              <>
                <p className="image is-4by3">
                  <img src={imageFile} alt="Placeholder" />
                </p>
                <p className={styles.inputLabel}>Choose a different image</p>
                <input
                  className={styles.inputfile}
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  capture="camera"
                  onChange={handleImageChange}
                  ref={(e) => {
                    imageInput = e;
                  }}
                />
                <label htmlFor="file">
                  <i className="fas fa-camera fa-2x" />
                </label>
              </>
            ) : (
              <div id={styles.emptyFileContent}>
                <p className={styles.inputLabel}>An image has not been added</p>
                <input
                  className={styles.inputfile}
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  capture="camera"
                  onChange={handleImageChange}
                  ref={(e) => {
                    imageInput = e;
                  }}
                />
                <label htmlFor="file">
                  <i className="fas fa-camera fa-2x" />
                </label>
              </div>
            )}
          </section>
          <footer className="modal-card-foot">
            {isFileAdded ? (
              <button className="button is-success">Submit</button>
            ) : (
              <button className="button is-disabled" disabled>
                Submit
              </button>
            )}
            <button className="button">Cancel</button>
          </footer>
        </div>
      </form>
    </div>
  );
}

PhotoModal.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default PhotoModal;
