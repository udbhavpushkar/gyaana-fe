import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import GyaanaImage from "../../assets/images/unnamed.jpg"
import styles from "./login.module.css"
import Link from "next/link"

const Login = (props) => {
  const router = useRouter()

  const userRole = router.query.role

  console.log("TEXT", router.query.userRole)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (userRole == "Admin") {
      window.location = "/AdminHome/"
    } else if (userRole == "Teachers") {
      window.location = "/TeacherHome/"
    } else if (userRole == "Student") {
      window.location = "/StudentHome/"
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
            <div style={{ marginBottom: "20px" }}>
              <span>Enter the Sum:</span>
              <input defaultValue={4} style={{ maxWidth: "30px", marginLeft: "10px", marginRight: "10px", paddingLeft: "7px" }} />
              <span>+</span>
              <input defaultValue={7} style={{ maxWidth: "30px", marginLeft: "10px", marginRight: "10px", paddingLeft: "7px" }} />
              <span>=</span>
              <input style={{ maxWidth: "30px", marginLeft: "10px", marginRight: "10px", paddingLeft: "7px" }} />
            </div>
            <div>
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
