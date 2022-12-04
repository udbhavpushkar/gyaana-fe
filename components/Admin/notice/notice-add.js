import React, { useState } from "react"
import { postRequest } from "../../../utilities/rest_service"
import { toast } from "react-toastify"

const NoticeAdd = (props) => {
	const [formData, setFormData] = useState({})

	const handleAddNotice = async (e) => {
		e.preventDefault()
		try {
			let response = await postRequest("notice/", formData)
			if (response.isSuccess) {
				props.addToList(response.data)
				props.setMode("list")
				toast.success("Notice Added Successfully")
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
				<h4 className="text-center">Add New Notice</h4>
			</div>
			<div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
				<form onSubmit={handleAddNotice} style={{ display: "flex", flexDirection: "column", width: "30%" }}>
					<label>Title :</label>
					<input type="text" name="title" onChange={handleFormChange} placeholder="Enter Title" />
					<label>Description :</label>
					<textarea rows="6" placeholder="Enter Description" name="description" onChange={handleFormChange}></textarea>
					<div>
						<button className="btn btn-success my-4">Add Notice</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default NoticeAdd
