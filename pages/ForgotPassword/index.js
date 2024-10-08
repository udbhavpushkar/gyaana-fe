import React, { useState } from "react"
import styles from "./style.module.css"
import Link from "next/link"

const ForgotPassword = () => {
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
					<p>Forgot Password?</p>
					<div className={`my-2 ${styles.emailWrapper}`}>
						<input className="p-2 rounded" onChange={(e) => setEmail(e.target.value)} autoFocus placeholder="Enter Email" />{" "}
						<button disabled={email ? false : true} className={`btn-sm btn btn-warning mx-2 ${styles.getOptBtn}`}>
							Get OTP
						</button>
					</div>
					<div className={`my-2 ${styles.emailWrapper}`}>
						<input className="p-2 rounded" onChange={(e) => setOtp(e.target.value)} disabled={email ? false : true} placeholder="Enter OTP" />
						<a className={styles.notGotOtpBtn}>Resend OTP?</a>
					</div>
					<Link
						href={{
							pathname: `/SetPassword`,
							query: {
								email: email,
							},
						}}
					>
						<button disabled={otp ? false : true} className="btn btn-success my-4">
							Proceed
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ForgotPassword
