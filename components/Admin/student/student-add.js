import React, { useEffect, useState } from "react"

const StudentAdd = (props) => {
	const handleAddStudent = (e) => {
		e.preventDefault()
		props.setMode("list")
	}

	return (
		<div>
			<div>
				<h4 className="text-center">Add New Student</h4>
			</div>
			<div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
				<form onSubmit={handleAddStudent} style={{ display: "flex", flexDirection: "column", width: "30%" }}>
					<label>Name :</label>
					<input type="text" name="name" placeholder="Enter Name" />
					<label>Email :</label>
					<input type="text" name="email" placeholder="Enter Email" />
					<label>Phone :</label>
					<input type="text" name="phone" placeholder="Enter Phone" />
					<label>Address :</label>
					<input type="text" name="address" placeholder="Enter Address" />
					<label>Class :</label>
					<input type="text" name="class" placeholder="Enter Class" />
					<div>
						<button className="btn btn-success my-4">Add Student</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default StudentAdd
