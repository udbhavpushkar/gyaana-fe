import Image from "next/image"
import React, { useEffect, useState } from "react"
import { isLoggedIn, logout } from "../../utilities/auth_services"
import styles from "./style.module.css"
import imageLogo from "../../assets/images/unnamed.jpg"
import Link from "next/link"
import { useRouter } from "next/router"
import Sidebar from "./Sidebar"

const AdminLayout = (props) => {
	const router = useRouter()
	const [isToggle, setIsToggle] = useState(true)

	const headersData = [
		{
			name: "Home",
			link: "/admin",
		},
		{
			name: "Teacher",
			link: "/admin/teacher",
		},
		{
			name: "Student",
			link: "/admin/student",
		},
		{
			name: "Class",
			link: "/admin/class",
		},
		{
			name: "Enquiry",
			link: "/admin/feedback",
		},
		{
			name: "Notice",
			link: "/admin/notice",
		},
		{
			name: "Downloads",
			link: "/admin/download",
		},
		{
			name: "Gallery",
			link: "/admin/gallery",
		},
	]

	useEffect(() => {
		if (!isLoggedIn() || localStorage.getItem("role") !== "admin") {
			router.push("/")
		}
	}, [])

	const handleToggle = () => {
		setIsToggle(!isToggle)
	}

	return (
		<div className={styles.adminWrapper}>
			<div className={styles.adminContanier}>
				<div className={styles.sidebarContainer}>
					<div>
						<div style={{ display: "flex", justifyContent: "center" }}>
							<Image src={imageLogo} height={100} width={200} />
						</div>
						<Sidebar role="admin" />
					</div>
				</div>
				<div className={styles.adminRightContanier}>
					<div className={styles.menuButtonContainer}>
						<button
							onClick={handleToggle}
							className={isToggle ? styles.sidebarClose : styles.sidebarOpen}
						>
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
