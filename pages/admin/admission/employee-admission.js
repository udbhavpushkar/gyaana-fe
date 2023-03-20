import React from "react"
import AdminLayout from "../../../components/Admin"

const EmployeeAdmission = () => {
	return (
		<AdminLayout>
			<div style={{ boxShadow: "0px 3px 6px rgba(128, 128, 128, 0.636)" }}>
				<div className="text-center mb-3">
					<h3>Employee Admission</h3>
					<hr />
				</div>
				<div>
					<form style={{ padding: "30px" }}>
						<h4>Official Details-</h4>
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
							<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
								Employee Number
							</label>
							<div className="col-sm-8 my-2">
								<input type="text" className="form-control" />
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-form-label"
							>
								Joining Date
							</label>
							<div className="col-sm-8 my-2">
								<input type="date" className="form-control" />
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-form-label"
							>
								Subject
							</label>
							<div className="col-sm-8 my-2">
								<select
									className={` form-control`}
									id="exampleFormControlSelect1"
								>
									<option className={` form-control`}>Maths</option>
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
								Category
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
								Position
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
						<h4>Personal Details-</h4>
						<div className="form-group row">
							<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
								First Name
							</label>
							<div className="col-sm-8 my-2">
								<input type="text" className="form-control" />
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
								Last Name
							</label>
							<div className="col-sm-8 my-2">
								<input type="text" className="form-control" />
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
								Date of Birth
							</label>
							<div className="col-sm-8 my-2">
								<input type="date" className="form-control" />
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-form-label"
							>
								Gender
							</label>
							<div className="col-sm-8 my-2">
								<select
									className={` form-control`}
									id="exampleFormControlSelect1"
								>
									<option className={` form-control`}>Male</option>
									<option className={` form-control`}>Female</option>
									<option className={` form-control`}>other</option>
								</select>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
								Aadhar Number
							</label>
							<div className="col-sm-8 my-2">
								<input type="number" className="form-control" />
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-form-label0"
							>
								Marital Status
							</label>
							<div className="col-sm-8 my-2">
								<select
									className={` form-control`}
									id="exampleFormControlSelect10"
								>
									<option className={` form-control`}>Married</option>
									<option className={` form-control`}>Unmarried</option>
								</select>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
								Nationality
							</label>
							<div className="col-sm-8 my-2">
								<input
									type="text"
									className="form-control"
									placeholder="India"
								/>
							</div>
						</div>
						<div className="text-center my-4">
							<button style={{ width: "150px" }} className="btn btn-success">
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</AdminLayout>
	)
}

export default EmployeeAdmission
