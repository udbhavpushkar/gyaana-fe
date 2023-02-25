import React, { useState, useEffect } from "react"
import StudentAdd from "./student-add"
import { getRequest, deleteRequest } from "../../../utilities/rest_service"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faUserEdit, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import StudentEdit from "./student-edit"
import { Modal } from "react-bootstrap"
import { toast } from "react-toastify"

const StudentList = (props) => {
	const [mode, setMode] = useState("list")
	const [studentData, setStudentData] = useState([])
	const [editData, setEditData] = useState("")
	const [ind, setInd] = useState("")
	const [currentData, setCurrentData] = useState("")

	const [isPopUp, setIsPopUp] = useState(false)

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
	const handlePopUp = async (val, index) => {
		try {
			let response = await deleteRequest(`student/${val._id}`)
			if (response.isSuccess) {
				let dataList = [...studentData]
				dataList.splice(index, 1)
				setStudentData(dataList)
				setIsPopUp(false)
				toast.success("Student Deleted Successfully")
			} else {
				toast.error("Request Failed")
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	const handleDeleteStudent = (data, index) => {
		setCurrentData(data)
		setInd(index)
	}

	const handleEditStudentClick = (data, index) => {
		setEditData({ data, index })
		setMode("edit")
	}

	const handleAppendStudentList = (data) => {
		let dataList = [...studentData]
		dataList.unshift(data)
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
							<button className="btn btn-primary" onClick={handleAddStudentClick}>
								+Add Student
							</button>
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
														handleDeleteStudent(data, index)
														setIsPopUp(true)
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
						{studentData?.length === 0 && <p className="text-center">No Student to show</p>}
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
			<Modal show={isPopUp} onHide={() => setIsPopUp(false)}>
				<Modal.Header closeButton>
					<h4>Delete Student</h4>
				</Modal.Header>
				<Modal.Body>
					Are You Sure? You want to Delete <b style={{ color: "purple" }}>{currentData?.userId?.name.toUpperCase()}</b> .
				</Modal.Body>
				<Modal.Footer>
					<button className="btn btn-primary" onClick={() => setIsPopUp(false)}>
						Cancel
					</button>
					<button onClick={() => handlePopUp(currentData, ind)} className="btn btn-danger">
						Delete
					</button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}

export default StudentList
