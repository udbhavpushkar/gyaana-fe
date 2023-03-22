import React from "react"
import AdminLayout from "../../components/Admin/index"

const Admin = (props) => {
	return (
		<AdminLayout>
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
		</AdminLayout>
	)
}

export default Admin
