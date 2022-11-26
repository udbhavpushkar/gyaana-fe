import React, { useState } from "react"
import TeacherLayout from "../../components/Teacher"
import style from "./notice.module.css"

const notice = () => {
	const [tabName, setTabName] = useState(1)

	const handleTab = (num) => {
		setTabName(num)
	}
	return (
		<TeacherLayout>
			<div>
				<div>
					<div className="my-4">
						<button className={tabName == 1 ? style.activeTab : style.tabButton} onClick={() => handleTab(1)}>
							Add Notice
						</button>
						<button className={tabName == 2 ? style.activeTab : style.tabButton} onClick={() => handleTab(2)}>
							History
						</button>
					</div>
					<div>
						{tabName === 1 && (
							<div>
								<div className={`${style.noticeTitle} py-2`}>
									<h3 className="text-center">Add Notice</h3>
								</div>
								<div className="col-md-6">
									<div>
										<label className="form-label">Notice</label>
										<textarea className="form-control" placeholder="Enter Notice"></textarea>
									</div>
									<div>
										<label for="inputState" className="form-label">
											Send To
										</label>
										<select id="inputState" className="form-select">
											<option selected>Whole Class</option>
											<option>Mohit</option>
											<option>Sachin</option>
											<option>Udbhav</option>
											<option>Suraj</option>
											<option>Nivesh</option>
										</select>
									</div>
									<div className="text-center my-4">
										<button className="btn btn-success">Add</button>
									</div>
								</div>
							</div>
						)}
					</div>
					<div>
						{tabName === 2 && (
							<div className="col-md-12">
								<div className={`${style.noticeTitle} py-2`}>
									<h4 className="text-center">History</h4>
								</div>
								<div>
									<table className="table">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">Message</th>
												<th scope="col">Sent To</th>
												<th scope="col">Date</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">1</th>
												<td>Meeting...</td>
												<td>Class</td>
												<td>10-11-2022</td>
											</tr>
											<tr>
												<th scope="row">2</th>
												<td>Result...</td>
												<td>Class</td>
												<td>2-11-2022</td>
											</tr>
											<tr>
												<th scope="row">3</th>
												<td>Test...</td>
												<td>Mohit</td>
												<td>20-10-2022</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</TeacherLayout>
	)
}

export default notice
