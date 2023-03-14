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
						name: "Academic Year",
						link: "/admin/academic-year",
					},
					{
						name: "Class",
						link: "/admin/class",
					},
					{
						name: "Create Subjects",
						link: "/admin/subject",
					},
					{
						name: "Category",
						link: "/admin/category",
					},
					{
						name: "Position",
						link: "/admin/position",
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
		link: "#",
		childs: [
			{
				name: "Student",
				link: "/admin/admission/student-admission",
			},
			{
				name: "Employees",
				link: "/admin/admission/employee-admission",
			},
		],
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
