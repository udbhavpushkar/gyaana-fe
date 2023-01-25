import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { formatDate } from "../../../utilities/date_services"
import { deleteRequest, getRequest, postRequest } from "../../../utilities/rest_service"
import Collapsable from "../../Custom/Collapsable"
import SetupForm from "./../../SetupForm/index"

const instituteHeader = [
	{ label: "Academic Year Name", type: "text", name: "name" },
	{ label: "Start Date", type: "date", name: "startDate" },
	{ label: "End Date", type: "date", name: "endDate" },
]

const AcademicYear = () => {

	const [yearList, setYearList] = useState([])
	const [formData, setFormData] = useState(null)

	useEffect(() => {
		getYearList()
	}, [])

	const getYearList = async () => {
		try {
			let response = await getRequest(`academic-year`)
			if (response.isSuccess) {
				setYearList(response.data)
			}
		} catch (error) {
			console.error(error);
		}
	}

	const createYear = async () => {
		try {
			let response = await postRequest(`academic-year`, formData)
			if (response.isSuccess) {
				getYearList()
				toast.success("Created Successfully")
			} else {
				toast.error("Something went Wrong")
			}
		} catch (error) {
			console.error(error);
		}
	}

	const deleteYear = async (id) => {
		try {
			let response = await deleteRequest(`academic-year/${id}`)
			if (response.isSuccess) {
				getYearList()
				toast.success("Deleted Successfully")
			} else {
				toast.error("Something went Wrong")
			}
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div>
			<div className="text-center mb-3">
				<h3>Academic Year</h3>
				<hr />
			</div>
			<Collapsable heading="Create Academic Year">
				<SetupForm
					data={instituteHeader}
					existingData={formData}
					setExistingData={setFormData}
					handleSubmitForm={createYear}
				/>
			</Collapsable>

			<Collapsable heading="List">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Start Date</th>
							<th scope="col">End Date</th>
							<th scope="col">Edit</th>
							<th scope="col">Delete</th>
							<th scope="col">Active/Inactive</th>
						</tr>
					</thead>
					<tbody>
						{yearList.map((data, index) => {
							return (
								<tr key={`year-${index}`}>
									<th scope="row">{index + 1}</th>
									<td>{data.name}</td>
									<td>{formatDate(data.startDate)}</td>
									<td>{formatDate(data.endDate)}</td>
									<td>
										<FontAwesomeIcon
											onClick={(e) => {
												// handleEditClassClick(data, index)
											}}
											className={`pointer text-info`}
											icon={faUserEdit}
										/>
									</td>
									<td>
										<FontAwesomeIcon
											onClick={(e) => {
												deleteYear(data._id)
											}}
											className={`pointer text-danger`}
											icon={faTrashAlt}
										/>
									</td>
									<td></td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</Collapsable>



		</div>
	)
}

export default AcademicYear
