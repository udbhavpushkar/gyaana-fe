import React, { useEffect, useState } from "react"
import AdminLayout from "../../../components/Admin"
import { deleteRequest, getRequest } from "../../../utilities/rest_service"
import { formatDate, formatDateAndTime } from "../../../utilities/date_services"
import { toast } from "react-toastify"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"


const SyllabusList = () => {
    const [academicYear, setAcademicYear] = useState([])
    const [activeYear, setActiveYear] = useState(null)
    const [grades, setGrades] = useState([])
    const [activeGrade, setActiveGrade] = useState(null)

    const [syllabus, setSyllabus] = useState([])


    useEffect(() => {
        getAcademicYearList()
    }, [])

    useEffect(() => {
        if (activeYear) {
            getClasses(activeYear)
        }
    }, [activeYear])

    const getAcademicYearList = async () => {
        try {
            let response = await getRequest(`academic-year/`)
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

    const fetchSyllabus = async (gradeId) => {
        try {
            let response = await getRequest(`syllabus/?grade=${gradeId}`)
            if (response.isSuccess) {
                setSyllabus(response.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await deleteRequest(`syllabus/${id}`)
            if (response.isSuccess) {
                fetchSyllabus(activeGrade)
                toast.success("Deleted !")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AdminLayout>
            <div>
                <div>
                    <div className="form-group row">
                        <label
                            htmlFor="academic_year_01"
                            className="col-sm-2 col-md-3  col-form-label"
                        >
                            Academic Year
                        </label>
                        <div className="col-sm-8 col-md-6  my-2 position-relative">
                            <select
                                name="academicYear"
                                onChange={(e) => {
                                    setActiveYear(e.target.value)
                                }}
                                className={` form-control`}
                                id="academic_year_01"
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
                            className="col-sm-2 col-md-3 col-form-label"
                        >
                            Class
                        </label>
                        <div className="col-sm-8 col-md-6 my-2 position-relative">
                            <select
                                required
                                className={`form-control`}
                                onChange={(e) => { setActiveGrade(e.target.value) }}
                                name="grade"
                                id="admission_date_02"
                            >
                                <option value="" className={`form-control`}>Select Class</option>
                                {grades.map((data, index) => {
                                    return (
                                        <option key={`class_${index}`} value={data._id}>
                                            {data.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="text-center my-4">
                            <button
                                disabled={!activeGrade}
                                onClick={() => {
                                    fetchSyllabus(activeGrade)
                                }}
                                style={{ width: "150px" }}
                                className="btn btn-success"
                            >
                                Show
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {syllabus.map((data, index) => {
                            return <tr key={data._id}>
                                <td>{index + 1}</td>
                                <td> <span className="link">{data?.subject?.name}</span></td>
                                <td>{data?.startDate && formatDateAndTime(data?.startDate)}</td>
                                <td>{data?.endDate && formatDateAndTime(data?.endDate)}</td>
                                <td><FontAwesomeIcon onClick={() => { handleDelete(data._id) }} className="text-danger pointer" icon={faTrash} /></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}

export default SyllabusList
