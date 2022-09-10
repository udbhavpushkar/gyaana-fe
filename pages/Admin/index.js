import React, { useState } from "react"
import styles from "./styles.module.css"

const Admin = () => {
  const [isToggle, setIsToggle] = useState(true)
  return (
    <div className={styles.adminWrapper}>
      <div className={styles.adminContanier}>
        <div className={isToggle ? styles.adminLeftContanier : styles.adminLeftContanierClose}>
          Left Navdation
          <p onClick={() => setIsToggle(!isToggle)}>X</p>
        </div>
        <div className={styles.adminRightContanier}>Right Content</div>
      </div>
    </div>
  )
}

export default Admin
