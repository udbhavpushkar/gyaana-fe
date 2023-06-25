import React from "react"
import EmployeeLayout from "../../components/Employee"
import Timetable from "../../components/Employee/Timetable"

const TeacherTimetable = () => {
	return (
		<>
			<EmployeeLayout>
				<Timetable />
			</EmployeeLayout>
		</>
	)
}

export default TeacherTimetable
