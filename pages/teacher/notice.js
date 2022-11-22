import React from "react"
import TeacherLayout from "../../components/Teacher"

const notice = () => {
	return (
		<TeacherLayout>
			<div className="row">
				<div className="col-md-5">
					<div className="m-4">
						<div>
							<h3>Add Notice</h3>
						</div>

						<div>
							<label className="form-label">Notice</label>
							<textarea className="form-control" placeholder="Enter Notice"></textarea>
						</div>
						<div>
							<label for="inputState" className="form-label">
								Sent To
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

						<div className="my-4">
							<button className="btn btn-success">Add</button>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="my-4">
						<h4>History</h4>
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
				</div>
			</div>
		</TeacherLayout>
	)
}

export default notice
