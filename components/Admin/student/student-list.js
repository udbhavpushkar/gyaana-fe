import React, { useState, useEffect } from "react"
import StudentAdd from "./student-add"
import { getRequest, deleteRequest } from "../../../utilities/rest_service"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faUserEdit, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import StudentEdit from "./student-edit"

const StudentList = (props) => {
	const [mode, setMode] = useState("list")
	const [studentData, setStudentData] = useState([])
	const [editData, setEditData] = useState(null)

	useEffect(() => {
		handleGetStudentsList()
	}, [])

	const handleAddStudentClick = (e) => {
		e.preventDefault()
		setMode("add")
	}

	const handleGetStudentsList = async () => {
		try {
			let response = await getRequest("student/")
			if (response.isSuccess) {
				setStudentData(response.data)
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	const handleDeleteStudent = async (id, index) => {
		try {
			let response = await deleteRequest(`student/${id}`)
			if (response.isSuccess) {
				let dataList = [...studentData]
				dataList.splice(index, 1)
				setStudentData(dataList)
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	const handleEditStudentClick = (data, index) => {
		setEditData({ data, index })
		setMode("edit")
	}

	const handleAppendStudentList = (data) => {
		let dataList = [...studentData]
		dataList.push(data)
		setStudentData(dataList)
	}

	const handleUpdateStudentList = (data, index) => {
		let dataList = [...classData]
		if (dataList[index]) {
			dataList[index] = data
			setClassData(dataList)
		}
	}

	return (
		<div>
			{mode === "list" ? (
				<>
					<div className={`d-flex justify-content-between`} style={{ padding: "10px 20px" }}>
						<p>Student List</p>
						<div>
							<button onClick={handleAddStudentClick}>+Add Student</button>
						</div>
					</div>
					<div>
						<table className="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Enroll</th>
									<th scope="col">Name</th>
									<th scope="col">Class</th>
									<th scope="col">Edit</th>
									<th scope="col">Delete</th>
								</tr>
							</thead>
							<tbody>
								{studentData.map((data, index) => {
									return (
										<tr key={`student-${data._id}`}>
											<th scope="row">{index + 1}</th>
											<td>{data.enroll}</td>
											<td>{data.userId.name}</td>
											<td>{`${data.grade.name}, ${data.grade.section}`}</td>
											<td>
												<FontAwesomeIcon
													onClick={(e) => {
														handleEditStudentClick(data, index)
													}}
													className={`pointer text-info`}
													icon={faUserEdit}
												/>
											</td>
											<td>
												<FontAwesomeIcon
													onClick={(e) => {
														handleDeleteStudent(data._id, index)
													}}
													className={`pointer text-danger`}
													icon={faTrashAlt}
												/>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</>
			) : (
				<div
					onClick={(e) => {
						setMode("list")
					}}
					className="btn btn-secondary px-4"
				>
					<FontAwesomeIcon icon={faArrowLeftLong} />
				</div>
			)}
			{mode === "add" && <StudentAdd addToList={handleAppendStudentList} setMode={setMode} />}
			{mode === "edit" && <StudentEdit updateList={handleUpdateStudentList} data={editData} setMode={setMode} />}
		</div>
	)
}

export default StudentList
