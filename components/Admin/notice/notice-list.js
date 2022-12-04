import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { deleteRequest, getRequest } from "../../../utilities/rest_service"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import NoticeAdd from "./notice-add"
import { formatDate } from "../../../utilities/date_services"
import LoadingSpinner from "../../LoadingSpinner"

const NoticeList = (props) => {
	const [mode, setMode] = useState("list")
	const [noticeData, setNoticeData] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		handleGetNoticeList()
	}, [])

	const handleAddnoticeClick = (e) => {
		e.preventDefault()
		setMode("add")
	}

	const handleGetNoticeList = async () => {
		setIsLoading(true)
		try {
			let response = await getRequest("notice/")
			if (response.isSuccess) {
				setNoticeData(response.data)
				console.log("dataa", noticeData)
			}
		} catch (e) {
			console.log("Error", e)
		}
		setIsLoading(false)
	}

	const handleAppendNoticeList = (data) => {
		let dataList = [...noticeData]
		dataList.unshift(data)
		setNoticeData(dataList)
	}

	const handleDeleteNotice = async (id, index) => {
		try {
			let response = await deleteRequest(`notice/${id}`)
			if (response.isSuccess) {
				let dataList = [...noticeData]
				dataList.splice(index, 1)
				setNoticeData(dataList)
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<div>
					{mode === "list" && (
						<>
							<div className={`d-flex justify-content-between`} style={{ padding: "10px 20px" }}>
								<p>Notice List</p>
								<div>
									<button className="btn btn-primary" onClick={handleAddnoticeClick}>
										+Add Notice
									</button>
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
										{noticeData.map((notice, index) => {
											return (
												<tr key={`notice-list-${notice._id}`}>
													<th scope="row">{index + 1}</th>
													<td>{notice.title}</td>
													<td>{notice.description}</td>
													<td>{formatDate(notice.createdAt)}</td>
													<td>
														<FontAwesomeIcon
															onClick={(e) => {
																handleDeleteNotice(notice._id, index)
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
					{mode === "add" && <NoticeAdd addToList={handleAppendNoticeList} setMode={setMode} />}
				</div>
			)}
		</>
	)
}

export default NoticeList
