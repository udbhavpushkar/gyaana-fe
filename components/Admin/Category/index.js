import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { deleteRequest, getRequest, postRequest } from "../../../utilities/rest_service"
import Collapsable from "../../Custom/Collapsable"
import SetupForm from "../../SetupForm/index"

const instituteHeader = [
	{ label: "Category Name", type: "text", name: "name" }
]

const Category = () => {

	const [categoryList, setCategoryList] = useState([])
	const [formData, setFormData] = useState(null)

	useEffect(() => {
		getCategoryList()
	}, [])

	const getCategoryList = async () => {
		try {
			let response = await getRequest(`category`)
			if (response.isSuccess) {
				setCategoryList(response.data)
			}
		} catch (error) {
			console.error(error);
		}
	}

	const createCategory = async () => {
		try {
			let response = await postRequest(`category`, formData)
			if (response.isSuccess) {
				getCategoryList()
				toast.success("Created Successfully")
				setFormData(null)
			} else {
				toast.error("Something went Wrong")
			}
		} catch (error) {
			console.error(error);
		}
	}

	const deleteCategory = async (id) => {
		try {
			let response = await deleteRequest(`category/${id}`)
			if (response.isSuccess) {
				getCategoryList()
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
				<h3>Category</h3>
				<hr />
			</div>
			<Collapsable heading="Create Category">
				<SetupForm
					data={instituteHeader}
					existingData={formData}
					setExistingData={setFormData}
					handleSubmitForm={createCategory}
				/>
			</Collapsable>

			<Collapsable heading="List">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							{/* <th scope="col">Edit</th> */}
							<th scope="col">Delete</th>
						</tr>
					</thead>
					<tbody>
						{categoryList.map((data, index) => {
							return (
								<tr key={`year-${index}`}>
									<th scope="row">{index + 1}</th>
									<td>{data.name}</td>
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
												deleteCategory(data._id)
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

export default Category
