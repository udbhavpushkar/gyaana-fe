import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import StudentHeader from "../StudentHome/StudentHeader"
import styles from "../Timetable/styles.module.css"
import LoadingSpinner from "../../components/LoadingSpinner/index"
import TeacherLayout from "../../components/Teacher"

const Timetable = () => {
	const [isLoading, setIsloading] = useState(false)
	const arr = [
		{ period: "" },
		{ period: "I", sub: "English" },
		{ period: "II", sub: "Maths" },
		{ period: "III", sub: "Science" },
		{ period: "IV", sub: "S.S.T" },
		{ period: "Lunch", sub: "-" },
		{ period: "V", sub: "Music" },
		{ period: "VI", sub: "Hindi" },
		{ period: "VII", sub: "Arts" },
		{ period: "VIII", sub: "Game" },
	]
	const days = [{ day: "Days/Class" }, { day: "Monday" }, { day: "Tuesday" }, { day: "Wednesday" }, { day: "Thurday" }, { day: "Friday" }, { day: "Saturday" }]

	useEffect(() => {
		setIsloading(true)
		setTimeout(() => {
			setIsloading(false)
		}, 800)
	}, [])

	return (
		<>
			<TeacherLayout>
				{isLoading ? (
					<LoadingSpinner />
				) : (
					<div style={{ backgroundColor: "rgb(198, 173, 198)" }}>
						<h4 className="text-center" style={{ backgroundColor: "purple", fontFamily: "cursive", color: "white", padding: "10px" }}>
							Edit Timetable
						</h4>
						{days.map((day, ind) => (
							<div key={`${day}${ind}`} className={styles.tableBoxContainer}>
								{arr.map((item, index) => (
									<>
										{index == 0 ? (
											<div className={styles.tableBox2} key={item}>
												{days[ind].day}
											</div>
										) : (
											<div className={styles.tableBox} key={item}>
												{day.day == "Days/Class" ? (
													item.period
												) : (
													<div>
														<input placeholder="Subject" style={{ width: "80px", height: "80px", fontSize: "12px", textAlign: "center", fontWeight: "600" }} />
													</div>
												)}
											</div>
										)}
									</>
								))}
							</div>
						))}
						<div style={{ marginTop: "20px", textAlign: "right", padding: "20px" }}>
							<button style={{ marginRight: "20px" }}>Save</button>
						</div>
					</div>
				)}
			</TeacherLayout>
		</>
	)
}

export default Timetable
