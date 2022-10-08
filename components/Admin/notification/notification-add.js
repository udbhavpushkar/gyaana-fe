import React, { useState } from "react"
import { postRequest } from "../../../utilities/rest_service"

const NotificationAdd = (props) => {
	const [formData, setFormData] = useState({})

	const handleAddNotification = async (e) => {
		e.preventDefault()
		try {
			let response = await postRequest("notification/", formData)
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
				<h4 className="text-center">Add New Notification</h4>
			</div>
			<div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
				<form onSubmit={handleAddNotification} style={{ display: "flex", flexDirection: "column", width: "30%" }}>
					<label>Title :</label>
					<input type="text" name="title" onChange={handleFormChange} placeholder="Enter Title" />
					<label>Description :</label>
					<textarea rows="6" placeholder="Enter Description" name="description" onChange={handleFormChange}></textarea>
					<div>
						<button className="btn btn-success my-4">Add Notification</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default NotificationAdd
