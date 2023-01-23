import React from "react"
import SetupForm from "../../SetupForm"
import styles from "./styles.module.css"

const Institute = () => {
	const instituteHeader = [
		{ label: "Institute Name" },
		{ label: "Institution Principal Name" },
		{ label: "Institute Address" },
		{ label: "Institute Email ID" },
		{ label: "Principal mobile number" },
		{ label: "Institute phone" },
		{ label: "Institute fax" },
		{ label: "Institute Country" },
		{ label: "Institute Code" },
		{ label: "Institute Code" },
		{ label: "City" },
		{ label: "State" },
		{ label: "District" },
		{ label: "Pincode" },
	]

	return (
		<SetupForm
			data={instituteHeader}
			pageName="Institue Page"
			pageHeading="Profile Information"
		/>
	)
}

export default Institute
