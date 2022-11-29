import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import styles from "./style.module.css"
import LoadingSpinner from "../../LoadingSpinner"
import { getRequest, patchRequest } from "../../../utilities/rest_service"

const DAY_NAME = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const PERIOD = ["Days/Class", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"]

const Timetable = () => {
	const arr = [
		["", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", ""],
	]

	const [data, setData] = useState(arr)
	const [gradeData, setGradeData] = useState(null)

	const [isLoading, setIsloading] = useState(false)

	const handleSubject = (e, i, ind) => {
		let subArr = [...data]
		subArr[i][ind] = e.target.value
		setData(subArr)
	}

	useEffect(() => {
		fetchGradeDetails()
	}, [])

	const handleTimeTableUpdate = async (e) => {
		e.preventDefault();
		try {
			let formdata = { timetable: JSON.stringify(data) }
			let response = await patchRequest(`grade/${gradeData._id}/timetable/`, formdata)
			if (response.isSuccess) {
				setGradeData(response.data)
				if (response.data.timetable) {
					let myData = JSON.parse(response.data.timetable)
					setData(myData)
				}
			}
		} catch (error) {
			console.log(error);
		}
	}

	const fetchGradeDetails = async () => {
		setIsloading(true)
		try {
			let response = await getRequest(`grade/my-grade/`)
			if (response.isSuccess) {
				setGradeData(response.data)
				if (response.data.timetable) {
					let myData = JSON.parse(response.data.timetable)
					setData(myData)
				}
			}
		} catch (error) {
			console.log(error);
		}
		setIsloading(false)
	}

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<div style={{ backgroundColor: "rgb(198, 173, 198)" }}>
					<h4 className="text-center" style={{ backgroundColor: "purple", fontFamily: "cursive", color: "white", padding: "10px" }}>
						Edit Timetable
					</h4>
					<div className={`d-flex justify-content-center`}>
						{PERIOD.map((item, index) => {
							return (
								<div className={styles.tableBox3} style={{ width: index === 0 ? "130px" : "" }} key={"period_" + index}>
									{item}
								</div>
							)
						})}
					</div>
					{DAY_NAME.map((day, i) => (
						<div key={`day+${i}`} style={{ marginLeft: "61px" }} className={styles.tableBox2}>
							{day}
						</div>
					))}
					<div style={{ position: "absolute", top: "232px", left: "211px" }}>
						{arr.map((item, i) => (
							<div key={`days+${i}`} style={{ display: "flex", marginLeft: "191px" }}>
								{item.map((v, ind) => (
									<div key={`sub+${ind}`} className={styles.tableBox}>
										<p>
											<input
												value={data[i][ind]}
												onChange={(e) => handleSubject(e, i, ind)}
												placeholder="Subject"
												style={{ height: "30px", width: "100%", fontSize: "12px", textAlign: "center", fontWeight: "600" }}
											/>
										</p>
									</div>
								))}
							</div>
						))}
					</div>

					{/* {data.map((day, ind) => (
                        <div key={`${day}${ind}`} className={styles.tableBoxContainer}>
                            <div className={styles.tableBox2} key={"day" + ind}>
                                {DAY_NAME[ind]}
                            </div>
                            {day.map((item, index) => (
                                <div className={styles.tableBox} key={item + index}>
                                    <div>
                                        <input placeholder="Subject" style={{ height: "80px", width: "100%", fontSize: "12px", textAlign: "center", fontWeight: "600" }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))} */}
					<div style={{ marginTop: "2px", textAlign: "right", padding: "20px" }}>
						<button onClick={handleTimeTableUpdate} className="btn btn-primary" style={{ marginRight: "44px" }}>
							Save Timetable
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default Timetable
