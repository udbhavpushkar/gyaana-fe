import React, { useState } from "react"
import EmployeeLayout from "../../components/Employee"
import Notice from "../../components/Employee/Notice"

const NoticeTeacher = () => {
	return (
		<EmployeeLayout>
			<Notice />
		</EmployeeLayout>
	)
}

export default NoticeTeacher
