import React, { useEffect, useState } from "react"
import AdminLayout from "../../../components/Admin"
import { getRequest } from "../../../utilities/rest_service"
import { toast } from "react-toastify"

const StudentAttendance = () => {

    const [academicYear, setAcademicYear] = useState([])
    const [activeYear, setActiveYear] = useState()
    const [grades, setGrades] = useState([])
    const [activeGrades, setActiveGrades] = useState()
    const [sectionList, setSectionList] = useState([])
    const [activeSection, setActiveSection] = useState()
    const [studentList, setStudentList] = useState([])
    const [selectedDate, setSelectedDate] = useState(null)


    useEffect(() => {
        getAcademicYearList()
    }, [])

    useEffect(() => {
        if (activeYear) {
            getClasses(activeYear)
        }
    }, [activeYear])

    useEffect(() => {
        if (activeGrades) {
            getSectionList(activeGrades)
        }
    }, [activeGrades])

    const getAcademicYearList = async () => {
        try {
            let response = await getRequest(`academic-year`)
            if (response.isSuccess) {
                setAcademicYear(response.data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getClasses = async (year) => {
        try {
            let response = await getRequest(`grade/?year=${year}`)
            if (response.isSuccess) {
                setGrades(response.data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getSectionList = async (gradeId) => {
        try {
            let response = await getRequest(`section/${gradeId}`)
            if (response.isSuccess) {
                setSectionList(response.data)
            } else {
                toast.success("Something went wrong")
            }
        } catch (error) {

        }
    }

    const fetchAttendance = async (e) => {
        e.preventDefault()
        try {
            let response = await getRequest(`attendance-student/?section=${activeSection}&date=${selectedDate}`)
            if (response.isSuccess) {
                setStudentList(response.data.attendance)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return <AdminLayout>
        <div className="box-shadow-1">
            <div className="text-center mb-3">
                <h3>Attendance</h3>
                <hr />
            </div>
            <div>
                <form onSubmit={fetchAttendance} style={{ padding: "30px" }}>
                    <div className="form-group row">
                        <label
                            htmlFor="exampleFormControlSelect1"
                            className="col-sm-2 col-form-label"
                        >
                            Academic Year
                        </label>
                        <div className="col-sm-8 my-2 position-relative">
                            <select
                                name="academicYear"
                                onChange={(e) => {
                                    setActiveYear(e.target.value)
                                }}
                                className={`form-control`}
                                id="academic_year_02"
                            >
                                <option value={null} className={` form-control`}>
                                    Select Academic Year
                                </option>
                                {academicYear.map((data, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={data?._id}
                                            className="form-control"
                                        >
                                            {data.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="exampleFormControlSelect1"
                            className="col-sm-2 col-form-label"
                        >
                            Select Class
                        </label>
                        <div className="col-sm-8 my-2 position-relative">
                            <select
                                className={` form-control`}
                                onChange={(e) => {
                                    setActiveGrades(e.target.value)
                                    // handleInputChange(e)
                                }}
                                name="grade"
                                id="class_dropdown"
                            >
                                <option className={`form-control`}>Select Class</option>
                                {grades.map((data, index) => {
                                    return (
                                        <option key={`class_${index}`} value={data._id}>
                                            {data.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="exampleFormControlSelect1"
                            className="col-sm-2 col-form-label"
                        >
                            Select Section
                        </label>
                        <div className="col-sm-8 my-2 position-relative">
                            <select
                                className={` form-control`}
                                onChange={(e) => {
                                    setActiveSection(e.target.value)

                                }}
                                name="section"
                                id="section_dropdown"
                            >
                                <option className={`form-control`}>Select Section</option>
                                {sectionList.map((data, index) => {
                                    return (
                                        <option key={`section_${index}`} value={data._id}>
                                            {data.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
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
                                onChange={(e) => {
                                    setSelectedDate(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <button type="submit" style={{ width: "150px" }} className="btn btn-success">
                            Show
                        </button>
                    </div>
                </form>
                {studentList.length > 0 && <table className={`table`}>
                    <thead>
                        <tr>
                            <th scope="col">Roll No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Present</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.map((data, index) => {
                            let { firstName, lastName } = data?.studentId?.userId
                            let text = data?.isPresent ? "Present" : "Absent"
                            return <tr key={`student_${index}`}>
                                <td>{index + 1}</td>
                                <td>{firstName + " " + lastName}</td>
                                <td className={`${data?.isPresent ? "text-success" : "text-danger"}`}>{text}</td>
                            </tr>
                        })}

                    </tbody>
                </table>}

            </div>
        </div>
    </AdminLayout>
}

export default StudentAttendance