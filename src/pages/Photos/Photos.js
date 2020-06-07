import axios from "axios";
import React, { useEffect, useState } from "react";

import { Sidebar, MobileSidebar } from "../../components/Sidebar";
import { BASE_URL } from "../../constants";
import Base from "../../layout/Base/Base";
import PhotoCard from "./PhotoCard";
import PhotoModal from "./PhotoModal";

import styles from "./Photos.module.scss";

export default function Photos() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isRequestErrorVisible, setIsRequestErrorVisible] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    document.title = "Mercoma - Photos";
    fetchPhotosForUser();
  }, []);

  function fetchPhotosForUser() {
    const userId = JSON.parse(localStorage.getItem("userId"));

    axios
      .get(`${BASE_URL}/images/user/${userId}`)
      .then((res) => {
        setPhotos(res.data);
      })
      .catch((err) => {
        setIsRequestErrorVisible(true);
      });
  }

  function handlePlacementCardClicked() {
    setIsModalActive(true);
  }

  function handleCloseModal() {
    setIsModalActive(false);
  }

  function hideErrorStatusMessages() {
    setIsRequestErrorVisible(false);
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
        {isRequestErrorVisible && (
          <div class="notification is-danger is-active">
            <button class="delete" onClick={hideErrorStatusMessages}></button>
            Error! A problem occurred when retrieving your images from the
            server. Try again later.
          </div>
        )}
        <h1>Photos</h1>
        <div className={styles.photoGrid}>
          <PhotoCard isPlacementCard onClick={handlePlacementCardClicked} />
          {photos.map((photo, index) => (
            <PhotoCard key={index} photo={photo} />
          ))}
        </div>
      </section>
    </Base>
  );
}
