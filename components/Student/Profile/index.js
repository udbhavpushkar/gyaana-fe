import React from "react"
import Image from "next/image"
import GyaanaImage from "../../../assets/images/pic1.png"

const Profile = () => {
  const studentData = [
    {
      title: "Student Name :",
      value: "Akash Gupta",
    },
    {
      title: "Class :",
      value: "III",
    },
    {
      title: "House :",
      value: "xyz",
    },
    {
      title: "Contact :",
      value: "+91 8899776655",
    },
    {
      title: "Father's Name :",
      value: "Mr. Shailesh Gupta",
    },
    {
      title: "Mother's Name :",
      value: "Mrs. Savita Gupta",
    },
    {
      title: "Student Name :",
      value: "Akash Gupta",
    },
    {
      title: "Student Name :",
      value: "Akash Gupta",
    },
    {
      title: "Student Name :",
      value: "Akash Gupta",
    },
  ]
  return (
    <div style={{ backgroundColor: "rgb(198, 173, 198)" }}>
      <div className="row w-100 py-4">
        <div className="col-sm-7 mx-5" style={{ fontSize: "22px", fontFamily: "cursive", color: "purple" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            {studentData.map((item, index) => (
              <div key={`${item.title}${index}`}>
                <div style={{ borderBottom: "2px dotted purple" }}>
                  <span style={{ color: "black" }}>{item.title}</span>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
            {/*             
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
            </div> */}
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
