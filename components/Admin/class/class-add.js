import React, { useEffect, useState } from "react"

const ClassAdd = (props) => {
	const handleAddClass = (e) => {
		e.preventDefault()
		props.setMode("list")
	}

	return (
		<div>
			<div>
				<h4 className="text-center">Add New Class</h4>
			</div>
			<div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
				<form onSubmit={handleAddClass} style={{ display: "flex", flexDirection: "column", width: "30%" }}>
					<label>Name :</label>
					<input type="text" name="name" placeholder="Enter Name" />
					<label>Section :</label>
					<input type="text" name="section" placeholder="Enter Section" />
					<label>Session :</label>
					<input type="text" name="session" placeholder="Enter Session" />
					<div>
						<button className="btn btn-success my-4">Add Class</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ClassAdd
