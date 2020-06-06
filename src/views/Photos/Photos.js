import classnames from "classnames";
import React, { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar";
import { user1 } from "../../data/user1";
import PhotoCard from "./PhotoCard";

import styles from "./Photos.module.scss";

export default function Photos() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let classes = classnames("is-active", { active: isModalVisible });

  useEffect(() => {
    document.title = "Mercoma - Photos";
  }, []);

  function handlePlacementCardClicked() {
    setIsModalVisible(true);
  }

  return (
    <div className={styles.photos}>
      <div className={`modal ${classes}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add photo</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            {/* Add photo and needed controls */}
            <p class="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder"
              />
            </p>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Submit</button>
            <button className="button">Cancel</button>
          </footer>
        </div>
      </div>
      <Sidebar page="photos" />
      <section className={styles.photosContent}>
        <h1>Photos</h1>
        <div className={styles.photoGrid}>
          <PhotoCard isPlacementCard onClick={handlePlacementCardClicked} />
          {user1.photos.map((photo, index) => (
            <PhotoCard key={index} isPlacementCard={false} photo={photo} />
          ))}
        </div>
      </section>
    </div>
  );
}
