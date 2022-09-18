import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { deleteRequest, getRequest } from "../../../utilities/rest_service"
import TeacherAdd from "./teacher-add"
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import TeacherEdit from "./teacher-edit"

const TeacherList = (props) => {
	const [mode, setMode] = useState("list")
	const [teachersData, setTeacherData] = useState([])
	const [editData, setEditData] = useState(null)

	useEffect(() => {
		handleGetTeachersList()
	}, [])

	const handleAddTeacherClick = (e) => {
		e.preventDefault()
		setMode("add")
	}

	const handleGetTeachersList = async () => {
		try {
			let response = await getRequest("user/teachers/")
			if (response.isSuccess) {
				setTeacherData(response.data)
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	const handleAppendTeacherList = (data) => {
		let dataList = [...teachersData]
		dataList.push(data)
		setTeacherData(dataList)
	}

	const handleDeleteTeacher = async (id, index) => {
		try {
			let response = await deleteRequest(`user/${id}`)
			if (response.isSuccess) {
				let dataList = [...teachersData]
				dataList.splice(index, 1)
				setTeacherData(dataList)
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	const handleEditTeacherClick = (data, index) => {
		setEditData({ data, index })
		setMode("edit")
	}

	const handleUpdateTeacherList = (data, index) => {
		let dataList = [...teachersData]
		if (dataList[index]) {
			dataList[index] = data
			setTeacherData(dataList)
			setEditData(null)
		}
	}

	return (
		<div>
			{mode === "list" && (
				<>
					<div className={`d-flex justify-content-between`} style={{ padding: "10px 20px" }}>
						<p>Teacher List</p>
						<div>
							<button onClick={handleAddTeacherClick}>+Add Teacher</button>
						</div>
					</div>
					<div>
						<table className="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Teacher Name</th>
									<th scope="col">Email</th>
									<th scope="col">Contact</th>
									<th scope="col">Edit</th>
									<th scope="col">Delete</th>
								</tr>
							</thead>
							<tbody>
								{teachersData.map((teacher, index) => {
									return (
										<tr key={`teacher-list-${index}`}>
											<th scope="row">{index + 1}</th>
											<td>{teacher.name}</td>
											<td>{teacher.email}</td>
											<td>{teacher.mobile}</td>
											<td>
												<FontAwesomeIcon
													onClick={(e) => {
														handleEditTeacherClick(teacher, index)
													}}
													className={`pointer text-info`}
													icon={faUserEdit}
												/>
											</td>
											<td>
												<FontAwesomeIcon
													onClick={(e) => {
														handleDeleteTeacher(teacher._id, index)
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
			)}
			{mode === "add" && <TeacherAdd addToList={handleAppendTeacherList} setMode={setMode} />}
			{mode === "edit" && <TeacherEdit updateList={handleUpdateTeacherList} data={editData} setMode={setMode} />}
		</div>
	)
}

export default TeacherList
