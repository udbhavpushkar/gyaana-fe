import React, { useEffect, useState } from "react"
import AdminLayout from "../../../components/Admin"
import { handleFormData } from "../../../utilities/form_services"
import { getRequest, postRequest } from "../../../utilities/rest_service"
import { toast } from "react-toastify"

const EmployeeAdmission = () => {
	const [academicYear, setAcademicYear] = useState([])
	const [subjects, setSubjects] = useState([])
	const [subjectsChecked, setSubjectsChecked] = useState(new Set())
	const [category, setCategory] = useState([])
	const [position, setPosition] = useState([])
	const [activeCategory, setActiveCategory] = useState([])
	const [formData, setFormData] = useState({})

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

	const handleOnSubjectsChange = (e, id) => {
		let checkedSet = new Set(JSON.parse(JSON.stringify([...subjectsChecked])))
		if (e.target.checked) {
			checkedSet.add(id)
		} else {
			checkedSet.delete(id)
		}
		setSubjectsChecked(checkedSet)
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

	const handleInputChange = (e) => {
		handleFormData(e, formData, setFormData)
	}

	const createEmployee = async (e) => {
		e.preventDefault()
		let payload = { ...formData }
		let subjectsPayload = Array.from(subjectsChecked)
		payload["subjects"] = subjectsPayload
		try {
			let response = await postRequest(`employee/register`, payload)
			if (response.isSuccess) {
				toast.success("Created Successfully")
				e.target.reset()
			} else {
				toast.error("Something went Wrong")
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
							<label htmlFor="year-list" className="col-sm-2 col-form-label">
								Academic Year
							</label>
							<div className="col-sm-8 my-2">
								<select
									onChange={handleInputChange}
									className={`form-control`}
									id="year-list"
									name="academicYear"
									required
								>
									<option value="">Please Select</option>
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
								<input
									onChange={handleInputChange}
									type="text"
									name="employeeNo"
									className="form-control"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="joining-date" className="col-sm-2 col-form-label">
								Joining Date
							</label>
							<div className="col-sm-8 my-2">
								<input
									onChange={handleInputChange}
									type="date"
									name="joiningDate"
									id="joining-date"
									className="form-control"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="subject-list" className="col-sm-2 col-form-label">
								Subject
							</label>
							<div className="col-sm-8 my-2">
								{subjects.map((data, index) => {
									return <div key={`subjects_${data._id}`}>
										<input
											type="checkbox"
											id={`custom-checkbox-${index}`}
											name={data._id}
											value={data._id}
											onChange={(e) => handleOnSubjectsChange(e, data._id)}
										/>
										<label htmlFor={`custom-checkbox-${index}`}>{data.name}</label>
									</div>
								})}
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="category-list"
								className="col-sm-2 col-form-label"
							>
								Category
							</label>
							<div className="col-sm-8 my-2">
								<select
									onChange={(e) => {
										setActiveCategory(e.target.value)
										handleInputChange(e)
									}}
									className={`form-control`}
									id="category-list"
									name="category"
									required
								>
									<option value="">Please Select</option>
									{category.map((data) => {
										return (
											<option value={data._id} className={`form-control`}>
												{data.name}
											</option>
										)
									})}
								</select>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="position-list"
								className="col-sm-2 col-form-label"
							>
								Position
							</label>
							<div className="col-sm-8 my-2">
								<select
									onChange={handleInputChange}
									name="position"
									className={`form-control`}
									id="position-list"
									required
								>
									<option value="">Please Select</option>
									{position.map((data) => {
										return (
											<option value={data._id} className={`form-control`}>
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
								<input
									onChange={handleInputChange}
									type="text"
									name="firstName"
									className="form-control"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
								Last Name
							</label>
							<div className="col-sm-8 my-2">
								<input
									onChange={handleInputChange}
									type="text"
									name="lastName"
									className="form-control"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
								Date of Birth
							</label>
							<div className="col-sm-8 my-2">
								<input
									onChange={handleInputChange}
									type="date"
									name="dob"
									className="form-control"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="gender-list" className="col-sm-2 col-form-label">
								Gender
							</label>
							<div className="col-sm-8 my-2">
								<select
									onChange={handleInputChange}
									className={`form-control`}
									id="gender-list"
									name="gender"
									required
								>
									<option value="">Please Select</option>
									<option value="male" className={`form-control`}>
										Male
									</option>
									<option value="female" className={`form-control`}>
										Female
									</option>
									<option value="others" className={`form-control`}>
										other
									</option>
								</select>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
								Email
							</label>
							<div className="col-sm-8 my-2">
								<input
									onChange={handleInputChange}
									type="email"
									name="email"
									className="form-control"
									required
								/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
								Address
							</label>
							<div className="col-sm-8 my-2">
								<input
									onChange={handleInputChange}
									type="text"
									name="address"
									className="form-control"
									required
								/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
								PinCode
							</label>
							<div className="col-sm-8 my-2">
								<input
									onChange={handleInputChange}
									type="text"
									name="pincode"
									className="form-control"
									required
								/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
								Aadhar Number
							</label>
							<div className="col-sm-8 my-2">
								<input
									onChange={handleInputChange}
									type="text"
									name="aadhaar"
									className="form-control"
									required
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="married-status"
								className="col-sm-2 col-form-label0"
							>
								Marital Status
							</label>
							<div className="col-sm-8 my-2">
								<select
									onChange={handleInputChange}
									className={`form-control`}
									id="married-status"
									name="maritalStatus"
									required
								>
									<option value="">Please Select</option>
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
									onChange={handleInputChange}
									type="text"
									className="form-control"
									placeholder="India"
									name="nationality"
								/>
							</div>
						</div>
						<div className="text-center my-4">
							<button
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
