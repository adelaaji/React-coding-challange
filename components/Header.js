import React from "react";
import styles from "../styles/Header.module.scss";
import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { BiLike } from "react-icons/bi";

export const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.logo}>
        <img src="/camera-logo.png" alt="logo" />
      </div>

      <div className={styles.moreInfo}>
        <h3>Heritage Gallery</h3>
        <blockquote className={styles.blockquote}>
          <strong>History </strong> is a gallery of pictures in which there are few originals and many copies
        </blockquote>

        <div className={styles.socialMedia}>
          <AiOutlineInstagram size={25} color={"#777"} />
          <AiOutlineTwitter size={25} color={"#777"} />
          <AiFillFacebook size={25} color={"#777"} />
          <span>
            <GiSelfLove size={20} color={"#f33"} />
            {" 456"}
          </span>{" "}
          <span>
            <BiLike size={20} color={"#33f"} />
            {" 123"}
          </span>
        </div>
      </div>
    </header>
  );
};
