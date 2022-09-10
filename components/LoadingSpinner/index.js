import React from "react"
import styles from "./styles.module.css"

const LoadingSpinner = () => {
  return (
    <div class={styles.ldsRoller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default LoadingSpinner
