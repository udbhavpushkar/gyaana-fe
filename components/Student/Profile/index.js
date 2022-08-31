import React from "react"
import Image from "next/image"
import GyaanaImage from "../../../assets/images/pic1.png"

const Profile = () => {
  return (
    <div style={{ backgroundColor: "rgb(198, 173, 198)" }}>
      <div className="row w-100 py-4">
        <div className="col-sm-7 mx-5" style={{ fontSize: "22px", fontFamily: "cursive", color: "purple" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            <div style={{ borderBottom: "2px dotted purple" }}>
              <span>Student Name :</span>
              <span>Akash Gupta</span>
            </div>
            <div style={{ borderBottom: "2px dotted purple" }}>
              <span>Class :</span>
              <span>III</span>
            </div>
            <div style={{ borderBottom: "2px dotted purple" }}>
              <span>Gender :</span>
              <span>Male</span>
            </div>
            <div style={{ borderBottom: "2px dotted purple" }}>
              <span>Contact :</span>
              <span>+91 8090606989</span>
            </div>
            <div style={{ borderBottom: "2px dotted purple" }}>
              <span>Address :</span>
              <span>Beniganj, Faizabad</span>
            </div>
            <div style={{ borderBottom: "2px dotted purple" }}>
              <span>Mother's Name :</span>
              <span>Mrs. Savita Gupta</span>
            </div>
            <div style={{ borderBottom: "2px dotted purple" }}>
              <span>Father's Name :</span>
              <span>Mr. Harsh Gupta</span>
            </div>
            <div style={{ borderBottom: "2px dotted purple" }}>
              <span>Parent's Contact :</span>
              <span>+91 8292766782</span>
            </div>
            <div style={{ borderBottom: "2px dotted purple" }}>
              <span>Email :</span>
              <span>gupta@gmail.com</span>
            </div>
          </div>
        </div>
        <div
          className="col-sm-4 text-center my-4"
          style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "16px", backgroundColor: "purple", color: "white" }}
        >
          <Image style={{ objectFit: "cover" }} src={GyaanaImage} height={490} width={450} />
        </div>
      </div>
    </div>
  )
}

export default Profile
