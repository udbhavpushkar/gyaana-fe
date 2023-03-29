import React, { useEffect, useState } from "react"
import AdminLayout from "../../../components/Admin"
import Collapsable from "../../../components/Custom/Collapsable"
import { getRequest, patchRequest } from "../../../utilities/rest_service"
import style from "./styles.module.css"

const Student = () => {
	const [isFilter, setISFiletr] = useState(false)
	const [searchText, setSearchText] = useState("")
	const [studentList, setStudentList] = useState([])
	const [filterStudentList, setFilterStudentList] = useState([])

	useEffect(() => {
		fetchStudent()
	}, [])

	const fetchStudent = async (e) => {
		try {
			let response = await getRequest(`student/`)
			if (response.isSuccess) {
				setStudentList(response.data)
			}
		} catch (error) {
			console.log(error);
		}
	}

	const handleSearch = (e) => {
		e.preventDefault()
		let text = e.target.value
		setSearchText(text)
		let data = studentList.filter((d => {
			let result = d?.admissionNo?.includes(text) || d?.grade?.name?.includes(text) || d?.gender?.includes(text) || d?.userId?.firstName?.includes(text) || d?.userId?.lastName?.includes(text) || d?.userId?.email?.includes(text);
			return result
		}))
		if (text) {
			setFilterStudentList(data)
		} else {
			setFilterStudentList([])
		}
	}

	const handleToggleActive = async (e, id, active) => {
		try {
			//requires BE changes, wont work for now
			let response = await patchRequest(`student/${id}`, { disabled: active })
			if (response.isSuccess) {
				let data = [...employeeList]
				let index = data.findIndex(d => d._id == id)
				if (data[index]) {
					data[index] = response.data
					setEmployeeList(data)
				}
			}
			console.log(e.target.value);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<AdminLayout>
			<div style={{ boxShadow: "0px 3px 6px rgba(128, 128, 128, 0.636)" }}>
				<div className="text-center mb-3">
					<h3>Search Student</h3>
					<hr />
				</div>
				<div>
					<div>
						<div className="form-group row">
							<label
								className="col-sm-2 col-form-label"
							>
								Filter fields
							</label>
							<div className="col-sm-8 my-2">
								<input onChange={handleSearch} type="text" className="form-control" />
							</div>
						</div>

					</div>
				</div>

				<Collapsable heading="Student List">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Admission No</th>
								<th scope="col">Name</th>
								<th scope="col">Class</th>
								<th scope="col">Section</th>
								<th scope="col">Active/Inactive</th>
							</tr>
						</thead>
						<tbody>
							{(searchText ? filterStudentList : studentList).map((data, index) => {
								let active = !data?.userId?.disabled
								let btnText = active ? "Active" : "Inactive"
								return <tr key={data._id}>
									<td>{index + 1}</td>
									<td>{data?.admissionNo}</td>
									<td>{data?.userId?.firstName} {data?.userId?.lastName}</td>
									<td>{data?.grade?.name}</td>
									<td>{data?.section?.name}</td>
									<td>
										<button
											className={`btn btn-outline ${active ? 'btn-outline-success' : 'btn-outline-danger'}`}
											onClick={(e) => { handleToggleActive(e, data?._id, active) }}
										>{btnText}</button>
									</td>
								</tr>
							})}
						</tbody>
					</table>
				</Collapsable>
				{/* showing search result in table end   */}
			</div>
		</AdminLayout>
	)
}

export default Student
