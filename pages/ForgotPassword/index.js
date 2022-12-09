import React from "react"
import styles from "./style.module.css"
import Link from "next/link"
import { useState } from "react"

const ForgotPassword = () => {
	const [email, setEmail] = useState("")
	const [otp, setOtp] = useState("")
	return (
		<div className={styles.loginWrapper}>
			<div style={{ backgroundColor: "rgb(199, 142, 199)", padding: "10px" }}>
				<h4 className="text-center">
					Welcome To
					<b style={{ marginLeft: "10px", color: "purple" }}>G</b>
					<b style={{ color: "yellow" }}>Y</b>
					<b style={{ color: "red" }}>A</b>
					<b style={{ color: "blue" }}>A</b>
					<b style={{ color: "rgb(86, 86, 194)" }}>N</b>
					<b style={{ color: "orange" }}>A</b>
				</h4>
			</div>
			<div className={styles.forgotContentWrapper}>
				<div className={styles.forgotContent}>
					<p>Forgot Password?</p>
					<div className={`my-2 ${styles.emailWrapper}`}>
						<input onChange={(e) => setEmail(e.target.value)} autoFocus placeholder="Enter Email" />{" "}
						<button disabled={email ? false : true} className={`btn-sm btn btn-warning mx-2 ${styles.getOptBtn}`}>
							Get OTP
						</button>
					</div>
					<input onChange={(e) => setOtp(e.target.value)} className="my-2" placeholder="Enter OTP" />
					<button disabled={otp ? false : true} className="btn btn-success my-4">
						Proceed
					</button>
				</div>
			</div>
		</div>
	)
}

export default ForgotPassword
