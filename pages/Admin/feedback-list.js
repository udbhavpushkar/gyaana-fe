import React, { useEffect, useState } from "react"
import FeedbackList from "../../components/Admin/feedback/feedback-list"
// import ClassList from "../../components/Admin/class/class-list"
import AdminLayout from "../../components/Admin/index"

const AdminClassList = (props) => {
	return (
		<AdminLayout>
			<FeedbackList />
		</AdminLayout>
	)
}

export default AdminClassList
