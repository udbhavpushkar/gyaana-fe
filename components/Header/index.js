import React from "react";
import Image from "next/image";
// import LogoImg from "../../assets/images/download (1).png";
// import LogoText from "../../assets/images/download.png";
import LogoText from "../../assets/images/download-removebg-preview.png";
import LogoImg from "../../assets/images/download__1_-removebg-preview.png";
import styles from "./header.module.css";
import Navbar from "../Navbar";

const Header = (props) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.headerLogoImg}
            src={LogoImg}
            alt="Picture of the author"
            height={60}
            width={60}
          />
        </div>
        <div className={styles.TextContainer}>
          <Image
            className={styles.headerLogoText}
            src={LogoText}
            alt="Picture of the author"
            height={60}
            width={150}
          />
        </div>
      </div>
      <div className={styles.headerLinksContainer}>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
