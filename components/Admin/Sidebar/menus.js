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
		],
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
		],
	},
	{
		name: "Enquiry",
		link: "/admin/enquiry",
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
		name: "Search Employee",
		link: "/admin/search/employee",
	},
	{
		name: "Search Student",
		link: "/admin/search/student",
	},
	{
		name: "Student Management",
		link: "#",
		childs: [
			{
				name: "Assign students to Section",
				link: "/admin/assign-student",
			},
		],
	},
	{
		name: "Student Attendance",
		link: "#",
		childs: [
			{
				name: "Create",
				link: "/admin/attendance/students",
			},
			{
				name: "Previous Attendance",
				link: "/admin/attendance/students-list",
			},
		],
	},
	{
		name: "Syllabus",
		link: "#",
		childs: [
			{
				name: "Create Syllabus",
				link: "/admin/syllabus/create",
			},
			{
				name: "Syllabus List",
				link: "/admin/syllabus/list",
			},
		],
	},
	/* {
		name: "Notice",
		link: "#",
		childs: [
			{
				name: "Send Notice",
				link: "/admin/notice/create",
			},
			{
				name: "Notice List",
				link: "/admin/notice/list",
			},
		],
	}, */
	{
		name: "Events",
		link: "#",
		childs: [
			{
				name: "Create Event",
				link: "/admin/event/create",
			},
			{
				name: "Events List",
				link: "/admin/event/list",
			},
		],
	},
	{
		name: "Holidays",
		link: "#",
		childs: [
			{
				name: "Create holiday",
				link: "/admin/holiday/create",
			},
			{
				name: "Holiday List",
				link: "/admin/holiday/list",
			},
		],
	},
	{
		name: "Calender",
		link: "/admin/calender"
	}
]

export default headersData
