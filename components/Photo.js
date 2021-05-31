import React, { useState } from "react";
import { FiInstagram } from "react-icons/fi";
import { BsArrowsFullscreen } from "react-icons/bs";
import styles from "../styles/Index.module.scss";
import Modal from "./Modal";

export default function Photo({ photo }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.photoColumn}>
      <Modal showModal={showModal} setShowModal={setShowModal} photo={photo.urls.regular} />

      <div className={styles.photoBlock} style={{ backgroundColor: photo.color }}>
        <div className={styles.userInfo}>
          <div className={styles.user}>
            <div className={styles.userImage}>
              <img src={photo.user.profile_image.medium} alt={photo.user.name} />
            </div>
            <div className={styles.name}>{photo.user.name}</div>
          </div>
          {photo.user.instagram_username != null && (
            <a
              href={`https://instagram/${photo.user.instagram_username}`}
              target="_ blank"
              className={styles.instagramLink}
            >
              <FiInstagram size={20} />
            </a>
          )}
        </div>
        <div className={styles.imageContainer}>
          <img src={photo.urls.small} alt={photo.alt_description} />
        </div>
        <div className={styles.moreInfo}>
          <span className={styles.description}>{photo.alt_description}</span>
          <div className={styles.enlargePhoto} onClick={() => setShowModal(true)}>
            <BsArrowsFullscreen size={15} />
          </div>
        </div>
      </div>
    </div>
  );
}
