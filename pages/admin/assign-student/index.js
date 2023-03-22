import React from "react"
import AdminLayout from "../../../components/Admin"
import style from "./style.module.css"

const AssignStudent = () => {
	return (
		<AdminLayout>
			<div style={{ boxShadow: "0px 3px 6px rgba(128, 128, 128, 0.636)" }}>
				<div className="text-center mb-3">
					<h3>Assign Students to Classes</h3>
					<hr />
				</div>
				<div>
					<form style={{ padding: "30px" }}>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-form-label"
							>
								Academic Year
							</label>
							<div className="col-sm-8 my-2">
								<select
									className={` form-control`}
									id="exampleFormControlSelect1"
								>
									<option className={` form-control`}>0</option>
									<option className={` form-control`}>1</option>
									<option className={` form-control`}>2</option>
									<option className={` form-control`}>3</option>
									<option className={` form-control`}>4</option>
									<option className={` form-control`}>5</option>
								</select>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-form-label"
							>
								Select Class
							</label>
							<div className="col-sm-8 my-2">
								<select
									className={` form-control`}
									id="exampleFormControlSelect1"
								>
									<option className={` form-control`}>0</option>
									<option className={` form-control`}>1</option>
									<option className={` form-control`}>2</option>
									<option className={` form-control`}>3</option>
									<option className={` form-control`}>4</option>
									<option className={` form-control`}>5</option>
								</select>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-form-label"
							>
								Select Section
							</label>
							<div className="col-sm-8 my-2">
								<select
									className={` form-control`}
									id="exampleFormControlSelect1"
								>
									<option className={` form-control`}>0</option>
									<option className={` form-control`}>1</option>
									<option className={` form-control`}>2</option>
									<option className={` form-control`}>3</option>
									<option className={` form-control`}>4</option>
									<option className={` form-control`}>5</option>
								</select>
							</div>
						</div>
						<h3>Select Students</h3>

						<table class={`table ${style.selectStudent}`}>
							<thead>
								<tr>
									<th scope="col">
										<span className="mx-2"> Select All</span>
										<input type="checkbox" />
									</th>
									<th scope="col">Name</th>
									<th scope="col">Prev Marks(%)</th>
									<th scope="col">Roll No</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input type="checkbox" />
									</td>

									<td>Mark</td>
									<td>85</td>
									<td>01</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" />
									</td>
									<td>Mark</td>
									<td>85</td>
									<td>02</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" />
									</td>
									<td>Mark</td>
									<td>85</td>
									<td>03</td>
								</tr>
							</tbody>
						</table>

						<div className="text-center my-4">
							<button style={{ width: "150px" }} className="btn btn-success">
								Assign to Section
							</button>
						</div>
					</form>
				</div>
			</div>
		</AdminLayout>
	)
}

export default AssignStudent
