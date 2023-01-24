import React from "react"
import SetupForm from "../../SetupForm"

const CreateClass = () => {
	const instituteHeader = [
		{ label: "Academic Year", type: "text", name: "Institute Name" },
		{ label: "Class Name", type: "number", name: "Institute Name" },
		{ label: "Max Student in Class", type: "number", name: "Institute Name" },
	]
	return (
		<SetupForm
			data={instituteHeader}
			pageName="Class"
			pageHeading="Create Class"
		/>
	)
}

export default CreateClass
