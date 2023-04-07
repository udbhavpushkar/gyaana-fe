import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import AdminLayout from "../../../components/Admin"
import Collapsable from "../../../components/Custom/Collapsable"
import { getRequest } from "../../../utilities/rest_service"
import AssignClassTeacher from "../../../components/Admin/AssignClassTeacher"

const EmployeeProfile = () => {
    const router = useRouter()
    const { id } = router.query

    const [gradeData, setGradeList] = useState()
    const [sectionList, setSectionList] = useState([])
    const [selectedSection, setSelectedSection] = useState(null)
    const [task, setTask] = useState(null)

    useEffect(() => {
        if (id) {
            fetchSections()
            fetchGrade()
        }
    }, [id])

    const fetchSections = async () => {
        try {
            let response = await getRequest(`section/${id}`)
            if (response.isSuccess) {
                setSectionList(response.data)
            }

        } catch (error) {
            console.log(error);
        }
    }

    const fetchGrade = async () => {
        try {
            let response = await getRequest(`grade/${id}`)
            if (response.isSuccess) {
                setGradeList(response.data)
            }

        } catch (error) {
            console.log(error);
        }
    }

    const handleAssignClassTeacherClick = (data) => {
        setSelectedSection(data)
        setTask("assign_class_teacher")
    }

    const handleCloseClick = () => {
        setTask(null)
        setSelectedSection(null)
    }


    return <AdminLayout>
        <div className="box-shadow-1">
            <div className="text-center mb-3">
                <h3>Class Management - {gradeData?.name}</h3>
                <hr />
            </div>

            {selectedSection && task === "assign_class_teacher" && <div className="px-3">
                <div onClick={handleCloseClick} className="mb-2 btn btn-outline-danger text-right">Cancel</div>
                <AssignClassTeacher sectionData={selectedSection} close={handleCloseClick} fetchSections={fetchSections} />
            </div>}
            {task === null && <Collapsable heading={`Section List`}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Class Strength</th>
                            <th scope="col">Class Teacher</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sectionList.map((data, index) => {
                            let userData = data?.teacher?.userId
                            return (
                                <tr key={`section-${index}`}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.name}</td>
                                    <td>{data.maxStudent}</td>
                                    <td>
                                        {data?.teacher && `${userData?.firstName} ${userData?.lastName} `}
                                        <span className="link text-info" onClick={() => { handleAssignClassTeacherClick(data) }}>{data?.teacher ? "Change" : "Assign"}</span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Collapsable>}



        </div>
    </AdminLayout>
}

export default EmployeeProfile