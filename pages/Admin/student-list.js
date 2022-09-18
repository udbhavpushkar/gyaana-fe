import React, { useEffect, useState } from "react"
import AdminLayout from "../../components/Admin/index"
import StudentList from "../../components/Admin/student/student-list"

const AdminClassList = (props) => {
	return (
		<AdminLayout>
			<StudentList />
		</AdminLayout>
	)
}

export default AdminClassList
