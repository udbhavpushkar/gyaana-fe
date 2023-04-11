import React, { useEffect, useState } from "react"
import AdminLayout from "../../../components/Admin"
import style from "./style.module.css"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getRequest, patchRequest } from "../../../utilities/rest_service"
import { toast } from "react-toastify"

const AssignStudent = () => {

	const [academicYear, setAcademicYear] = useState([])
	const [activeYear, setActiveYear] = useState()
	const [grades, setGrades] = useState([])
	const [activeGrades, setActiveGrades] = useState()
	const [sectionList, setSectionList] = useState([])
	const [activeSection, setActiveSection] = useState()
	const [studentList, setStudentList] = useState([])
	const [selectedStudents, setSelectedStudents] = useState([])

	const resetStates = () => {
		setActiveYear()
		setActiveGrades()
		setActiveSection()
		setSectionList([])
		setSelectedStudents([])
		setStudentList([])
	}

	useEffect(() => {
		getAcademicYearList()
	}, [])

	useEffect(() => {
		if (activeYear) {
			getClasses(activeYear)
		}
	}, [activeYear])

	useEffect(() => {
		if (activeGrades) {
			getSectionList(activeGrades)
			getStudentList(activeGrades)
		}
	}, [activeGrades])

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

	const getSectionList = async (gradeId) => {
		try {
			let response = await getRequest(`section/${gradeId}`)
			if (response.isSuccess) {
				setSectionList(response.data)
			} else {
				toast.success("Something went wrong")
			}
		} catch (error) {

		}
	}

	const getStudentList = async (gradeId) => {
		try {
			let response = await getRequest(`student/?grade=${gradeId}&section=null`)
			if (response.isSuccess) {
				setStudentList(response.data)
			}
		} catch (error) {
			console.error(error)
		}
	}

	const handleStudentcheck = (e) => {
		let data = [...selectedStudents]
		if (e.target.checked) {
			data.push(e.target.value)
		} else {
			let index = data.indexOf(e.target.value)
			data.splice(index, 1)
		}
		setSelectedStudents(data)
	}

	const handleAssignStudent = async (e) => {
		e.preventDefault()
		try {
			let response = await patchRequest(`section/${activeSection}/`, { students: selectedStudents })
			if (response.isSuccess) {
				toast.success("Students added to section successfully.")
				e.target.reset()
				resetStates()
			}

		} catch (error) {
			console.log(error);
		}
	}


	return (
		<AdminLayout>
			<div style={{ boxShadow: "0px 3px 6px rgba(128, 128, 128, 0.636)" }}>
				<div className="text-center mb-3">
					<h3>Assign Students to Classes</h3>
					<hr />
				</div>
				<div>
					<form onSubmit={handleAssignStudent} style={{ padding: "30px" }}>
						<div className="form-group row">
							<label
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-form-label"
							>
								Academic Year
							</label>
							<div className="col-sm-8 my-2 position-relative">
								<select
									name="academicYear"
									onChange={(e) => {
										setActiveYear(e.target.value)
										// handleInputChange(e)
									}}
									className={`form-control`}
									id="academic_year_02"
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
								htmlFor="exampleFormControlSelect1"
								className="col-sm-2 col-form-label"
							>
								Select Class
							</label>
							<div className="col-sm-8 my-2 position-relative">
								<select
									className={` form-control`}
									onChange={(e) => {
										setActiveGrades(e.target.value)
										// handleInputChange(e)
									}}
									name="grade"
									id="class_dropdown"
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
								className="col-sm-2 col-form-label"
							>
								Select Section
							</label>
							<div className="col-sm-8 my-2 position-relative">
								<select
									className={` form-control`}
									onChange={(e) => {
										setActiveSection(e.target.value)
									}}
									name="section"
									id="section_dropdown"
								>
									<option className={`form-control`}>Select Section</option>
									{sectionList.map((data, index) => {
										return (
											<option key={`section_${index}`} value={data._id}>
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
						<h3>Select Students</h3>

						<table className={`table ${style.selectStudent}`}>
							<thead>
								<tr>
									<th scope="col">
										<span className="mx-2"> Select All</span>
										{/* <input className={style.inputCheckbox} type="checkbox" /> */}
									</th>
									<th scope="col">Name</th>
									<th scope="col">Prev Marks(%)</th>
									<th scope="col">Roll No</th>
								</tr>
							</thead>
							<tbody>
								{studentList.map((data, index) => {
									return <tr key={`student_${index}`}>
										<td>
											<input className={style.inputCheckbox} type="checkbox" onChange={handleStudentcheck} name="students[]" value={data?._id} />
										</td>

										<td>{data?.userId?.firstName}</td>
										<td>85</td>
										<td>01</td>
									</tr>
								})}

							</tbody>
						</table>

						<div className="text-center my-4">
							<button type="submit" style={{ width: "150px" }} className="btn btn-success">
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
