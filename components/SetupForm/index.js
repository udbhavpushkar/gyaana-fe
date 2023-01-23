import React from "react"
import styles from "../Admin/institute/styles.module.css"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SetupForm = (props) => {
	return (
		<div class="container py-2">
			<div>
				<div className="text-center mb-3">
					<h3>{props.pageName}</h3>
					<hr />
				</div>
				<div className={styles.header}>
					<p className={styles.headerText}>{props.pageHeading}:</p>
					<button className={`${styles.editBtn} btn btn-sm btn-primary`}>
						<FontAwesomeIcon style={{ marginRight: "5px" }} icon={faPen} />
						Edit Details
					</button>
				</div>

				<div>
					<form>
						<div className={styles.inputContainer}>
							{props.data.map((item) => (
								<div className={styles.inputWrapper}>
									<label
										for="exampleInputEmail1"
										className={`${styles.labelInput} form-label`}
									>
										{item.label}:
									</label>
									<input
										type="email"
										className={`${styles.input} form-control`}
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
									/>
								</div>
							))}
							<div className={styles.inputWrapper}>
								<label className={`${styles.labelInput} form-label`}>
									Institution Logo:
								</label>
								<input
									type="file"
									placeholder="Choose file"
									className={`${styles.input} form-control`}
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="text-center py-3">
				<button className={`${styles.saveBtn} btn btn-success`}>Create</button>
			</div>
		</div>
	)
}

export default SetupForm
