import React from "react"
import SetupForm from "../../SetupForm"

const CreateSection = () => {
	const instituteHeader = [
		{
			label: "Select Class",
			type: "dropdown",
			name: "Institute Name",
			list: [1, 2, 3],
		},
		{ label: "Section  Name", type: "text", name: "Institute Name" },
		{ label: "Total Students", type: "text", name: "Institute Name" },
	]
	return (
		<>
			<SetupForm
				data={instituteHeader}
				pageName="Section"
				pageHeading="Create Section"
			/>
		</>
	)
}

export default CreateSection
