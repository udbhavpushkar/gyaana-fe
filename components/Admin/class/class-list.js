import React, { useState, useEffect } from "react"
import ClassAdd from "./class-add"
import { getRequest, deleteRequest } from "../../../utilities/rest_service"
import ClassEdit from "./class-edit"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons"

const ClassList = (props) => {
	const [mode, setMode] = useState("list")
	const [classData, setClassData] = useState([])
	const [editData, setEditData] = useState(null)

	useEffect(() => {
		handleGetClassList()
	}, [])

	const handleAddClassClick = (e) => {
		e.preventDefault()
		setMode("add")
	}

	const handleGetClassList = async () => {
		try {
			let response = await getRequest("grade/")
			if (response.isSuccess) {
				setClassData(response.data)
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	const handleDeleteClass = async (id, index) => {
		try {
			let response = await deleteRequest(`grade/${id}`)
			if (response.isSuccess) {
				let dataList = [...classData]
				dataList.splice(index, 1)
				setClassData(dataList)
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	const handleEditClassClick = (data, index) => {
		setEditData({ data, index })
		setMode("edit")
	}

	const handleAppendClassList = (data) => {
		let dataList = [...classData]
		dataList.unshift(data)
		setClassData(dataList)
	}

	const handleUpdateClassList = (data, index) => {
		let dataList = [...classData]
		if (dataList[index]) {
			dataList[index] = data
			setClassData(dataList)
		}
	}

	return (
		<div>
			{mode === "list" && (
				<>
					<div className={`d-flex justify-content-between`} style={{ padding: "10px 20px" }}>
						<p>Class List</p>
						<div>
							<button className="btn btn-primary" onClick={handleAddClassClick}>
								+Add Class
							</button>
						</div>
					</div>
					<div>
						<table className="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Class Name</th>
									<th scope="col">Section</th>
									<th scope="col">Session</th>
									<th scope="col">Edit</th>
									<th scope="col">Delete</th>
								</tr>
							</thead>
							<tbody>
								{classData.map((data, index) => {
									return (
										<tr key={`class-${index}`}>
											<th scope="row">{index + 1}</th>
											<td>{data.name}</td>
											<td>{data.section}</td>
											<td>{data.session}</td>
											<td>
												<FontAwesomeIcon
													onClick={(e) => {
														handleEditClassClick(data, index)
													}}
													className={`pointer text-info`}
													icon={faUserEdit}
												/>
											</td>
											<td>
												<FontAwesomeIcon
													onClick={(e) => {
														handleDeleteClass(data._id, index)
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
			{mode === "add" && <ClassAdd addToList={handleAppendClassList} setMode={setMode} />}
			{mode === "edit" && <ClassEdit updateList={handleUpdateClassList} data={editData} setMode={setMode} />}
		</div>
	)
}

export default ClassList
