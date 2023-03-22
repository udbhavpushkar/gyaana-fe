import React, { useEffect, useState } from "react"
import AdminLayout from "../../../components/Admin"
import { getRequest, postRequest } from "../../../utilities/rest_service"

const EmployeeAdmission = () => {
	const [academicYear, setAcademicYear] = useState([])
	const [subjects, setSubjects] = useState([])
	const [category, setCategory] = useState([])
	const [position, setPosition] = useState([])
	const [activeCategory, setActiveCategory] = useState([])

	useEffect(() => {
		getAcademicYearList()
		getSubjects()
		getCategory()
	}, [])

	useEffect(() => {
		getPosition(activeCategory)
	}, [activeCategory])

	const getAcademicYearList = async () => {
		try {
			let response = await getRequest(`academic-year`)
			if (response.isSuccess) {
				setAcademicYear(response.data)
			}
		} catch (error) {
			console.error(error)
		}
	}

	const getSubjects = async () => {
		try {
			let response = await getRequest(`subject`)
			if (response.isSuccess) {
				setSubjects(response.data)
			}
		} catch (error) {
			console.error(error)
		}
	}

	const getCategory = async () => {
		try {
			let response = await getRequest(`category`)
			if (response.isSuccess) {
				setCategory(response.data)
			}
		} catch (error) {
			console.error(error)
		}
	}

	const getPosition = async (categoryId) => {
		try {
			let response = await getRequest(`position/?category=${categoryId}`)
			if (response.isSuccess) {
				setPosition(response.data)
			}
		} catch (error) {
			console.error(error)
		}
	}
	const d = {
		userId: "3434",
		academicYear: ["2020-21"],
		category: ["category"],
		position: ["position"],
		joiningDate: "05/05/2023",
		employeeNo: "1234",
		gender: "male",
		aadhaar: "1234456787",
		dob: "05/05/2023",
		maritalStatus: "single",
		address: "HN 155 faizbad",
		pincode: "232423",
		religion: "xyz",
		caste: "xyz",
		nationality: "xyz",
		blood_group: "xyz",
		identification_mark: "xyz",
		fatherName: "xyz",
		motherName: "xyz",
		spouseName: "xyz",
		fatherOccupation: "xyz",
		parentMobile: "xyz",
		parentEmail: "xyz",
		previousCompany: "xyz",
		totalExperience: "xyz",
	}

	const createEmployee = async (e) => {
		e.preventDefault()
		try {
			let response = await postRequest(`employee/register`, d)
			if (response.isSuccess) {
				console.log("response", response)
				// toast.success("Created Successfully")
			} else {
				// toast.error("Something went Wrong")
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<AdminLayout>
			<div style={{ boxShadow: "0px 3px 6px rgba(128, 128, 128, 0.636)" }}>
				<div className="text-center mb-3">
					<h3>Employee Admission</h3>
					<hr />
				</div>
				<div>
					<form onSubmit={createEmployee} style={{ padding: "30px" }}>
						<h4>Official Details-</h4>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-form-label"
							>
								Academic Year
							</label>
							<div className="col-sm-8 my-2">
								<select className={` form-control`} id="year-list">
									{academicYear.map((data) => {
										return (
											<option value={data._id} className={` form-control`}>
												{data.name}
											</option>
										)
									})}
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
								<select className={` form-control`} id="subject-list">
									{subjects.map((data) => {
										return (
											<option value={data._id} className={` form-control`}>
												{data.name}
											</option>
										)
									})}
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
									onChange={(e) => {
										setActiveCategory(e.target.value)
									}}
									className={` form-control`}
									id="category-list"
								>
									{category.map((data) => {
										return (
											<option value={data._id} className={` form-control`}>
												{data.name}
											</option>
										)
									})}
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
								<select className={` form-control`} id="position-list">
									{position.map((data) => {
										return (
											<option value={data._id} className={` form-control`}>
												{data.name}
											</option>
										)
									})}
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
							<button
								onClick={createEmployee}
								type="submit"
								style={{ width: "150px" }}
								className="btn btn-success"
							>
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
