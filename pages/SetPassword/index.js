import React, { useState } from "react"
import styles from "../ForgotPassword/style.module.css"
import Link from "next/link"

const SetPassword = () => {
	const [email, setEmail] = useState("")
	const [otp, setOtp] = useState("")
	return (
		<div className={styles.loginWrapper}>
			<div style={{ backgroundColor: "rgb(199, 142, 199)", padding: "10px" }}>
				<h4 className="text-center">
					Welcome To
					<Link href="/">
						<span className={styles.gyaanaLogo}>
							<b style={{ marginLeft: "10px", color: "purple" }}>G</b>
							<b style={{ color: "yellow" }}>Y</b>
							<b style={{ color: "red" }}>A</b>
							<b style={{ color: "blue" }}>A</b>
							<b style={{ color: "rgb(86, 86, 194)" }}>N</b>
							<b style={{ color: "orange" }}>A</b>
						</span>
					</Link>
				</h4>
			</div>
			<div className={styles.forgotContentWrapper}>
				<div className={styles.forgotContent}>
					<b style={{ color: "rgb(17, 175, 23)" }}>OTP Varification Successful</b>
					<h3 className="mt-3">Reset Your Password</h3>
					<div className="my-2">
						<label className="mx-4">New Password</label>
						<input className="p-2 rounded" autoFocus placeholder="Enter Password" />
					</div>
					<div className="my-3">
						<label className="mx-2">Confirm Password</label>
						<input className="p-2 rounded" placeholder="Re-enter Password" />
					</div>
					<button className="btn btn-success my-4">Save Password</button>
				</div>
			</div>
		</div>
	)
}

export default SetPassword
