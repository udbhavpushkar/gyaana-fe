import React from "react"
import EmployeeLayout from "../../components/Employee"
import { useRouter } from "next/router"
import { getRequest } from "../../utilities/rest_service"
import { useEffect } from "react"
import { useState } from "react"

const Attendance = () => {
    const router = useRouter()
    const { id } = router.query

    const [details, setDetails] = useState()

    useEffect(() => {
        if (id) {
            fetchAttendanceById()
        }
    }, [id])

    const fetchAttendanceById = async () => {
        try {
            let res = await getRequest(`attendance-student/${id}`)
            if (res.isSuccess) {
                setDetails(res.data)
            }
        } catch (error) {
            console.error(error);
        }
    }

    return <EmployeeLayout>
        <h2>Attendance : {details?.section?.grade?.name} {details?.section?.name}</h2>
        <div>
            {details?.attendance?.length > 0 && <table className={`table`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Present / Absent</th>
                    </tr>
                </thead>
                <tbody>
                    {details.attendance.map((data, index) => {
                        let { firstName, lastName } = data?.studentId?.userId
                        return <tr key={`attendance_${index}`}>
                            <td>{index + 1}</td>
                            <td>{firstName} {lastName}</td>
                            <td className={data.isPresent ? "text-success" : "text-danger"}>{data.isPresent ? "Present" : "Absent"}</td>
                        </tr>
                    })}
                </tbody>
            </table>}
        </div>
    </EmployeeLayout>
}

export default Attendance