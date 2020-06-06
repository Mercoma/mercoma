import PropTypes from "prop-types";
import React, { useRef, useState } from "react";

import styles from "./PhotoModal.module.scss";

function PhotoModal(props) {
  const [isFileAdded, setIsFileAdded] = useState(false);
  const [image, setImage] = useState(null);
  let imageInputRef = useRef(null);

  function handleCloseButtonClicked() {
    props.closeModal();
  }

  function handleImageChange(e) {
    const files = imageInputRef.files;
    const image = files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result);
    };

    reader.readAsDataURL(image);
    setIsFileAdded(true);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const files = imageInputRef.files;
  }

  return (
    <div className={`modal ${props.isActive && "is-active"}`}>
      <form onSubmit={handleFormSubmit}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add photo</p>
            <button
              className="delete"
              aria-label="close"
              onClick={handleCloseButtonClicked}
            ></button>
          </header>
          <section id={styles.modalCardBody} className="modal-card-body">
            {isFileAdded ? (
              <>
                <p className="image is-4by3">
                  <img src={image} alt="Uploaded skin sample" />
                </p>
              </>
            ) : (
              <div id={styles.emptyPhotoContent}>
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
                    imageInputRef = e;
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
            <button className="button" onClick={handleCloseButtonClicked}>
              Cancel
            </button>
          </footer>
        </div>
      </form>
    </div>
  );
}

PhotoModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default PhotoModal;
