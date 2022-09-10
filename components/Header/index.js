import React, { useState, useEffect } from "react"
import Image from "next/image"
import LogoText from "../../assets/images/download-removebg-preview.png"
import LogoImg from "../../assets/images/download__1_-removebg-preview.png"
import styles from "./header.module.css"
import DownArrow from "../../assets/images/chevron-down.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const Header = (props) => {
  const [toggleOpen, setToggleOpen] = useState(true)
  const [loginOpen, setLoginOpen] = useState(false)
  const [isScroll, setIsScroll] = useState(false)

  const hancleScrollToTop = () => {
    window.scroll(0, 0)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  const headerItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "About" },
    { name: "Downloads", link: "#" },
    { name: "Gallery", link: "#" },
    { name: "News", link: "News" },
    { name: "Carrers", link: "#" },
    { name: "Admission", link: "#" },
    { name: "Contact Us", link: "Contact" },
  ]

  const handleToggle = () => {
    setToggleOpen(!toggleOpen)
  }
  return (
    <>
      <div className={styles.headerWrapper}>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">
                <div className={styles.logoWrapper}>
                  <div className={styles.logoContainer}>
                    <Image className={styles.headerLogoImg} src={LogoImg} alt="Gyaana" height={50} width={60} />
                  </div>
                  <div className={styles.textContainer}>
                    <Image className={styles.headerLogoText} src={LogoText} alt="Gyaana" height={50} width={150} />
                  </div>
                </div>
              </a>
            </Link>
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
                    <Link href={item.link}>
                      <a onClick={() => setToggleOpen(true)} className={styles.navLinksCon} aria-current="page">
                        {item.name}
                      </a>
                    </Link>
                  </div>
                ))}
                <a onClick={() => setLoginOpen(!loginOpen)} className={styles.navLinksCon} aria-current="page" href="#">
                  Login
                  <FontAwesomeIcon style={{ marginLeft: "3px" }} icon={faAngleDown} />
                </a>
                {loginOpen && (
                  <div className={styles.loginPopupWrapper}>
                    <Link
                      href={{
                        pathname: "/Login",
                        query: { role: "Admin" },
                      }}
                    >
                      <a onClick={() => setLoginOpen(false)} className={styles.navLinksConLogin} aria-current="page">
                        Admin Login
                      </a>
                    </Link>
                    <Link
                      href={{
                        pathname: "/Login",
                        query: { role: "Teacher" },
                      }}
                    >
                      <a onClick={() => setLoginOpen(false)} className={styles.navLinksConLogin} aria-current="page" href="#">
                        Teacher Login
                      </a>
                    </Link>
                    <Link
                      href={{
                        pathname: "/Login",
                        query: { role: "Student" },
                      }}
                    >
                      <a onClick={() => setLoginOpen(false)} className={styles.navLinksConLogin} aria-current="page" href="#">
                        Student Login
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      {isScroll && (
        <div onClick={hancleScrollToTop} className={styles.scrollToTopWrapper}>
          <FontAwesomeIcon className={styles.scrollToTopIcon} icon={faChevronUp} />
        </div>
      )}
    </>
  )
}

export default Header
