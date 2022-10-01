import React, { useState } from "react"
import styles from "./styles.module.css"
import Image from "next/image"
import Logo from "../../assets/images/unnamed.jpg"
import { postRequest } from "../../utilities/rest_service"

const Enquiry = () => {
	const [formData, setFormData] = useState({})

	const handleAddFeedback = async (e) => {
		e.preventDefault()
		try {
			let response = await postRequest("feedback/", formData)
			if (response.isSuccess) {
				// Show notification
				document.getElementById("add-feedback-form").reset()
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
		<div className="row" style={{ backgroundColor: "rgb(127, 81, 127)", color: "white" }}>
			<div className="col-md-6 p-4 text-center">
				<Image src={Logo} height={540} width={500} />
			</div>
			<div className="col-md-6 p-4">
				<h2 className="styles.heading">Enquiry Form</h2>
				<form onSubmit={handleAddFeedback} id="add-feedback-form">
					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Full Name
						</label>
						<input type="text" className="form-control" id="name" name="name" onChange={handleFormChange} aria-describedby="emailHelp" />
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email address
						</label>
						<input type="email" className="form-control" id="email" name="email" onChange={handleFormChange} aria-describedby="emailHelp" />
					</div>
					<div className="mb-3">
						<label htmlFor="mobile" className="form-label">
							Contant
						</label>
						<input type="text" className="form-control" id="mobile" name="mobile" onChange={handleFormChange} aria-describedby="emailHelp" />
					</div>
					<div className="mb-3">
						<label htmlFor="address" className="form-label">
							Address
						</label>
						<input type="text" className="form-control" id="address" name="address" onChange={handleFormChange} aria-describedby="emailHelp" />
					</div>
					<div className="mb-3">
						<label htmlFor="message" className="form-label">
							Message
						</label>
						<textarea type="text" className="form-control" id="message" name="message" onChange={handleFormChange} aria-describedby="emailHelp" />
					</div>

					<button type="submit" className="btn btn-success">
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default Enquiry
