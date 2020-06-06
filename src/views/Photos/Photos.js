import React, { useEffect } from "react";

import PhotoCard from "./PhotoCard";
import Sidebar from "../../components/Sidebar";

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
          {/* TODO: Create loop for the fetched images */}
          <PhotoCard isPlacementCard={false} />
          <PhotoCard isPlacementCard={false} />
          <PhotoCard isPlacementCard={false} />
          <PhotoCard isPlacementCard={false} />
          <PhotoCard isPlacementCard={false} />
          <PhotoCard isPlacementCard={false} />
          <PhotoCard isPlacementCard={false} />
          <PhotoCard isPlacementCard={false} />
          <PhotoCard isPlacementCard={false} />
          <PhotoCard isPlacementCard={false} />
          <PhotoCard isPlacementCard={false} />
          <PhotoCard isPlacementCard={false} />
          <PhotoCard isPlacementCard={false} />
        </div>
      </section>
    </div>
  );
}
