import React, { useEffect, useState } from "react"
import AdminLayout from "../../components/Admin/index"
import TeacherList from "../../components/Admin/teacher/teacher-list"

const AdminTeacherList = (props) => {
	return (
		<AdminLayout>
			<TeacherList />
		</AdminLayout>
	)
}

export default AdminTeacherList
