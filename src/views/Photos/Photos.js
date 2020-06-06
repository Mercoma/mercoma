import React, { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar";
import { user1 } from "../../data/user1";
import PhotoCard from "./PhotoCard";
import PhotoModal from "./PhotoModal";

import styles from "./Photos.module.scss";

export default function Photos() {
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    document.title = "Mercoma - Photos";
  }, []);

  function handlePlacementCardClicked() {
    setIsModalActive(true);
  }

  function handleCloseModal() {
    setIsModalActive(false);
  }

  return (
    <div className={styles.photos}>
      <PhotoModal
        closeModal={handleCloseModal}
        isActive={isModalActive ? true : false}
      />
      <Sidebar page="photos" />
      <section className={styles.photosContent}>
        <h1>Photos</h1>
        <div className={styles.photoGrid}>
          <PhotoCard isPlacementCard onClick={handlePlacementCardClicked} />
          {user1.photos.map((photo, index) => (
            <PhotoCard key={index} photo={photo} />
          ))}
        </div>
      </section>
    </div>
  );
}
