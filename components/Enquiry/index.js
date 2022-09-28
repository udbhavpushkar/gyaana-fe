import React from "react"
import styles from "./styles.module.css"
import Image from "next/image"
import Logo from "../../assets/images/unnamed.jpg"

const Enquiry = () => {
	return (
		<div className="row" style={{ backgroundColor: "rgb(127, 81, 127)", color: "white" }}>
			<div className="col-md-6 p-4 text-center">
				<Image src={Logo} height={540} width={500} />
			</div>
			<div className="col-md-6 p-4">
				<h2 className="styles.heading">Enquiry Form</h2>
				<form>
					<div className="mb-3">
						<label for="name" className="form-label">
							Full Name
						</label>
						<input type="text" className="form-control" id="name" aria-describedby="emailHelp" />
					</div>
					<div className="mb-3">
						<label for="email" className="form-label">
							Email address
						</label>
						<input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
					</div>
					<div className="mb-3">
						<label for="contact" className="form-label">
							Contant
						</label>
						<input type="text" className="form-control" id="contact" aria-describedby="emailHelp" />
					</div>
					<div className="mb-3">
						<label for="address" className="form-label">
							Address
						</label>
						<input type="text" className="form-control" id="address" aria-describedby="emailHelp" />
					</div>
					<div className="mb-3">
						<label for="message" className="form-label">
							Message
						</label>
						<textarea type="text" className="form-control" id="message" aria-describedby="emailHelp" />
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
