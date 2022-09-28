import React, { useEffect, useState } from "react"
import { getRequest, patchRequest } from "../../../utilities/rest_service"

const StudentEdit = (props) => {
	const [formData, setFormData] = useState({ ...props.data.data })
	const [classData, setClassData] = useState([])
	const [isEdited, setIsEdited] = useState(false)

	useEffect(() => {
		handleGetClassList()
	}, [])

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

	const handleEditStudent = async (e) => {
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
				<h4 className="text-center">Edit Student</h4>
			</div>
			<div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
				<form onSubmit={handleEditStudent} style={{ display: "flex", flexDirection: "column", width: "30%" }}>
					<label>Name :</label>
					<input type="text" name="name" defaultValue={formData?.userId?.name} onChange={handleFormChange} placeholder="Enter Name" />
					<label>Enrollment Number :</label>
					<input type="text" name="enroll" defaultValue={formData?.enroll} onChange={handleFormChange} placeholder="Enter Enrollment Number" />
					<label>Gender :</label>
					<select required id="gender" name="gender" onChange={handleFormChange}>
						<option value="">----</option>
						<option selected={formData.gender == "female"} value="female">
							Female
						</option>
						<option selected={formData.gender == "male"} value="male">
							Male
						</option>
						<option selected={formData.gender == "others"} value="others">
							Others
						</option>
					</select>
					<label>Email :</label>
					<input type="email" name="email" defaultValue={formData?.userId?.email} onChange={handleFormChange} placeholder="Enter Email" />
					<label>Phone :</label>
					<input type="text" name="mobile" defaultValue={formData?.userId?.mobile} onChange={handleFormChange} placeholder="Enter Phone" />
					<label>Address :</label>
					<input type="text" name="address" defaultValue={formData?.address} onChange={handleFormChange} placeholder="Enter Address" />
					<label>Pincode :</label>
					<input type="text" name="pincode" defaultValue={formData?.pincode} onChange={handleFormChange} placeholder="Enter Pincode" />
					<label>Aadhaar Number :</label>
					<input type="text" name="aadhaar" defaultValue={formData?.aadhaar} onChange={handleFormChange} placeholder="Enter Aadhaar Number" />
					<label>House :</label>
					<input type="text" name="house" defaultValue={formData?.house} onChange={handleFormChange} placeholder="Enter House" />
					<label>Select Class : </label>
					<select id="grade" name="grade" onChange={handleFormChange}>
						<option>----</option>
						{classData.map((grade, index) => {
							return (
								<option selected={formData?.grade?._id == grade._id} key={`teacher-option-${index}`} value={grade._id}>
									{`${grade.name}, ${grade.section}`}
								</option>
							)
						})}
					</select>
					<div>
						<button className="btn btn-success my-4">Update</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default StudentEdit
