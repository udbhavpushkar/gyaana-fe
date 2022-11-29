import React from "react"
import styles from "./styles.module.css"

const LoadingSpinner = () => {
	return (
		<div className={styles.ldsRoller}>
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
