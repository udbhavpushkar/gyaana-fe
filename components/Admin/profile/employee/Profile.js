import React, { useEffect, useState } from "react"
import style from "./../../../../pages/admin/admission/style.module.css"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getRequest, postRequest } from "../../../../utilities/rest_service"
import { handleFormData } from "../../../../utilities/form_services"
import { toast } from "react-toastify"
import religion from "./../../../../assets/constant"

//props.data will contain data about employee
const Profile = (props) => {
	const [academicYear, setAcademicYear] = useState([])
	const [activeYear, setActiveYear] = useState(null)
	const [castInd, setCastInd] = useState(0)
	const [grades, setGrades] = useState([])
	const [formData, setFormData] = useState({ ...props.data })
	const [isEditable, setIsEditable] = useState(true)
	const [userData, setUserData] = useState([])

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
		// let dataStudent = { ...props.data }
		// Object.keys(dataStudent).map((key) =>
		// 	console.log("key", key, " > " + dataStudent[key])
		// )
		setFormData(props?.data)

		// let data = props.data
		// // data[e.target.name] = e.target.value
		// setFormData(data)
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
		// console.log(e.target.name)
		handleFormData(e, formData, setFormData)
		// console.log("formData", formData)
	}

	const updateStudent = async (e) => {
		e.preventDefault()
		try {
			let response = await postRequest(`student/register`, formData)
			if (response.isSuccess) {
				// console.log("response", response)
				toast.success("Created Successfully")
				e.target.reset()
			} else {
				toast.error("Something went Wrong")
			}
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		console.log("formData", props.data)
		if (props.data) {
			const empData = [
				{
					label: "Name",
					value: `${props.data.userId?.firstName} ${props.data?.userId?.lastName}`,
					type: "text",
				},
				{
					label: "Email",
					value: props.data?.userId?.email,
					type: "text",
				},
				{
					label: "Employee No.",
					value: props.data.employeeNo,
					type: "text",
				},
				{
					label: "Joining Date",
					value: props.data.employeeNo,
					type: "date",
				},
				{
					label: "Position",
					value: props.data?.position?.name,
					type: "select",
				},
				{
					label: "Mobile Number",
					value: props.data?.mobile,
					type: "text",
				},
				{
					label: "Address",
					value: props.data.address,
					type: "text",
				},
				{
					label: "Pincode",
					value: props.data.pincode,
					type: "text",
				},
				{
					label: "Religion",
					value: props.data.religion,
					type: "select",
				},
				{
					label: "Caste",
					value: props.data.caste,
					type: "select",
				},
				{
					label: "Nationality",
					value: props.data?.nationality,
					type: "text",
				},
				{
					label: "Blood Group",
					value: props.data?.blood_group,
					type: "text",
				},
				{
					label: "Indentification Mark",
					value: props.data.identification_mark,
					type: "text",
				},
				{
					label: "Father Name",
					value: props.data?.fatherName,
					type: "text",
				},
				{
					label: "Mother Name",
					value: props.data?.motherName,
					type: "text",
				},
				{
					label: "Spouse Name",
					value: props.data?.spouseName,
					type: "text",
				},
			]
			setUserData(empData)
		}
	}, [props.data])

	return (
		<div className={`${style.student_admission_box}  `}>
			<button
				class={
					!isEditable
						? "btn btn-sm btn-secondary mx-4"
						: "btn btn-sm btn-warning mx-4"
				}
				onClick={() => setIsEditable(!isEditable)}
			>
				{isEditable ? "Edit" : "Cancel"}
			</button>
			<form onSubmit={updateStudent} className={style.form_container}>
				<h4>Official Details-</h4>
				<hr />
				<div className="form-group row">
					<label
						htmlFor="exampleFormControlSelect1"
						className="col-sm-2 col-md-3  col-form-label"
					>
						Academic Year
					</label>
					{isEditable ? (
						<div className="col-sm-8 col-md-6  my-2 position-relative">
							<h6>{formData?.academicYear?.name}</h6>
						</div>
					) : (
						<div className="col-sm-8 col-md-6  my-2 position-relative">
							<select
								name="academicYear"
								onChange={(e) => {
									setActiveYear(e.target.value)
									handleInputChange(e)
								}}
								className={` form-control`}
								id="academic_year_01"
								value={formData?.academicYear?._id}
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
					)}
				</div>
				<div className="form-group row">
					<label
						htmlFor="staticEmail"
						className="col-sm-2 col-md-3 col-form-label"
					>
						Employee No.
					</label>
					<div className="col-sm-8 col-md-6 my-2">
						{isEditable ? (
							<p>{formData?.employeeNo}</p>
						) : (
							<input
								readOnly
								type="text"
								className="form-control"
								value={formData?.employeeNo}
								onChange={handleInputChange}
							/>
						)}
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
						{isEditable ? (
							<h6>{formData?.joiningDate?.slice(0, 10)}</h6>
						) : (
							<input
								type="date"
								onChange={handleInputChange}
								name="admissionDate"
								className="form-control"
								value={formData?.joiningDate?.slice(0, 10)}
							/>
						)}
					</div>
				</div>
				<div className="form-group row">
					<label
						htmlFor="exampleFormControlSelect1"
						className="col-sm-2 col-md-3 col-form-label"
					>
						Subjects
					</label>
					<div className="col-sm-8 col-md-6 my-2 position-relative">
						{isEditable ? (
							<p>{formData?.subjects[0]?.name}</p>
						) : (
							<>
								<select
									className={`form-control`}
									onChange={handleInputChange}
									name="grade"
									id="admission_date_02"
									value={formData?.subjects?.name}
								>
									<option className={`form-control`}>Select Subjects</option>
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
							</>
						)}
					</div>
				</div>
				<div className="form-group row">
					<label
						htmlFor="exampleFormControlSelect1"
						className="col-sm-2 col-md-3 col-form-label"
					>
						Category
					</label>
					<div className="col-sm-8 col-md-6 my-2 position-relative">
						{isEditable ? (
							<p>{formData?.category?.name}</p>
						) : (
							<>
								<select
									className={`form-control`}
									onChange={handleInputChange}
									name="grade"
									id="admission_date_02"
									value={formData?.category?.name}
								>
									<option className={`form-control`}>Select Category</option>
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
							</>
						)}
					</div>
				</div>
				<div className="form-group row">
					<label
						htmlFor="exampleFormControlSelect1"
						className="col-sm-2 col-md-3 col-form-label"
					>
						Position
					</label>
					<div className="col-sm-8 col-md-6 my-2 position-relative">
						{isEditable ? (
							<p>{formData?.position?.name}</p>
						) : (
							<>
								<select
									className={`form-control`}
									onChange={handleInputChange}
									name="grade"
									id="admission_date_02"
									value={formData?.position?.name}
								>
									<option className={`form-control`}>Select Position</option>
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
							</>
						)}
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
						{isEditable ? (
							<p>{formData?.userId?.firstName}</p>
						) : (
							<input
								type="text"
								onChange={handleInputChange}
								name="firstName"
								className="form-control"
								value={formData?.userId?.firstName}
							/>
						)}
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
						{isEditable ? (
							<p>{formData?.userId?.lastName}</p>
						) : (
							<input
								type="text"
								onChange={handleInputChange}
								name="lastName"
								className="form-control"
								value={formData?.userId?.lastName}
							/>
						)}
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
						{isEditable ? (
							<p>{formData?.dob.slice(0, 10)}</p>
						) : (
							<input
								type="date"
								onChange={handleInputChange}
								name="dob"
								className="form-control"
								value={formData?.dob.slice(0, 10)}
							/>
						)}
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
						{isEditable ? (
							<p>{formData?.gender}</p>
						) : (
							<>
								<select
									className={` form-control`}
									onChange={handleInputChange}
									name="gender"
									id="gender_student_03"
									value={formData?.gender}
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
							</>
						)}
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
						{isEditable ? (
							<p>{formData?.userId.email}</p>
						) : (
							<input
								type="email"
								onChange={handleInputChange}
								name="email"
								className="form-control"
								value={formData?.userId.email}
								disabled
							/>
						)}
					</div>
				</div>
				<div className="form-group row">
					<label
						htmlFor="staticEmail"
						className="col-sm-2 col-md-3 col-form-label"
					>
						Pincode
					</label>
					<div className="col-sm-8 col-md-6 my-2">
						{isEditable ? (
							<p>{formData?.pincode}</p>
						) : (
							<input
								type="email"
								onChange={handleInputChange}
								name="email"
								className="form-control"
								value={formData?.pincode}
								
							/>
						)}
					</div>
				</div>
				<div className="form-group row">
					<label
						htmlFor="staticEmail"
						className="col-sm-2 col-md-3 col-form-label"
					>
						Address
					</label>
					<div className="col-sm-8 col-md-6 my-2">
						{isEditable ? (
							<p>{formData?.address}</p>
						) : (
							<input
								type="email"
								onChange={handleInputChange}
								name="email"
								className="form-control"
								value={formData?.address}
								
							/>
						)}
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
						{isEditable ? (
							<p>{formData?.aadhaar}</p>
						) : (
							<input
								type="text"
								onChange={handleInputChange}
								name="aadhaar"
								className="form-control"
								value={formData?.aadhaar}
							/>
						)}
					</div>
				</div>

				<div className="form-group row">
					<label
						htmlFor="staticEmail"
						className="col-sm-2 col-md-3 col-form-label"
					>
						Marital Status
					</label>
					<div className="col-sm-8 col-md-6 my-2">
						{isEditable ? (
							<p>{formData?.maritalStatus}</p>
						) : (
							<input
								type="text"
								onChange={handleInputChange}
								name="nationality"
								className="form-control"
								value={formData?.maritalStatus}
								placeholder="India"
							/>
						)}
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
						{isEditable ? (
							<p>{formData?.nationality}</p>
						) : (
							<input
								type="text"
								onChange={handleInputChange}
								name="nationality"
								className="form-control"
								value={formData?.nationality}
								placeholder="India"
							/>
						)}
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
						disabled={isEditable}
					>
						Update Student
					</button>
				</div>
			</form>
		</div>
	)
}

export default Profile
