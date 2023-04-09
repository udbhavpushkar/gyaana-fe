import React, { useEffect, useState } from "react";
import { getRequest, postRequest } from "../../../utilities/rest_service";
import { toast } from "react-toastify";
import TeacherDropdown from "./TeacherDropdown";

const AssignSubjectTeacher = ({ sectionData, close }) => {

    const [subjectList, setSubjectList] = useState([])
    const [teacherList, setTeacherList] = useState([])
    const [subjectTeacher, setSubjectTeacher] = useState([])

    useEffect(() => {
        fetchSubjects()
        fetchEmployee()
        fetchSubjectTeachers()
    }, [])

    const fetchSubjects = async () => {
        try {
            let response = await getRequest(`subject/`)
            if (response.isSuccess) {
                setSubjectList(response.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchEmployee = async () => {
        try {
            let response = await getRequest(`employee/`)
            if (response.isSuccess) {
                setTeacherList(response.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchSubjectTeachers = async () => {
        try {
            let response = await getRequest(`subject-teacher/?section=${sectionData._id}`)
            if (response.isSuccess) {
                setSubjectTeacher(response.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleTeacherAssign = async (teacherId, subjectId) => {
        try {
            let payload = {
                section: sectionData._id,
                subject: subjectId,
                teacher: teacherId
            }
            const response = await postRequest(`subject-teacher`, payload)
            if (response.isSuccess) {
                fetchSubjectTeachers()
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <div>
        <h3>Section : {sectionData.name}</h3>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Subject Name</th>
                    <th scope="col">Teacher</th>
                </tr>
            </thead>
            <tbody>
                {subjectList.map((data, index) => {
                    let teacherName = ""
                    let teacherIndex = subjectTeacher.findIndex(st => st.subject._id === data._id)
                    if (teacherIndex > -1) {
                        teacherName = subjectTeacher[teacherIndex].teacher.userId.firstName + " " + subjectTeacher[teacherIndex].teacher.userId.lastName
                    }
                    return <tr key={`subject_assign_${data._id}`}>
                        <td>{index + 1}</td>
                        <td>{data.name}</td>
                        <td>
                            <TeacherDropdown data={data} handleChange={handleTeacherAssign} teacherName={teacherName} teacherList={teacherList} />
                        </td>
                    </tr>
                })}

            </tbody>
        </table>
    </div>
}

export default AssignSubjectTeacher