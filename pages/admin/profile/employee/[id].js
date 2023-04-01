import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import AdminLayout from "../../../../components/Admin"
import { getRequest } from "../../../../utilities/rest_service"
import EditProfile from "../../../../components/Admin/profile/employee/EditProfile"
import Profile from "../../../../components/Admin/profile/employee/Profile"

const EmployeeProfile = () => {
    const router = useRouter()
    const { id } = router.query

    const [employeeData, setEmployeeData] = useState()
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        if (id) {
            fetchEmployee(id)
        }
    }, [id])

    const fetchEmployee = async (employeeId) => {
        try {
            let response = await getRequest(`employee/${employeeId}`)
            if (response.isSuccess) {
                setEmployeeData(response.data)
            }

        } catch (error) {
            console.log(error);
        }
    }

    return <AdminLayout>
        <div style={{ boxShadow: "0px 3px 6px rgba(128, 128, 128, 0.636)" }}>
            <div className="text-center mb-3">
                <h3>Employee Profile</h3>
                <hr />
            </div>
            {employeeData && <>
                <button onClick={() => { setIsEdit(prev => !prev) }} className="btn btn-outline-info">{isEdit ? "Cancel" : "Edit"}</button>
                <div>
                    {isEdit ? <EditProfile data={employeeData} /> : <Profile data={employeeData} />}
                </div>
            </>}

        </div>
    </AdminLayout>
}

export default EmployeeProfile