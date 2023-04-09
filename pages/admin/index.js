import React, { useState } from "react"
import AdminLayout from "../../components/Admin/index"
import Modal2 from "../../components/Custom/Modal2"
import ChangePassword from "../../components/User/ChangePassword"

const Admin = (props) => {

	const [showChangePassword, setShowChangePassword] = useState(false)

	return (
		<AdminLayout>
			<div className="mx-3 my-2">
				<span onClick={() => { setShowChangePassword(true) }} className="link">Change Password</span>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
					height: "79vh",
					boxShadow: "0px 3px 6px rgba(128, 128, 128, 0.636)",
					color: "purple",
				}}
			>
				<h3>Welcome! ADMIN</h3>
				<h5>Gyaana International School</h5>
			</div>
			<Modal2 data={showChangePassword} title={`Change Password`} onHide={() => { setShowChangePassword(false) }}>
				<ChangePassword />
			</Modal2>
		</AdminLayout>
	)
}

export default Admin
