import React from "react"
import EmployeeLayout from "../../components/Employee"
import { getRequest } from "../../utilities/rest_service"
import { useEffect } from "react"
import { useState } from "react"

const Teacher = (props) => {
  const [gradeDetail, setGradeDetail] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    fetchGrade()
  }, [])


  const fetchGrade = async () => {
    try {
      const res = await getRequest(`employee/getGrade/`)
      if (res.isSuccess) {
        console.log(res.data);
        setGradeDetail(res.data)
      } else {
        setError("You are not assigned as a class teacher.")
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <EmployeeLayout>
      {gradeDetail && <h2>You are class teacher of {gradeDetail?.grade?.name} {gradeDetail?.name}</h2>}
      {error && <h2>{error}</h2>}
    </EmployeeLayout>
  )

}

export default Teacher
