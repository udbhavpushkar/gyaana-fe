import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import AdminLayout from "../../../../components/Admin"
import { getRequest } from "../../../../utilities/rest_service"
import EditProfile from "../../../../components/Admin/profile/student/EditProfile"
import Profile from "../../../../components/Admin/profile/student/Profile"

const StudentProfile = () => {
    const router = useRouter()
    const { id } = router.query

    const [studentData, setStudentData] = useState()
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        if (id) {
            fetchStudent(id)
        }

    }, [id])

    const fetchStudent = async (studentId) => {
        try {
            let response = await getRequest(`student/${studentId}`)
            if (response.isSuccess) {
                setStudentData(response.data)
            }

        } catch (error) {
            console.log(error);
        }
    }

    return <AdminLayout>
        <div style={{ boxShadow: "0px 3px 6px rgba(128, 128, 128, 0.636)" }}>
            <div className="text-center mb-3">
                <h3>Student Profile</h3>
                <hr />
            </div>
            {studentData && <>
                <button onClick={() => { setIsEdit(prev => !prev) }} className="btn btn-outline-info">{isEdit ? "Cancel" : "Edit"}</button>
                <div>
                    {isEdit ? <EditProfile data={studentData} /> : <Profile data={studentData} />}
                </div>
            </>}

        </div>
    </AdminLayout>
}

export default StudentProfile