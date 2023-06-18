import React, { useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import GyaanaImage from "../../../assets/images/unnamed.jpg"
import profileImg from "../../../assets/images/pic1.png"
import Link from "next/link"
import styles from "./styles.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { logout } from "../../../utilities/auth_services"
import { useEffect } from "react"
import { AUTH_TOKEN, USER_EMAIL, USER_ID, USER_NAME, USER_ROLE } from "../../../constants/localStorage"
import { getRequest } from "../../../utilities/rest_service"

const Header = () => {
  const router = useRouter()
  const [isLogout, setIsLogout] = useState(false)
  const [username, setUsername] = useState("")
  const header = [
    { name: "Student Profile", link: "#" },
    { name: "Timetable", link: "/Timetable" },
    { name: "Assignments", link: "#" },
    { name: "Notice", link: "#" },
    { name: "School Planner", link: "/Planner" },
    { name: "Progress Reports", link: "#" },
  ]

  useEffect(() => {
    if (localStorage.getItem(AUTH_TOKEN)) {
      if (localStorage.getItem(USER_ROLE) !== "student") {
        router.push("/Login")
      } else {
        getUserDetails()
      }
    } else {
      router.push("/Login")
    }

  }, [])

  const handleLogoutBtn = () => {
    logout()
  }

  const getUserDetails = async () => {
    try {
      let res = await getRequest("user/getUser/")
      if (res.isSuccess) {
        localStorage.setItem(USER_NAME, res.data.firstName)
        localStorage.setItem(USER_EMAIL, res.data.email)
        localStorage.setItem(USER_ID, res.data._id)
        localStorage.setItem(USER_ROLE, res.data.role)
        setUsername(res.data.firstName)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "purple" }}>
        <Link href="/">
          <a className="navbar-brand">
            <Image src={GyaanaImage} height={80} width={80} />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {header.map((item, index) => (
              <li key={`${item.name}${index}`} className="nav-item active">
                <Link href={item.link}>
                  <a className="nav-link" style={{ color: "white", fontSize: "20px" }}>
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.headerProfileImgContainer}>
          <span className={styles.headerProfileName} style={{ marginBottom: "10px" }}>
            {username}
          </span>
          <span className={styles.headerProfileImg}>
            <Image src={profileImg} height={30} width={30} />
          </span>

          <FontAwesomeIcon onClick={() => setIsLogout(!isLogout)} className={styles.downArrowIcon} style={{ marginLeft: "10px" }} icon={faAngleDown} />
          {isLogout && (
            <div className={styles.logoutPopupWrapper} onClick={() => setIsLogout(!isLogout)}>
              <div className={styles.logoutPopup}>
                <p onClick={handleLogoutBtn} className={styles.logoutText}>
                  Logout
                </p>
                {/* <button className="btn btn-primary">Logout</button> */}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Header
