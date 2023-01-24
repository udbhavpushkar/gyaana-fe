import React from "react"
import SetupForm from "../../SetupForm"
import styles from "./styles.module.css"

const Institute = () => {
	const instituteHeader = [
		{ label: "Institute Name", type: "text", name: "Institute Name" },
		{
			label: "Institution Principal Name",
			type: "text",
			name: "Institute Name",
		},
		{ label: "Institute Address", type: "text", name: "Institute Name" },
		{ label: "Institute Email ID", type: "text", name: "Institute Name" },
		{ label: "Principal mobile number", type: "text", name: "Institute Name" },
		{ label: "Institute phone", type: "text", name: "Institute Name" },
		{ label: "Institute fax", type: "text", name: "Institute Name" },
		{ label: "Institute Country", type: "text", name: "Institute Name" },
		{ label: "Institute Code", type: "text", name: "Institute Name" },
		{ label: "City", type: "text", name: "Institute Name" },
		{ label: "State", type: "text", name: "Institute Name" },
		{ label: "District", type: "text", name: "Institute Name" },
		{ label: "Pincode", type: "text", name: "Institute Name" },
		{ label: "File", type: "file", name: "Institute Name" },
	]

	return (
		<SetupForm
			data={instituteHeader}
			pageName="Institue Setup"
			pageHeading="Profile Information"
		/>
	)
}

export default Institute
