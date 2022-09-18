import React, { useEffect, useState } from "react"
import { postRequest } from "../../../utilities/rest_service"

const StudentAdd = (props) => {
	const [formData, setFormData] = useState({ password: "12345678" })

	const handleAddStudent = async (e) => {
		e.preventDefault()
		try {
			let response = await postRequest("student/register/", formData)
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
				<h4 className="text-center">Add New Student</h4>
			</div>
			<div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
				<form onSubmit={handleAddStudent} style={{ display: "flex", flexDirection: "column", width: "30%" }}>
					<label>Name :</label>
					<input type="text" name="name" onChange={handleFormChange} placeholder="Enter Name" />
					<label>Enrollment Number :</label>
					<input type="text" name="enroll" onChange={handleFormChange} placeholder="Enter Enrollment Number" />
					<label>Email :</label>
					<input type="email" name="email" onChange={handleFormChange} placeholder="Enter Email" />
					<label>Phone :</label>
					<input type="text" name="mobile" onChange={handleFormChange} placeholder="Enter Phone" />
					<label>Address :</label>
					<input type="text" name="address" onChange={handleFormChange} placeholder="Enter Address" />
					<label>Pincode :</label>
					<input type="text" name="pincode" onChange={handleFormChange} placeholder="Enter Pincode" />
					<label>Aadhaar Number :</label>
					<input type="text" name="aadhaar" onChange={handleFormChange} placeholder="Enter Aadhaar Number" />
					<label>House :</label>
					<div>
						<button className="btn btn-success my-4">Add Student</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default StudentAdd
