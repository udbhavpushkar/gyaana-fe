import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import styles from "./style.module.css"
import LoadingSpinner from "../../LoadingSpinner"
import { getRequest, patchRequest } from "../../../utilities/rest_service"
import { toast } from "react-toastify"

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
	const [gradeDetail, setGradeDetail] = useState()

	const [isLoading, setIsloading] = useState(false)

	const handleSubject = (e, i, ind) => {
		let subArr = [...data]
		subArr[i][ind] = e.target.value
		setData(subArr)
	}

	useEffect(() => {
		fetchGrade()
	}, [])

	const handleTimeTableUpdate = async (e) => {
		e.preventDefault()
		try {
			let formdata = { timetable: JSON.stringify(data) }
			let response = await patchRequest(`grade/${gradeData._id}/timetable/`, formdata)
			if (response.isSuccess) {
				setGradeData(response.data)
				if (response.data.timetable) {
					let myData = JSON.parse(response.data.timetable)
					setData(myData)
				}
				toast.success("Timetable Updated Successfully")
			} else {

			}
		} catch (error) {
			console.log(error)
		}
	}

	const fetchGrade = async () => {
		try {
			const res = await getRequest(`employee/getGrade/`)
			if (res.isSuccess) {
				console.log(res.data);
				setGradeDetail(res.data)
			} else {
				setError("You are not assigned as a class teacher.")
			}
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<div style={{ backgroundColor: "rgb(198, 173, 198)" }}>
					<h4 className="text-center" style={{ backgroundColor: "purple", fontFamily: "cursive", color: "white", padding: "10px" }}>
						Edit Timetable {gradeDetail?.grade?.name} {gradeDetail?.name}
					</h4>
					<div className={`row`} style={{ marginLeft: "50px" }}>
						{PERIOD.map((item, index) => {
							return (
								<div style={{ width: index == 0 ? "180px" : "120px" }} className={`${styles.tableBox3}`} key={"period_" + index}>
									{item}
								</div>
							)
						})}
					</div>
					<div className="d-flex" style={{ marginLeft: "50px" }}>
						<div style={{ width: "180px" }} className="flex-column p-0">
							{DAY_NAME.map((day, i) => (
								<div key={`day+${i}`} className={styles.tableBox2}>
									{day}
								</div>
							))}
						</div>
						<div>
							{arr.map((item, i) => (
								<div key={`days+${i}`} className="d-flex" >
									{item.map((v, ind) => (
										<div key={`sub+${ind}`} className={`${styles.tableBox}`}>
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
