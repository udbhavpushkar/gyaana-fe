import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import GyaanaImage from "../../assets/images/unnamed.jpg"
import styles from "./login.module.css"
import Link from "next/link"
import Fire from "../../assets/images/hh.gif"

const Login = (props) => {
  const router = useRouter()
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [sum, setSum] = useState("")
  const [sumErr, setSumErr] = useState("")

  const userRole = router.query.role

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 10))
    setNum2(Math.floor(Math.random() * 10))
  }, [])

  console.log("TEXT", router.query.userRole)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (num1 + num2 == sum) {
      setSumErr("")
      if (userRole == "Admin") {
        window.location = "/Admin"
      } else if (userRole == "Teacher") {
        window.location = "/Teacher"
      } else if (userRole == "Student") {
        window.location = "/Student"
      }
    } else if (sum == "") {
      setSumErr("Please enter sum")
    } else {
      setSumErr("Sum is Incorrect")
    }
  }

  return (
    <div className={styles.loginWrapper}>
      <div>
        <h4 style={{ backgroundColor: "purple", padding: "20px" }} className="text-center">
          Welcome {userRole?.toUpperCase()}
        </h4>
      </div>
      <div className="row w-100 my-4">
        <div className="col-sm-6 text-center">
          <div className={styles.loginImageContainer}></div>
          <Image style={{ objectFit: "cover" }} src={GyaanaImage} height={490} width={450} />
        </div>

        <div
          className="col-sm-5 text-center my-4"
          style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "16px", backgroundColor: "purple", color: "white" }}
        >
          {/* <h4 className="mb-4">Enter the details to Login</h4> */}
          <form onSubmit={(e) => handleSubmit(e)} style={{ margin: "20px" }}>
            <label htmlFor="username" className={styles.loginLabels}>
              Username :
            </label>
            <input id="username" autoFocus className={styles.loginInput} type="text" placeholder={`${userRole} Username`} />
            <br></br>
            <label htmlFor="password" className={styles.loginLabels}>
              Password :
            </label>

            <input id="password" className={styles.loginInput} type="password" placeholder="Password" />
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
              <Link href="#">
                <a className={styles.loginForgotLink}>Forgot Password</a>
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
