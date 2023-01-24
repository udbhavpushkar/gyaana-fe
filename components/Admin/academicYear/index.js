import React from "react"
import SetupForm from "./../../SetupForm/index"

const AcademicYear = () => {
	const instituteHeader = [
		{ label: "Academic Year Name", type: "text", name: "Institute Name" },
		{ label: "Start Date", type: "date", name: "Institute Name" },
		{ label: "End Date", type: "date", name: "Institute Name" },
	]
	return (
		<>
			<SetupForm
				data={instituteHeader}
				pageName="Academic Year"
				pageHeading="Create Academice Year"
			/>
		</>
	)
}

export default AcademicYear
