import React from "react"
import ClassList from "../../components/Admin/class/class-list"
import CreateClass from "../../components/Admin/class/createClass"
import AdminLayout from "../../components/Admin/index"

const AdminClassList = (props) => {
	return (
		<AdminLayout>
			<CreateClass />
		</AdminLayout>
	)
}

export default AdminClassList
