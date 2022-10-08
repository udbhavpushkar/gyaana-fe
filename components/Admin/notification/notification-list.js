import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { deleteRequest, getRequest } from "../../../utilities/rest_service"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import NotificationAdd from "./notification-add"
import { formatDate } from "../../../utilities/date_services"

const NotificationList = (props) => {
	const [mode, setMode] = useState("list")
	const [notificationData, setNotificationData] = useState([])

	useEffect(() => {
		handleGetNotificationList()
	}, [])

	const handleAddnotificationClick = (e) => {
		e.preventDefault()
		setMode("add")
	}

	const handleGetNotificationList = async () => {
		try {
			let response = await getRequest("notification/")
			if (response.isSuccess) {
				setNotificationData(response.data)
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	const handleAppendNotificationList = (data) => {
		let dataList = [...notificationData]
		dataList.unshift(data)
		setNotificationData(dataList)
	}

	const handleDeleteNotification = async (id, index) => {
		try {
			let response = await deleteRequest(`notification/${id}`)
			if (response.isSuccess) {
				let dataList = [...notificationData]
				dataList.splice(index, 1)
				setNotificationData(dataList)
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
						<p>Notification List</p>
						<div>
							<button onClick={handleAddnotificationClick}>+Add Notification</button>
						</div>
					</div>
					<div>
						<table className="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Title</th>
									<th scope="col">Description</th>
									<th scope="col">Creation Date</th>
									<th scope="col">Delete</th>
								</tr>
							</thead>
							<tbody>
								{notificationData.map((notification, index) => {
									return (
										<tr key={`notification-list-${notification._id}`}>
											<th scope="row">{index + 1}</th>
											<td>{notification.title}</td>
											<td>{notification.description}</td>
											<td>{formatDate(notification.createdAt)}</td>
											<td>
												<FontAwesomeIcon
													onClick={(e) => {
														handleDeleteNotification(notification._id, index)
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
					</div>
				</>
			)}
			{mode === "add" && <NotificationAdd addToList={handleAppendNotificationList} setMode={setMode} />}
		</div>
	)
}

export default NotificationList
