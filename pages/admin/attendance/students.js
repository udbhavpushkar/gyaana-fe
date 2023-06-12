import React, { useEffect, useState } from "react"
import AdminLayout from "../../../components/Admin"
import { getRequest, patchRequest, postRequest } from "../../../utilities/rest_service"
import { toast } from "react-toastify"
import { handleFormData } from "../../../utilities/form_services"

const StudentAttendance = () => {

    const [academicYear, setAcademicYear] = useState([])
    const [activeYear, setActiveYear] = useState()
    const [grades, setGrades] = useState([])
    const [activeGrades, setActiveGrades] = useState()
    const [sectionList, setSectionList] = useState([])
    const [activeSection, setActiveSection] = useState()
    const [studentList, setStudentList] = useState([])
    const [selectedStudents, setSelectedStudents] = useState([])

    const [formdata, setFormdata] = useState({})

    const resetStates = () => {
        setActiveYear()
        setActiveGrades()
        setActiveSection()
        setSectionList([])
        setSelectedStudents([])
        setStudentList([])
    }

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

    useEffect(() => {
        if (activeSection) {
            getStudentList(activeSection)
        }
    }, [activeSection])

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
                toast.error("Something went wrong")
            }
        } catch (error) {

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
            const response = await postRequest(`attendance-student/`, payload)
            if (response.isSuccess) {
                console.log(response.data);
                toast.success("Attendance successful")
            } else {
                toast.error("Already done.")
            }
        } catch (error) {
            console.error(error);
        }
    }

    return <AdminLayout>
        <div className="box-shadow-1">
            <div className="text-center mb-3">
                <h3>Attendance</h3>
                <hr />
            </div>
            <div>
                <form onSubmit={handleAttendanceSubmit} style={{ padding: "30px" }}>
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
                                    handleInputChange(e)
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
            </div>
        </div>
    </AdminLayout>
}

export default StudentAttendance