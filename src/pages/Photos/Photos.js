import React, { useEffect, useState } from "react";

import { Sidebar, MobileSidebar } from "../../components/Sidebar";
import { user1 } from "../../data/user1";
import Base from "../../layout/Base/Base";
import PhotoCard from "./PhotoCard";
import PhotoModal from "./PhotoModal";
import axios from "axios";
import { BASE_URL } from "../../constants";

import styles from "./Photos.module.scss";

export default function Photos() {
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    document.title = "Mercoma - Photos";
    axios
      .get(`${BASE_URL}/images`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handlePlacementCardClicked() {
    setIsModalActive(true);
  }

  function handleCloseModal() {
    setIsModalActive(false);
  }

  return (
    <Base>
      <PhotoModal
        closeModal={handleCloseModal}
        isActive={isModalActive ? true : false}
      />
      <Sidebar page="photos" />
      <MobileSidebar />
      <section className={styles.photosContent}>
        <h1>Photos</h1>
        <div className={styles.photoGrid}>
          <PhotoCard isPlacementCard onClick={handlePlacementCardClicked} />
          {user1.photos.map((photo, index) => (
            <PhotoCard key={index} photo={photo} />
          ))}
        </div>
      </section>
    </Base>
  );
}
