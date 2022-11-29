import React, { useEffect, useState } from "react"
import { patchRequest } from "../../../utilities/rest_service"

const TeacherEdit = (props) => {
	const [formData, setFormData] = useState({ ...props.data.data })
	const [isEdited, setIsEdited] = useState(false)

	const handleUpdateTeacher = async (e) => {
		e.preventDefault()
		try {
			let response = await patchRequest(`user/${formData._id}`, formData)
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
				<h4 className="text-center">Edit Teacher</h4>
			</div>
			<div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
				<form onSubmit={handleUpdateTeacher} style={{ display: "flex", flexDirection: "column", width: "30%" }}>
					<label>Name :</label>
					<input type="text" name="name" defaultValue={formData?.name} onChange={handleFormChange} placeholder="Enter Name" />
					<label>Email :</label>
					<input type="email" name="email" defaultValue={formData?.email} onChange={handleFormChange} placeholder="Enter Email" />
					<label>Phone :</label>
					<input type="text" name="mobile" defaultValue={formData?.mobile} onChange={handleFormChange} placeholder="Enter Phone" />
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

export default TeacherEdit
