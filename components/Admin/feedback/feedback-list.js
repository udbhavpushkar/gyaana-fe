import React, { useState, useEffect } from "react"
import { getRequest, deleteRequest } from "../../../utilities/rest_service"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons"

const FeedbackList = (props) => {
	const [mode, setMode] = useState("list")
	const [feedbackData, setFeedbackData] = useState([])

	useEffect(() => {
		handleGetFeedbackList()
	}, [])

	const handleGetFeedbackList = async () => {
		try {
			let response = await getRequest("feedback/")
			if (response.isSuccess) {
				setFeedbackData(response.data)
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	const handleDeleteClass = async (id, index) => {
		try {
			let response = await deleteRequest(`grade/${id}`)
			if (response.isSuccess) {
				let dataList = [...feedbackData]
				dataList.splice(index, 1)
				setFeedbackData(dataList)
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	const handleEditClassClick = (data, index) => {
		setEditData({ data, index })
		setMode("edit")
	}

	return (
		<div>
			{mode === "list" && (
				<>
					<div className={`d-flex justify-content-between`} style={{ padding: "10px 20px" }}>
						<p>Feedback List</p>
					</div>
					<div>
						<table className="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Name</th>
									<th scope="col">Contacts</th>
									<th scope="col">Message</th>
								</tr>
							</thead>
							<tbody>
								{feedbackData.map((data, index) => {
									return (
										<tr key={`class-${index}`}>
											<th scope="row">{index + 1}</th>
											<td>{data.name}</td>
											<td>
												{data.email}
												<br />
												{data.mobile}
												<br />
												{data.address}
											</td>
											<td>{data.message}</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</>
			)}
		</div>
	)
}

export default FeedbackList
