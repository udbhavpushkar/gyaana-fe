import React, { useState } from "react"
import styles from "./styles.module.css"
import Image from "next/image"
import Logo from "../../assets/images/unnamed.jpg"
import { postRequest } from "../../utilities/rest_service"
import { toast } from "react-toastify"

const Enquiry = () => {
	const initialValues = { name: "", email: "", mobile: "", address: "", message: "" }
	const [formData, setFormData] = useState(initialValues)
	const [errorData, setErrorData] = useState({})

	const handleAddFeedback = async (e) => {
		e.preventDefault()
		setErrorData(validate(formData))
		if (formData.message) {
			try {
				let response = await postRequest("enquiry/", formData)
				if (response.isSuccess) {
					toast.success("Enqiry Submitted Successfully")
					document.getElementById("add-feedback-form").reset()
					setFormData({})
				} else {
					toast.error("Request Failed")
				}
			} catch (e) {
				console.log("Error: ", e)
			}
		}
	}

	const handleFormChange = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
		// let data = { ...formData }
		// data[e.target.name] = e.target.value
		// setFormData(data)
	}

	const validate = (val) => {
		const errors = {}
		if (!val.name) {
			errors.name = "Name is Required"
		}
		if (!val.email) {
			errors.email = "Email is Required"
		}
		if (!val.mobile) {
			errors.mobile = "Contact is Required"
		}
		if (!val.address) {
			errors.address = "Address is Required"
		}
		if (!val.message) {
			errors.message = "Message is Required"
		}
		return errors
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
						<p style={{ color: "red" }}>{errorData.name}</p>
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email address
						</label>
						<input type="email" className="form-control" id="email" name="email" onChange={handleFormChange} aria-describedby="emailHelp" />
						<p style={{ color: "red" }}>{errorData.email}</p>
					</div>
					<div className="mb-3">
						<label htmlFor="mobile" className="form-label">
							Contant
						</label>
						<input type="text" className="form-control" id="mobile" name="mobile" onChange={handleFormChange} aria-describedby="emailHelp" />
						<p style={{ color: "red" }}>{errorData.mobile}</p>
					</div>
					<div className="mb-3">
						<label htmlFor="address" className="form-label">
							Address
						</label>
						<input type="text" className="form-control" id="address" name="address" onChange={handleFormChange} aria-describedby="emailHelp" />
						<p style={{ color: "red" }}>{errorData.address}</p>
					</div>
					<div className="mb-3">
						<label htmlFor="message" className="form-label">
							Message
						</label>
						<textarea type="text" className="form-control" id="message" name="message" onChange={handleFormChange} aria-describedby="emailHelp" />
						<p style={{ color: "red" }}>{errorData.message}</p>
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
