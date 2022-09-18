import React, { useEffect, useState } from "react"
import ClassList from "../../components/Admin/class/class-list"
import AdminLayout from "../../components/Admin/index"

const AdminClassList = (props) => {
	return (
		<AdminLayout>
			<ClassList />
		</AdminLayout>
	)
}

export default AdminClassList
