import React, { useState, useEffect } from "react"
import EmployeeLayout from "../../components/Employee"
import { getRequest, postRequest } from "../../utilities/rest_service"
import { toast } from "react-toastify"
import { handleFormData } from "../../utilities/form_services"

const StudentAttendance = (props) => {
    const [gradeDetail, setGradeDetail] = useState()
    const [studentList, setStudentList] = useState([])
    const [selectedStudents, setSelectedStudents] = useState([])
    const [formdata, setFormdata] = useState({})
    const [error, setError] = useState()


    useEffect(() => {
        fetchGrade()
    }, [])

    useEffect(() => {
        if (gradeDetail?._id) {
            getStudentList(gradeDetail._id)
        }
    }, [gradeDetail])


    const fetchGrade = async () => {
        try {
            const res = await getRequest(`employee/getGrade/`)
            if (res.isSuccess) {
                console.log(res.data);
                setGradeDetail(res.data)
            } else {
                setError("You are not assigned as a class.")
            }
        } catch (error) {
            console.error(error);
        }
    }

    const getStudentList = async (sectionId) => {
        try {
            let response = await getRequest(`student/?section=${sectionId}`)
            if (response.isSuccess) {
                setStudentList(response.data)
                let data = response.data.map(s => {
                    return { studentId: s._id, isPresent: true }
                })
                setSelectedStudents(data)

            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleStudentcheck = (e) => {
        let data = [...selectedStudents]
        data[e.target.value].isPresent = e.target.checked
        setSelectedStudents(data)
    }

    const handleInputChange = (e) => {
        handleFormData(e, formdata, setFormdata)
    }

    const handleAttendanceSubmit = async (e) => {
        e.preventDefault()
        try {
            let payload = { ...formdata }
            payload["attendance"] = [...selectedStudents]
            payload["section"] = gradeDetail?._id
            if (!payload.date) {
                toast.error("Please enter date.")
                throw "Date error"
            } else {
                const response = await postRequest(`attendance-student/`, payload)
                if (response.isSuccess) {
                    console.log(response.data);
                    toast.success("Attendance successful")
                } else {
                    toast.error("Already done.")
                }
            }

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <EmployeeLayout>
            <div className="text-center mb-3">
                <h3>Attendance : {gradeDetail?.grade?.name} {gradeDetail?.name}</h3>
                <hr />
            </div>
            <form onSubmit={handleAttendanceSubmit} style={{ padding: "30px" }}>
                <div className="form-group row">
                    <label htmlFor="attendance-date" className="col-sm-2 col-form-label">
                        Date
                    </label>
                    <div className="col-sm-8 my-2">
                        <input
                            type="date"
                            name="date"
                            id="attendance-date"
                            className="form-control"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <h3>Select Students</h3>

                <table className={`table`}>
                    <thead>
                        <tr>
                            <th scope="col">Roll No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Present</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.map((data, index) => {
                            return <tr key={`student_${index}`}>
                                <td>{index + 1}</td>
                                <td>{data?.userId?.firstName}</td>
                                <td>
                                    <input type="checkbox" onChange={handleStudentcheck} checked={selectedStudents[index]?.isPresent} value={index} />
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>

                <div className="text-center my-4">
                    <button type="submit" style={{ width: "150px" }} className="btn btn-success">
                        Submit Attendance
                    </button>
                </div>
            </form>

        </EmployeeLayout>
    )

}

export default StudentAttendance
