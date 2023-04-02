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
			let response = await getRequest("enquiry/?type=admission")
			if (response.isSuccess) {
				setFeedbackData(response.data)
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	return (
		<div>
			{mode === "list" && (
				<>
					<div className={`d-flex justify-content-between`} style={{ padding: "10px 20px" }}>
						<p>Enquiry List</p>
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
