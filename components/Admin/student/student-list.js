import React, { useState } from "react"
import StudentAdd from "./student-add"

const StudentList = (props) => {
	const [mode, setMode] = useState("list")

	const handleAddStudentClick = (e) => {
		e.preventDefault()
		setMode("add")
	}

	return (
		<div>
			{mode === "list" && (
				<>
					<div className={`d-flex justify-content-between`} style={{ padding: "10px 20px" }}>
						<p>Student List</p>
						<div>
							<button onClick={handleAddStudentClick}>+Add Student</button>
						</div>
					</div>
					<div>
						<table class="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Teacher Name</th>
									<th scope="col">Email</th>
									<th scope="col">Contact</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</table>
					</div>
				</>
			)}
			{mode === "add" && <StudentAdd setMode={setMode} />}
		</div>
	)
}

export default StudentList
