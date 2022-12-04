import React, { useEffect, useState } from "react"
import { getRequest, postRequest } from "../../../utilities/rest_service"
import { toast } from "react-toastify"

const ClassAdd = (props) => {
	const [formData, setFormData] = useState({})
	const [teachersData, setTeacherData] = useState([])

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

	const handleAddClass = async (e) => {
		e.preventDefault()
		try {
			let response = await postRequest("grade/", formData)
			if (response.isSuccess) {
				props.addToList(response.data)
				props.setMode("list")
				toast.success("Class Added Successfully")
			} else {
				toast.error("Request Failed")
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
				<h4 className="text-center">Add New Class</h4>
			</div>
			<div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
				<form onSubmit={handleAddClass} style={{ display: "flex", flexDirection: "column", width: "30%" }}>
					<label>Class :</label>
					<input type="text" name="name" onChange={handleFormChange} placeholder="Enter Class" />
					<label>Section :</label>
					<input type="text" name="section" onChange={handleFormChange} placeholder="Enter Section" />
					<label>Session :</label>
					<input type="text" name="session" onChange={handleFormChange} placeholder="Enter Session" />
					<label>Select Teacher : </label>
					<select id="teacher" name="teacher" onChange={handleFormChange}>
						<option>----</option>
						{teachersData.map((teacher, index) => {
							return (
								<option key={`teacher-option-${index}`} value={teacher._id}>
									{teacher.name}
								</option>
							)
						})}
					</select>
					<div>
						<button className="btn btn-success my-4">Add Class</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ClassAdd
