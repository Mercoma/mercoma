import React, { useEffect } from "react";

import Sidebar from "../../components/Sidebar";
import { user1 } from "../../data/user1";
import PhotoCard from "./PhotoCard";

import styles from "./Photos.module.scss";

export default function Photos() {
  useEffect(() => {
    document.title = "Mercoma - Photos";
  }, []);

  return (
    <div className={styles.photos}>
      <Sidebar page="photos" />
      <section className={styles.photosContent}>
        <h1>Photos</h1>
        <div className={styles.photoGrid}>
          <PhotoCard isPlacementCard />
          {user1.photos.map((photo, index) => (
            <PhotoCard key={index} isPlacementCard={false} photo={photo} />
          ))}
        </div>
      </section>
    </div>
  );
}
