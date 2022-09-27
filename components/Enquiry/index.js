import React from "react"
import styles from "./styles.module.css"
import Image from "next/image"
import Logo from "../../assets/images/loginImg.jpg"

const Enquiry = () => {
	return (
		<div className="row">
			<div className="col-md-6 p-4 text-center">
				<Image src={Logo} height={500} width={400} />
			</div>
			<div className="col-md-6 p-4">
				<h2 className="styles.heading">Enquiry Form</h2>
				<form>
					<div class="mb-3">
						<label for="name" class="form-label">
							Full Name
						</label>
						<input type="text" class="form-control" id="name" aria-describedby="emailHelp" />
					</div>
					<div class="mb-3">
						<label for="email" class="form-label">
							Email address
						</label>
						<input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
					</div>
					<div class="mb-3">
						<label for="contact" class="form-label">
							Contant
						</label>
						<input type="text" class="form-control" id="contact" aria-describedby="emailHelp" />
					</div>
					<div class="mb-3">
						<label for="address" class="form-label">
							Address
						</label>
						<input type="text" class="form-control" id="address" aria-describedby="emailHelp" />
					</div>
					<div class="mb-3">
						<label for="message" class="form-label">
							Message
						</label>
						<textarea type="text" class="form-control" id="message" aria-describedby="emailHelp" />
					</div>

					<button type="submit" class="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default Enquiry
