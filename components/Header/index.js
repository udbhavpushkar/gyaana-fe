import React, { useState } from "react"
import Image from "next/image"
import LogoText from "../../assets/images/download-removebg-preview.png"
import LogoImg from "../../assets/images/download__1_-removebg-preview.png"
import styles from "./header.module.css"
import DownArrow from "../../assets/images/chevron-down.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const Header = (props) => {
  const [toggleOpen, setToggleOpen] = useState(true)
  const [loginOpen, setLoginOpen] = useState(false)

  const headerItems = [
    { name: "Home", link: "#" },
    { name: "About Us", link: "#" },
    { name: "Downloads", link: "#" },
    { name: "Gallery", link: "#" },
    { name: "News", link: "#" },
    { name: "Carrers", link: "#" },
    { name: "Admission", link: "#" },
    { name: "Contact Us", link: "#" },
  ]

  const handleToggle = () => {
    setToggleOpen(!toggleOpen)
  }
  return (
    <div style={{ position: "sticky", top: "0px", left: "0px", zIndex: 3 }}>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className={styles.logoWrapper}>
              <div className={styles.logoContainer}>
                <Image className={styles.headerLogoImg} src={LogoImg} alt="Gyaana" height={50} width={60} />
              </div>
              <div className={styles.textContainer}>
                <Image className={styles.headerLogoText} src={LogoText} alt="Gyaana" height={50} width={150} />
              </div>
            </div>
          </a>
          <button
            onClick={handleToggle}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded={toggleOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${toggleOpen ? "collapse" : ""} navbar-collapse`} id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {headerItems.map((item) => (
                <div className={styles.navLinksConTainer} key={item.name}>
                  <a onClick={() => setToggleOpen(true)} className={styles.navLinksCon} aria-current="page" href={item.link}>
                    {item.name}
                  </a>
                </div>
              ))}
              <a onClick={() => setLoginOpen(!loginOpen)} className={styles.navLinksCon} aria-current="page" href="#">
                Login
                <FontAwesomeIcon icon={faAngleDown} />
              </a>
              {loginOpen && (
                <div className={styles.loginPopupWrapper}>
                  <div>
                    <a onClick={() => setLoginOpen(false)} className={styles.navLinksConLogin} aria-current="page" href="#">
                      Teacher Login
                    </a>
                  </div>
                  <div>
                    <a onClick={() => setLoginOpen(false)} className={styles.navLinksConLogin} aria-current="page" href="#">
                      Student Login
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
