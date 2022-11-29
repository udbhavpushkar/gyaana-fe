import React, { useEffect, useState } from "react"
import { postRequest, getRequest } from "../../../utilities/rest_service"

const StudentAdd = (props) => {
	const [formData, setFormData] = useState({ password: "12345678" })
	const [classData, setClassData] = useState([])

	useEffect(() => {
		handleGetClassList()
	}, [])

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
					<label>Gender :</label>
					<select required id="gender" name="gender" onChange={handleFormChange}>
						<option value="">----</option>
						<option value="female">Female</option>
						<option value="male">Male</option>
						<option value="others">Others</option>
					</select>
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
					<input type="text" name="house" onChange={handleFormChange} placeholder="Enter House" />
					<label>Select Class : </label>
					<select id="grade" name="grade" onChange={handleFormChange}>
						<option>----</option>
						{classData.map((grade, index) => {
							return (
								<option key={`teacher-option-${index}`} value={grade._id}>
									{`${grade.name}, ${grade.section}`}
								</option>
							)
						})}
					</select>
					<div>
						<button className="btn btn-success my-4">Add Student</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default StudentAdd
