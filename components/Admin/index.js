import Image from "next/image"
import React, { useEffect, useState } from "react"
import { isLoggedIn, logout } from "../../utilities/auth_services"
import styles from "./style.module.css"
import imageLogo from "../../assets/images/unnamed.jpg"
import Link from "next/link"

const AdminLayout = (props) => {
	const [isToggle, setIsToggle] = useState(true)

	const headersData = [
		{
			name: "Home",
			link: "/admin",
		},
		{
			name: "Teacher",
			link: "/admin/teacher-list",
		},
		{
			name: "Student",
			link: "/admin/student-list",
		},
		{
			name: "Class",
			link: "/admin/class-list",
		},
		{
			name: "Enquiry",
			link: "/admin/feedback-list",
		},
		{
			name: "Notification",
			link: "/admin/notification-list",
		},
		{
			name: "Downloads",
			link: "/admin/download-list",
		},
		{
			name: "Gallery",
			link: "/admin/gallery-list",
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
						<span style={{ fontSize: "20px" }}>X</span>
					</p>
					<div>
						<div style={{ display: "flex", justifyContent: "center" }}>
							<Image src={imageLogo} height={100} width={200} />
						</div>
						<div className={styles.linkContainer} style={{ textAlign: "center", marginTop: "20px" }}>
							{headersData.map((item, index) => (
								<Link href={item.link} key={`nav_${index}`}>
									<p className={styles.adminHeaderLinks}>{item.name}</p>
								</Link>
							))}
						</div>
					</div>
				</div>
				<div className={styles.adminRightContanier}>
					<div className={styles.menuButtonContainer}>
						<button onClick={handleToggle} className={isToggle ? styles.sidebarClose : styles.sidebarOpen}>
							&#9776;
						</button>
						<button className={styles.logoutBtn} onClick={logout}>
							Logout
						</button>
					</div>
					<div>{props.children}</div>
				</div>
			</div>
		</div>
	)
}

export default AdminLayout
