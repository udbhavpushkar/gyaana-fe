import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import GyaanaImage from "../../assets/images/unnamed.jpg"
import styles from "./login.module.css"
import Link from "next/link"
import Fire from "../../assets/images/hh.gif"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleDown } from "@fortawesome/free-solid-svg-icons"
import { postRequest } from "../../utilities/rest_service"
import { toast } from "react-toastify"

const Login = (props) => {
	const router = useRouter()
	const [num1, setNum1] = useState("")
	const [num2, setNum2] = useState("")
	const [sum, setSum] = useState("")
	const [sumErr, setSumErr] = useState("")
	const initialValues = { email: "", password: "" }
	const [formData, setFormData] = useState(initialValues)
	const [errorData, setErrorData] = useState({})

	const userRole = router.query.role

	useEffect(() => {
		setNum1(Math.floor(Math.random() * 10))
		setNum2(Math.floor(Math.random() * 10))

		if (localStorage.getItem("auth_token")) {
			let role = localStorage.getItem("role")
			redirectToDashboard(role)
		}
	}, [])

	const redirectToDashboard = (role) => {
		if (role) {
			window.location = "/" + role
		}
	}

	const login = async () => {
		try {
			//Code to add admin => On first deployment
			/* let myData = { name: "Admin", role: "admin", password: "12345678", email: "admin@gmail.com", mobile: "8574563835" }
      let response = await postRequest("user/register/", myData)
      if (response.isSuccess) {
        console.log(response.data);
      } */
			let res = await postRequest("user/login/", formData)
			if (res.isSuccess) {
				localStorage.setItem("auth_token", res.data.token)
				localStorage.setItem("name", res.data.name)
				localStorage.setItem("email", res.data.email)
				localStorage.setItem("user_id", res.data._id)
				localStorage.setItem("role", res.data.role)
				redirectToDashboard(res.data.role)
				toast.success(`Login Successfully`)
			} else {
				toast.error("Login Failed")
			}
		} catch (error) {
			console.log(error)
		}
	}

	const handleFormChange = (e) => {
		// let data = { ...formData }
		// data[e.target.name] = e.target.value
		// setFormData(data)
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}
	const handleImageLogo = () => {
		window.location = "/"
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setErrorData(validate(formData))
		if (Object.keys(errorData).length !== null) {
			if (num1 + num2 == sum) {
				setSumErr("")
				login()
			} else if (sum == "") {
				setSumErr("Please enter sum")
			} else {
				setSumErr("Sum is Incorrect")
			}
		}
	}
	const validate = (val) => {
		const errors = {}
		if (!val.email) {
			errors.email = "Email is Required"
		}
		if (!val.password) {
			errors.password = "Password is Required"
		}
		return errors
	}

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
			<div className="row w-100 my-4">
				<div className="col-sm-6 text-center">
					<div className={styles.loginImageContainer}></div>
					<Image onClick={handleImageLogo} style={{ objectFit: "cover", cursor: "pointer" }} src={GyaanaImage} height={490} width={450} />
				</div>

				<div
					className="col-sm-5 text-center my-4"
					style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "16px", backgroundColor: "purple", color: "white" }}
				>
					{/* <h4 className="mb-4">Enter the details to Login</h4> */}
					<form onSubmit={(e) => handleSubmit(e)} style={{ margin: "20px", position: "relative" }}>
						<label htmlFor="username" className={styles.loginLabels}>
							Username :
						</label>
						<input id="email" autoFocus className={styles.loginInput} type="text" placeholder={`Enter Username`} onChange={handleFormChange} name="email" />
						<p style={{ color: "red", position: "absolute", top: "44px", right: "130px", fontSize: "14px" }}>{errorData.email}</p>
						<br></br>
						<label htmlFor="password" className={styles.loginLabels}>
							Password :
						</label>

						<input id="password" className={styles.loginInput} type="password" placeholder="Enter Password" onChange={handleFormChange} name="password" />
						<p style={{ color: "red", position: "absolute", top: "118px", right: "105px", fontSize: "14px" }}>{errorData.password}</p>
						<br></br>
						<div style={{ marginBottom: "20px", position: "relative" }}>
							<span>Enter the Sum:</span>
							<input value={num1} disabled style={{ maxWidth: "30px", marginLeft: "10px", marginRight: "10px", paddingLeft: "7px" }} />
							<span>+</span>
							<input value={num2} disabled style={{ maxWidth: "30px", marginLeft: "10px", marginRight: "10px", paddingLeft: "7px" }} />
							<span>=</span>
							<input
								value={sum}
								onChange={(e) => setSum(e.target.value)}
								style={{ maxWidth: "30px", marginLeft: "10px", marginRight: "10px", paddingLeft: "7px" }}
							/>
							<span className={styles.summErrMsg}>{sumErr}</span>
						</div>
						<div style={{ marginTop: "40px" }}>
							<Link href="/ForgotPassword">
								<a className={styles.loginForgotLink}>Forgot Password?</a>
							</Link>
						</div>
						<button className="btn btn-success my-4" type="submit">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
