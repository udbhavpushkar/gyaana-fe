import React from "react"
import PropTypes from "prop-types"
import styles from "../Admin/institute/styles.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

const SetupForm = ({
	data,
	existingData,
	setExistingData,
	handleSubmitForm,
	btnName,
}) => {
	const handleInputChange = (e) => {
		let data = { ...existingData }
		data[e.target.name] = e.target.value
		setExistingData(data)
	}

	const handleFormSubmit = (e) => {
		e.preventDefault()
		handleSubmitForm()
		e.target.reset()
	}

	return (
		<div className="container py-2">
			<div>
				<div>
					<form onSubmit={handleFormSubmit}>
						<div className={styles.inputContainer}>
							{data.map((item) => (
								<div key={item.name} className={styles.inputWrapper}>
									<label
										htmlFor={item.name}
										className={`${styles.labelInput} form-label`}
									>
										{item.label}:
									</label>
									{item.type === "dropdown" && (
										<div style={{ position: "relative" }}>
											<select
												id={item.name}
												className={`${styles.input} form-control`}
												name={item.name}
												onChange={handleInputChange}
											>
												<option>--Please Select--</option>
												{item.list.map((opt) => {
													return (
														<option
															key={opt._id}
															value={opt._id}
															className={`${styles.input} form-control`}
														>
															{opt.name}
														</option>
													)
												})}
											</select>
											<FontAwesomeIcon
												className={styles.selectIcon}
												style={{ marginLeft: "10px", cursor: "pointer" }}
												icon={faCaretDown}
											/>
										</div>
									)}
									{item.type !== "dropdown" && (
										<input
											id={item.name}
											name={item.name}
											type={item.type}
											className={`${styles.input} form-control`}
											onChange={handleInputChange}
											value={existingData ? existingData[item.name] : ""}
										/>
									)}
								</div>
							))}
							{/* <div className={styles.inputWrapper}>
								<label className={`${styles.labelInput} form-label`}>
									Institution Logo:
								</label>
								<input
									type="file"
									placeholder="Choose file"
									className={`${styles.input} form-control`}
								/>
							</div> */}
						</div>
						<div className="text-center py-3">
							<button
								type="submit"
								className={`${styles.saveBtn} btn btn-success`}
							>
								{btnName}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

SetupForm.propTypes = {
	btnName: PropTypes.string.isRequired,
}

SetupForm.defaultProps = {
	btnName: "Create",
}

export default SetupForm
