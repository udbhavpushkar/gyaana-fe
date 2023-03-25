import React, { useState } from "react"
import AdminLayout from "../../../components/Admin"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./style.module.css"
import religion from "../../../assets/constant"

const StudentAdmission = () => {
	const [castInd, setCastInd] = useState(0)
	console.log("Religion", religion)

	const handleReligion = (ind) => {
		console.log("ind")
		console.log(ind.target.value)
		let currI = religion.indexOf(ind.target.value)
		for (let i = 0; i < religion.length; i++) {
			if (religion[i].name == ind.target.value) {
				setCastInd(i)
				break
			}
		}
		console.log(currI)
		// setCastInd(currI)
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
					<form className={style.form_container}>
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
								<select className={` form-control`} id="academic_year_01">
									<option className={` form-control`}>
										Select Academic Year
									</option>
									<option className={` form-control`}>0</option>
									<option className={` form-control`}>1</option>
									<option className={` form-control`}>2</option>
									<option className={` form-control`}>3</option>
									<option className={` form-control`}>4</option>
									<option className={` form-control`}>5</option>
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
								<input type="text" className="form-control" />
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
								<input type="text" className="form-control" />
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
								<input type="date" className="form-control" />
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
								<select className={` form-control`} id="admission_date_02">
									<option className={` form-control`}>Select Class</option>
									<option className={` form-control`}>1</option>
									<option className={` form-control`}>2</option>
									<option className={` form-control`}>3</option>
									<option className={` form-control`}>4</option>
									<option className={` form-control`}>5</option>
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
								<input type="date" className="form-control" />
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
								<input type="text" className="form-control" />
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
								<input type="text" className="form-control" />
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
								<input type="text" className="form-control" />
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
								<input type="date" className="form-control" />
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
								<select className={` form-control`} id="gender_student_03">
									<option className={` form-control`}>Select Gender</option>
									<option className={` form-control`}>Male</option>
									<option className={` form-control`}>Female</option>
									<option className={` form-control`}>other</option>
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
								Aadhar Number
							</label>
							<div className="col-sm-8 col-md-6 my-2">
								<input type="number" className="form-control" />
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
									onChange={(e) => handleReligion(e)}
									className={` form-control`}
									id="religion_student_05"
								>
									<option className={` form-control`}>
										-- Select Religion --
									</option>
									{religion.map((rel, i) => {
										return (
											<option
												onChange={(e) => handleReligion(e)}
												key={rel.name + rel.id}
												className={` form-control`}
											>
												{rel.name}
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
								Caste
							</label>
							<div className="col-sm-8 col-md-6 my-2 position-relative">
								<select className={` form-control`} id="cast_student_04">
									{religion[castInd].castes.map((cast) => {
										return (
											<option
												key={cast.name + cast.id}
												className={` form-control`}
											>
												{cast.name}
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
								Nationality
							</label>
							<div className="col-sm-8 col-md-6 my-2">
								<input
									type="text"
									className="form-control"
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
									placeholder="India"
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
									placeholder="India"
								/>
							</div>
						</div>
						<div className="text-center my-4">
							<button
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
