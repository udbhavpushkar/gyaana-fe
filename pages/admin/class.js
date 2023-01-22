import React from "react"
import ClassList from "../../components/Admin/class/class-list"
import AdminLayout from "../../components/Admin/index"

const AdminClassList = (props) => {
	return (
		<AdminLayout>
			<h1>Create new class form</h1>
			<ClassList />
		</AdminLayout>
	)
}

export default AdminClassList
