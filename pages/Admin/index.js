import Image from "next/image"
import React, { useEffect, useState } from "react"
import { isLoggedIn, logout } from "../../utilities/auth_services"
import { getRequest } from "../../utilities/rest_service"
import styles from "./styles.module.css"
import imageLogo from "../../assets/images/unnamed.jpg"
import Teacher from "./../TeacherHome/index"
import Link from "next/link"

const Admin = (props) => {
  const [isToggle, setIsToggle] = useState(true)

  const headersData = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Teacher",
      link: "/TeacherList",
    },
    {
      name: "Student",
      link: "#",
    },
    {
      name: "Fees",
      link: "#",
    },
    {
      name: "Staff",
      link: "#",
    },
  ]

  useEffect(() => {
    if (!isLoggedIn()) {
      window.location = "/"
    }
  }, [])

  const handleToggle = () => {
    setIsToggle(!isToggle)
  }

  return (
    <div className={styles.adminWrapper}>
      <div className={styles.adminContanier}>
        <div className={isToggle ? styles.adminLeftContanier : styles.sidebarClose}>
          <p className={styles.closeButton} onClick={() => setIsToggle(!isToggle)}>
            Close X
          </p>
          <div>
            <div style={{ marginLeft: "20px" }}>
              <Image src={imageLogo} height={70} width={100} />
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              {headersData.map((item) => (
                <Link href={item.link} key={item.link}>
                  <p className={styles.adminHeaderLinks}>{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.adminRightContanier}>
          <div className={styles.menuButtonContainer} style={{ textAlign: "right", padding: "20px" }}>
            <button onClick={handleToggle} className={isToggle ? styles.sidebarClose : styles.sidebarOpen}>
              &#9776;
            </button>
            <button onClick={logout}>Logout</button>
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  )
}

export default Admin
