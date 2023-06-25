import Image from "next/image"
import React, { useEffect, useState } from "react"
import { isLoggedIn, logout } from "../../utilities/auth_services"
import styles from "./style.module.css"
import imageLogo from "../../assets/images/unnamed.jpg"
import Link from "next/link"
import { useRouter } from "next/router"
import { USER_ROLE } from "../../constants/localStorage"

const EmployeeLayout = (props) => {
	const router = useRouter()
	const [isToggle, setIsToggle] = useState(true)

	const headersData = [
		{
			name: "Home",
			link: "/employee",
		},
		{
			name: "Timetable",
			link: "/employee/timetable",
		},
		{
			name: "Notice",
			link: "/employee/notice",
		},
	]

	useEffect(() => {
		if (!isLoggedIn() || localStorage.getItem(USER_ROLE) !== "employee") {
			router.push("/")
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

export default EmployeeLayout
