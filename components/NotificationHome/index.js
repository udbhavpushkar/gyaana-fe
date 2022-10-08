import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./style.module.css"
import Link from "next/link"
import { faArrowRight, faCircleRight } from "@fortawesome/free-solid-svg-icons"
import { getRequest } from "../../utilities/rest_service"

const NotificationHome = () => {
	const [notificationData, setNotificationData] = useState([])

	useEffect(() => {
		handleGetNotificationList()
	}, [])

	const handleGetNotificationList = async () => {
		try {
			let response = await getRequest("notification/?limit=6")
			if (response.isSuccess) {
				setNotificationData(response.data)
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	return (
		<div className={styles.newsContainer}>
			<div className="container">
				<div style={{ color: "white", fontWeight: 600, fontSize: "24px", fontFamily: "cursive" }} className="w-100 text-center mb-3 ">
					Notifications
				</div>

				<div className="col-xs-12">
					<ul className="list-group">
						{notificationData.map((item, index) => (
							<li key={`litile - ${index}`} className="list-group-item" style={{ fontFamily: "cursive" }}>
								<FontAwesomeIcon style={{ marginRight: "10px" }} icon={faCircleRight} />
								{item.title}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className={`mt-3 ${styles.btn}`}>
				<Link href="notifications">
					<div className="align-items-center d-flex justify-content-center">
						<div style={{ marginRight: "10px" }}>View all</div>
						<FontAwesomeIcon icon={faArrowRight} />
					</div>
				</Link>
			</div>
		</div>
	)
}

export default NotificationHome
