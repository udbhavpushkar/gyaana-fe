import React, { useState, useEffect } from "react"
import EmployeeLayout from "../../components/Employee"
import { getRequest, postRequest } from "../../utilities/rest_service"
import { toast } from "react-toastify"
import { handleFormData } from "../../utilities/form_services"
import { Spinner } from "react-bootstrap"
import { formatDate, formatDateAndTime } from "../../utilities/date_services"

const StudentAttendanceList = (props) => {

    const [gradeDetail, setGradeDetail] = useState()
    const [activeSection, setActiveSection] = useState()
    const [attendanceList, setAttendanceList] = useState([])
    const [selectedDate, setSelectedDate] = useState(null)


    useEffect(() => {
        fetchGrade()
    }, [])

    useEffect(() => {
        if (gradeDetail?._id) {
            fetchAttendance()
        }
    }, [gradeDetail])


    const fetchGrade = async () => {
        try {
            const res = await getRequest(`employee/getGrade/`)
            if (res.isSuccess) {
                setGradeDetail(res.data)
            } else {
                setError("You are not assigned as a class.")
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchAttendance = async () => {
        try {
            if (gradeDetail?._id) {
                let response = await getRequest(`attendance-student/?section=${gradeDetail?._id}`)
                if (response.isSuccess) {
                    setAttendanceList(response?.data)
                } else {
                    toast.error(response?.data)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <EmployeeLayout>
            {gradeDetail?._id ? <div className="text-center mb-3">
                <h3>Attendance List : {gradeDetail?.grade?.name} {gradeDetail?.name}</h3>
                <hr />
                {attendanceList?.length > 0 && <table className={`table`}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Creation Date</th>
                            <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceList.map((data, index) => {
                            return <tr key={`attendance_${index}`}>
                                <td>{index + 1}</td>
                                <td>{formatDate(data.date)}</td>
                                <td>{formatDateAndTime(data.createdAt)}</td>
                                <td><a href={`../attendance/${data._id}`} target="_blank">View</a></td>
                            </tr>
                        })}
                    </tbody>
                </table>}

            </div> : <div><Spinner /></div>}



        </EmployeeLayout>
    )

}

export default StudentAttendanceList
