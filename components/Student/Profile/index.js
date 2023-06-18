import React, { useEffect, useState } from "react"
import Image from "next/image"
import GyaanaImage from "../../../assets/images/pic1.png"
import { getRequest } from "../../../utilities/rest_service"
import { USER_ID } from "../../../constants/localStorage"
import { formatDate } from "../../../utilities/date_services"

const Profile = () => {

  const [detail, setDetail] = useState({})

  useEffect(() => {
    fetchStudentDetails()
  }, [])

  const studentData = [
    {
      title: "Student Name",
      value: detail?.userId?.firstName + " " + detail?.userId?.lastName,
    },
    {
      title: "Class",
      value: detail?.grade?.name,
    },
    {
      title: "Section",
      value: detail?.section?.name,
    },
    {
      title: "Admission No",
      value: detail?.admissionNo,
    },
    {
      title: "Admission Date",
      value: formatDate(detail?.admissionDate),
    },
    {
      title: "Date Of Birth",
      value: formatDate(detail?.dob),
    },
    {
      title: "Email",
      value: detail?.userId?.email,
    },

  ]

  const fetchStudentDetails = async () => {
    try {
      let id = localStorage.getItem(USER_ID)
      let res = await getRequest(`student/getByUserId/${id}`)
      if (res.isSuccess) {
        setDetail(res.data)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{ backgroundColor: "rgb(198, 173, 198)" }}>
      <div className="row w-100 py-4">
        <div className="col-sm-7 mx-5" style={{ fontSize: "22px", fontFamily: "cursive", color: "purple" }}>
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            {studentData.map((data, index) => {
              return <div key={`student_info_${index}`} className="mb-2">
                <div style={{ borderBottom: "2px dotted purple" }}>
                  <span style={{ color: "black" }}>{data.title} : </span>
                  <span>{data.value}</span>
                </div>
              </div>
            })}
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
