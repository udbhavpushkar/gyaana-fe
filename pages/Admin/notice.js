import React from "react"
import AdminLayout from "../../components/Admin/index"
import NoticeList from "../../components/Admin/notice/notice-list"

const AdminNoticeList = (props) => {
	return (
		<AdminLayout>
			<NoticeList />
		</AdminLayout>
	)
}

export default AdminNoticeList
