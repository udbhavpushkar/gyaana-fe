const headersData = [
	{
		name: "Dashboard",
		link: "/admin",
	},
	{
		name: "Initial Settings",
		link: "/admin/teacher",
		childs: [
			{
				name: "Setup Institution",
				link: "/admin/institute",
			},
			{
				name: "Academic Settings",
				link: "/admin/teacher",
				childs: [
					{
						name: "Create Academic Year",
						link: "/admin/academic-year",
					},
					{
						name: "Create Class",
						link: "/admin/class",
					},
					{
						name: "Create Section",
						link: "/admin/section",
					},
					{
						name: "Create Subjects",
						link: "/admin/subject",
					},
					{
						name: "Upload Details",
						link: "/admin",
					},
					{
						name: "Employee Settings",
						link: "/admin",
					},
				],
			},
		],
	},
	{
		name: "Enquiry",
		link: "/admin/student",
	},
	{
		name: "Admission Management",
		link: "/admin/class",
	},
	{
		name: "Search",
		link: "/admin/feedback",
	},
	{
		name: "Class/Section Management",
		link: "/admin/notice",
	},
	{
		name: "Subject Management",
		link: "/admin/download",
	},
	{
		name: "Syllabus Management",
		link: "/admin/download",
	},
	{
		name: "Student Management",
		link: "/admin/download",
	},
	{
		name: "Employee Management",
		link: "/admin/download",
	},
	{
		name: "Attendence Management",
		link: "/admin/download",
	},
	{
		name: "Exam Management",
		link: "/admin/download",
	},
	{
		name: "Result Management",
		link: "/admin/download",
	},
	{
		name: "Alumni Details",
		link: "/admin/download",
	},
	{
		name: "Gallery/Events",
		link: "/admin/download",
	},
	{
		name: "Noticeboard",
		link: "/admin/download",
	},
	{
		name: "Achievements",
		link: "/admin/download",
	},
]

export default headersData
