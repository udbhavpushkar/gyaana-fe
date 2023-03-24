import React from "react"
import AdminLayout from "../../../components/Admin"
import style from "./styles.module.css"

const TABLE_HEADERS = ["Name", "Class", "Section", "Roll No", "Contact", "City"]

const TABLE_DATA = [
	{
		name: "Sachin Srivastava",
		class: "IX",
		section: "A",
		roll_no: "12",
		city: "Faizabad",
		contact: "0000011111",
	},
	{
		name: "xyz",
		class: "xyz",
		section: "xyz",
		roll_no: "xyz",
		city: "xyz",
		contact: "xyz",
	},
	{
		name: "xyz",
		class: "xyz",
		section: "xyz",
		roll_no: "xyz",
		city: "xyz",
		contact: "xyz",
	},
	{
		name: "xyz",
		class: "xyz",
		section: "xyz",
		roll_no: "xyz",
		city: "xyz",
		contact: "xyz",
	},
	{
		name: "xyz",
		class: "xyz",
		section: "xyz",
		roll_no: "xyz",
		city: "xyz",
		contact: "xyz",
	},
	{
		name: "xyz",
		class: "xyz",
		section: "xyz",
		roll_no: "xyz",
		city: "xyz",
		contact: "xyz",
	},
]

const Student = () => {
	return (
		<AdminLayout>
			<div style={{ boxShadow: "0px 3px 6px rgba(128, 128, 128, 0.636)" }}>
				<form style={{ padding: "30px" }}>
					<div className="text-center mb-3">
						<h3>Search Student Information</h3>
						<hr />
					</div>
					<div className={` ${style.search_admissionNo}`}>
						<h5>Search by Admission Number</h5>
						<input type="text" placeholder="Enter Admission Number" />
					</div>
					<h5 className="text-center m-2">OR</h5>
					<div className={` ${style.search_admissionNo}`}>
						<h5>Search by Student Name/Class</h5>
						<div>
							<label className="m-2 "> Name </label>
							<input type="text" placeholder="Student Name" />
						</div>
						<div>
							<label className="m-2">Class </label>
							<input type="text" placeholder="Student Class" />
						</div>
						<div>
							<label className="mx-1 mt-2">Section </label>
							<input type="text" placeholder="Student Section" />
						</div>
					</div>
					<div className="text-center m-4">
						<button className="btn btn-success btn-sm">Search</button>
						<button className="btn btn-danger btn-sm mx-4">Clear</button>
					</div>
				</form>
				{/* showing search result in table start   */}
				<div style={{ padding: "20px" }}>
					<table class={`table ${style.selectStudent}`}>
						<thead>
							<tr>
								{TABLE_HEADERS.map((heading) => {
									return (
										<th key={{ heading }} scope="col">
											{heading}
										</th>
									)
								})}
							</tr>
						</thead>
						<tbody>
							{TABLE_DATA.map((item) => {
								return (
									<tr>
										<td>{item.name}</td>
										<td>{item.class}</td>
										<td>{item.section}</td>
										<td>{item.roll_no}</td>
										<td>{item.city}</td>
										<td>{item.contact}</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
				{/* showing search result in table end   */}
			</div>
		</AdminLayout>
	)
}

export default Student
