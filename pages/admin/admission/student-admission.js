import React, { useEffect, useState } from "react"
import AdminLayout from "../../../components/Admin"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./style.module.css"
import { getRequest, postRequest } from "../../../utilities/rest_service"
import { handleFormData } from "../../../utilities/form_services"
import { toast } from "react-toastify"
import religion from "./../../../assets/constant"

const StudentAdmission = () => {
	const [academicYear, setAcademicYear] = useState([])
	const [activeYear, setActiveYear] = useState(null)
	const [castInd, setCastInd] = useState(0)
	const [grades, setGrades] = useState([])
	const [formData, setFormData] = useState({})

	const handleReligion = (ind) => {
		for (let i = 0; i < religion.length; i++) {
			if (religion[i].name == ind.target.value) {
				setCastInd(i)
				break
			}
		}
	}

	useEffect(() => {
		getAcademicYearList()
	}, [])

	useEffect(() => {
		getClasses(activeYear)
	}, [activeYear])

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

	const getClasses = async (year) => {
		try {
			let response = await getRequest(`grade/?year=${year}`)
			if (response.isSuccess) {
				setGrades(response.data)
			}
		} catch (error) {
			console.error(error)
		}
	}

	const handleInputChange = (e) => {
		handleFormData(e, formData, setFormData)
	}

	const createStudent = async (e) => {
		e.preventDefault()
		try {
			let response = await postRequest(`student/register`, formData)
			if (response.isSuccess) {
				console.log("response", response)
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
			<div className={style.student_admission_box}>
				<div className="text-center p-3">
					<h3
						style={{
							backgroundColor: "purple",
							color: "white",
							borderRadius: "8px",
						}}
						className="p-2"
					>
						Student Admission
					</h3>
					<hr />
				</div>
				<div>
					<form onSubmit={createStudent} className={style.form_container}>
						<h4>Official Details-</h4>
						<hr />
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-md-3  col-form-label"
							>
								Academic Year
							</label>
							<div className="col-sm-8 col-md-6  my-2 position-relative">
								<select
									name="academicYear"
									onChange={(e) => {
										setActiveYear(e.target.value)
										handleInputChange(e)
									}}
									className={` form-control`}
									id="academic_year_01"
								>
									<option value={null} className={` form-control`}>
										Select Academic Year
									</option>
									{academicYear.map((data, index) => {
										return (
											<option
												key={index}
												value={data?._id}
												className="form-control"
											>
												{data.name}
											</option>
										)
									})}
								</select>
								<FontAwesomeIcon
									className={style.selectDownArrow}
									icon={faCaretDown}
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="staticEmail"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Receipt Number
							</label>
							<div className="col-sm-8 col-md-6 my-2">
								<input
									type="text"
									name="receiptNo"
									onChange={handleInputChange}
									className="form-control"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="staticEmail"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Admission Number
							</label>
							<div className="col-sm-8 col-md-6 my-2">
								<input
									type="text"
									name="admissionNo"
									onChange={handleInputChange}
									className="form-control"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Admission Date
							</label>
							<div className="col-sm-8 col-md-6 my-2">
								<input
									type="date"
									onChange={handleInputChange}
									name="admissionDate"
									className="form-control"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Class
							</label>
							<div className="col-sm-8 col-md-6 my-2 position-relative">
								<select
									className={`form-control`}
									onChange={handleInputChange}
									name="grade"
									id="admission_date_02"
								>
									<option className={`form-control`}>Select Class</option>
									{grades.map((data, index) => {
										return (
											<option key={`class_${index}`} value={data._id}>
												{data.name}
											</option>
										)
									})}
								</select>
								<FontAwesomeIcon
									className={style.selectDownArrow}
									icon={faCaretDown}
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Joining Date
							</label>
							<div className="col-sm-8 col-md-6 my-2">
								<input
									type="date"
									onChange={handleInputChange}
									name="joiningDate"
									className="form-control"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Vacanacy
							</label>
							<div className="col-sm-8 col-md-6 my-2">
								<input readOnly type="text" className="form-control" />
							</div>
						</div>

						<h4>Personal Details-</h4>
						<hr />
						<div className="form-group row">
							<label
								htmlFor="staticEmail"
								className="col-sm-2 col-md-3 col-form-label"
							>
								First Name
							</label>
							<div className="col-sm-8 col-md-6 my-2">
								<input
									type="text"
									onChange={handleInputChange}
									name="firstName"
									className="form-control"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="staticEmail"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Last Name
							</label>
							<div className="col-sm-8 col-md-6 my-2">
								<input
									type="text"
									onChange={handleInputChange}
									name="lastName"
									className="form-control"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="staticEmail"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Date of Birth
							</label>
							<div className="col-sm-8 col-md-6 my-2">
								<input
									type="date"
									onChange={handleInputChange}
									name="dob"
									className="form-control"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Gender
							</label>
							<div className="col-sm-8 col-md-6 my-2 position-relative">
								<select
									className={` form-control`}
									onChange={handleInputChange}
									name="gender"
									id="gender_student_03"
								>
									<option value={null} className={`form-control`}>
										Select Gender
									</option>
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
								<FontAwesomeIcon
									className={style.selectDownArrow}
									icon={faCaretDown}
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="staticEmail"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Email
							</label>
							<div className="col-sm-8 col-md-6 my-2">
								<input
									type="email"
									onChange={handleInputChange}
									name="email"
									className="form-control"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="staticEmail"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Aadhar Number
							</label>
							<div className="col-sm-8 col-md-6 my-2">
								<input
									type="text"
									onChange={handleInputChange}
									name="aadhaar"
									className="form-control"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Religion
							</label>
							<div className="col-sm-8 col-md-6 my-2 position-relative">
								<select
									className={` form-control`}
									onChange={(e) => {
										handleInputChange
										handleReligion(e)
									}}
									name="caste"
									id="cast_student_04"
								>
									<option className={`form-control`}>
										--Select Religion--
									</option>
									{religion.map((rel) => {
										return (
											<option className={`form-control`}>{rel.name}</option>
										)
									})}
								</select>
								<FontAwesomeIcon
									className={style.selectDownArrow}
									icon={faCaretDown}
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Caste
							</label>
							<div className="col-sm-8 col-md-6 my-2 position-relative">
								<select
									className={`form-control`}
									onChange={handleInputChange}
									name="religion"
									id="religion_student_05"
								>
									{religion[castInd].castes.map((cast) => {
										return (
											<option className={`form-control`}>{cast.name}</option>
										)
									})}
								</select>
								<FontAwesomeIcon
									className={style.selectDownArrow}
									icon={faCaretDown}
								/>
							</div>
						</div>

						<div className="form-group row">
							<label
								htmlFor="staticEmail"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Nationality
							</label>
							<div className="col-sm-8 col-md-6 my-2">
								<input
									type="text"
									className="form-control"
									onChange={handleInputChange}
									name="nationality"
									placeholder="India"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="staticEmail"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Identification Mark
							</label>
							<div className="col-sm-8 col-md-6 my-2">
								<input
									type="text"
									className="form-control"
									onChange={handleInputChange}
									name="identification_mark"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label
								htmlFor="staticEmail"
								className="col-sm-2 col-md-3 col-form-label"
							>
								Blood Group
							</label>
							<div className="col-sm-8 col-md-6 my-2">
								<input
									type="text"
									className="form-control"
									onChange={handleInputChange}
									name="blood_group"
								/>
							</div>
						</div>
						<div className="text-center my-4">
							<button
								type="submit"
								style={{
									width: "150px",
									backgroundColor: "purple",
									color: "white",
								}}
								className="btn"
							>
								Save Student
							</button>
						</div>
					</form>
				</div>
			</div>
		</AdminLayout>
	)
}

export default StudentAdmission
