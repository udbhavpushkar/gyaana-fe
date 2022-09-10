import React, { useEffect, useState } from "react"
import { isLoggedIn, logout } from "../../utilities/auth_services"
import { getRequest } from "../../utilities/rest_service"
import styles from "./styles.module.css"

const Admin = () => {
  const [isToggle, setIsToggle] = useState(true)

  useEffect(()=>{
    if (!isLoggedIn()) {
      window.location ="/"
    }
    
  },[])

  return (
    <div className={styles.adminWrapper}>
      <div className={styles.adminContanier}>
        <div className={isToggle ? styles.adminLeftContanier : styles.adminLeftContanierClose}>
          Left Navdation
          <p onClick={() => setIsToggle(!isToggle)}>X</p>
          <div onClick={logout}>Logout</div>
        </div>
        <div className={styles.adminRightContanier}>Right Content</div>
      </div>
    </div>
  )
}

export default Admin
