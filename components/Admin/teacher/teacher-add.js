import React, { useEffect, useState } from "react"
import { postRequest } from "../../../utilities/rest_service"

const TeacherAdd = (props) => {
	const [formData, setFormData] = useState({ role: "teacher", password: "12345678" })

	const handleAddTeacher = async (e) => {
		e.preventDefault()
		try {
			let response = await postRequest("user/register/", formData)
			if (response.isSuccess) {
				props.addToList(response.data)
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
	}

	return (
		<div>
			<div>
				<h4 className="text-center">Add New Teacher</h4>
			</div>
			<div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
				<form onSubmit={handleAddTeacher} style={{ display: "flex", flexDirection: "column", width: "30%" }}>
					<label>Name :</label>
					<input type="text" name="name" onChange={handleFormChange} placeholder="Enter Name" />
					<label>Email :</label>
					<input type="email" name="email" onChange={handleFormChange} placeholder="Enter Email" />
					<label>Phone :</label>
					<input type="text" name="mobile" onChange={handleFormChange} placeholder="Enter Phone" />
					<div>
						<button className="btn btn-success my-4">Add Teacher</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default TeacherAdd
