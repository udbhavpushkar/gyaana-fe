import React from "react"
import AdminLayout from "../../components/Admin/index"
import StudentList from "../../components/Admin/student/student-list"

const AdminStudentList = (props) => {
	return (
		<AdminLayout>
			<StudentList />
		</AdminLayout>
	)
}

export default AdminStudentList
