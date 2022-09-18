import React, { useEffect, useState } from "react"
import { getRequest, postRequest, patchRequest } from "../../../utilities/rest_service"

const ClassEdit = (props) => {
	const [formData, setFormData] = useState({ ...props.data.data })
	const [teachersData, setTeacherData] = useState([])
	const [isEdited, setIsEdited] = useState(false)

	useEffect(() => {
		handleGetTeachersList()
	}, [])

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

	const handleEditClass = async (e) => {
		e.preventDefault()
		try {
			let response = await patchRequest(`grade/${formData._id}`, formData)
			if (response.isSuccess) {
				console.log(response.data)
				props.updateList(response.data, props.data.index)
				props.setMode("list")
			}
		} catch (e) {
			console.log("Error: ", e)
		}
	}

	const handleFormChange = (e) => {
		let data = { ...formData }
		data[e.target.name] = e.target.value
		setFormData(data)
		setIsEdited(true)
	}

	return (
		<div>
			<div>
				<h4 className="text-center">Edit Class</h4>
			</div>
			<div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
				<form onSubmit={handleEditClass} style={{ display: "flex", flexDirection: "column", width: "30%" }}>
					<label>Name :</label>
					<input type="text" name="name" defaultValue={formData?.name} onChange={handleFormChange} placeholder="Enter Name" />
					<label>Section :</label>
					<input type="text" name="section" defaultValue={formData?.section} onChange={handleFormChange} placeholder="Enter Section" />
					<label>Session :</label>
					<input type="text" name="session" defaultValue={formData?.session} onChange={handleFormChange} placeholder="Enter Session" />
					<label>Select Teacher : </label>
					<select id="teacher" name="teacher" onChange={handleFormChange}>
						<option>----</option>
						{teachersData.map((teacher, index) => {
							return (
								<option selected={teacher._id == formData?.teacher} key={`teacher-option-${index}`} value={teacher._id}>
									{teacher.name}
								</option>
							)
						})}
					</select>
					<div>
						<button disabled={!isEdited} className="btn btn-success my-4">
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ClassEdit
