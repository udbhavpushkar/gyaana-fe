import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { formatDate } from "../../../utilities/date_services"
import { deleteRequest, getRequest, postRequest } from "../../../utilities/rest_service"
import Collapsable from "../../Custom/Collapsable"
import SetupForm from "../../SetupForm/index"

const instituteHeader = [
	{ label: "Select Category", type: "dropdown", name: "category", list: [] },
	{ label: "Position Name", type: "text", name: "name" },
]

const Position = () => {

	const [formDataArray, setFormDataArray] = useState(instituteHeader)
	const [positionList, setPositionList] = useState([])
	const [formData, setFormData] = useState(null)

	useEffect(() => {
		getPositionList()
		getCategoryList()
	}, [])

	const getCategoryList = async () => {
		try {
			let response = await getRequest(`category`)
			if (response.isSuccess) {
				let data = [...formDataArray]
				data[0].list = response.data
				setFormDataArray(data)
			}
		} catch (error) {
			console.error(error);
		}
	}

	const getPositionList = async () => {
		try {
			let response = await getRequest(`position`)
			if (response.isSuccess) {
				setPositionList(response.data)
			}
		} catch (error) {
			console.error(error);
		}
	}

	const createPosition = async () => {
		try {
			let response = await postRequest(`position`, formData)
			if (response.isSuccess) {
				getPositionList()
				toast.success("Created Successfully")
				setFormData(null)
			} else {
				toast.error("Something went Wrong")
			}
		} catch (error) {
			console.error(error);
		}
	}

	const deletePosition = async (id) => {
		try {
			let response = await deleteRequest(`position/${id}`)
			if (response.isSuccess) {
				getPositionList()
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
				<h3>Position</h3>
				<hr />
			</div>
			<Collapsable heading="Create Position">
				<SetupForm
					data={formDataArray}
					existingData={formData}
					setExistingData={setFormData}
					handleSubmitForm={createPosition}
				/>
			</Collapsable>

			<Collapsable heading="List">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Category</th>
							{/* <th scope="col">Edit</th> */}
							<th scope="col">Delete</th>
						</tr>
					</thead>
					<tbody>
						{positionList.map((data, index) => {
							return (
								<tr key={`year-${index}`}>
									<th scope="row">{index + 1}</th>
									<td>{data.name}</td>
									<td>{data?.category?.name}</td>
									{/* <td>
										<FontAwesomeIcon
											onClick={(e) => {
												handleEditClassClick(data, index)
											}}
											className={`pointer text-info`}
											icon={faUserEdit}
										/>
									</td> */}
									<td>
										<FontAwesomeIcon
											onClick={(e) => {
												deletePosition(data._id)
											}}
											className={`pointer text-danger`}
											icon={faTrashAlt}
										/>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</Collapsable>



		</div>
	)
}

export default Position
