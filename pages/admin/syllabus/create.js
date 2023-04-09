import React, { useEffect, useState } from "react"
import AdminLayout from "../../../components/Admin"
import { getRequest, postRequest } from "../../../utilities/rest_service"
import { handleFormData } from "../../../utilities/form_services"
import { toast } from "react-toastify"

const SyllabusCreate = () => {

    const [subjectList, setSubjectList] = useState([])
    const [academicYear, setAcademicYear] = useState([])
    const [activeYear, setActiveYear] = useState(null)
    const [grades, setGrades] = useState([])
    const [formData, setFormData] = useState({})

    useEffect(() => {
        getAcademicYearList()
        fetchSubjects()
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

    const handleInputChange = (e) => {
        handleFormData(e, formData, setFormData)
    }

    const handleSyllabusSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await postRequest(`syllabus/`, formData)
            if (formData.grade && formData.file) {
                if (response.isSuccess) {
                    toast.success("Event created successfully !")
                    e.target.reset()
                } else {
                    toast.error("Something went wrong !")
                }
            } else {
                toast.error("Please give class and file.")
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AdminLayout>
            <div className="box-shadow-1 p-2">
                <div className="text-center mb-3">
                    <h3>Create Syllabus</h3>
                    <hr />
                </div>
                <div>
                    <form onSubmit={handleSyllabusSubmit} style={{ padding: "30px" }}>
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
                                    onChange={handleInputChange}
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
                        </div>

                        <div className="form-group row">
                            <label
                                htmlFor="subject_04"
                                className="col-sm-2 col-md-3 col-form-label"
                            >
                                Subject
                            </label>
                            <div className="col-sm-8 col-md-6 my-2 position-relative">
                                <select
                                    required
                                    className={`form-control`}
                                    onChange={handleInputChange}
                                    name="subject"
                                    id="subject_04"
                                >
                                    <option value="" className={`form-control`}>Select Subject</option>
                                    {subjectList.map((data, index) => {
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
                            <label htmlFor="start-date" className="col-sm-2 col-form-label">
                                Start Date
                            </label>
                            <div className="col-sm-8 my-2">
                                <input
                                    onChange={handleInputChange}
                                    type="date"
                                    name="startDate"
                                    id="start-date"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="end-date" className="col-sm-2 col-form-label">
                                End Date
                            </label>
                            <div className="col-sm-8 my-2">
                                <input
                                    onChange={handleInputChange}
                                    type="date"
                                    name="endDate"
                                    id="end-date"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="file" className="col-sm-2 col-form-label">
                                File
                            </label>
                            <div className="col-sm-8 my-2">
                                <input
                                    required
                                    onChange={handleInputChange}
                                    type="file"
                                    name="file"
                                    id="file"
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="text-center my-4">
                            <button
                                type="submit"
                                style={{ width: "150px" }}
                                className="btn btn-success"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </AdminLayout>
    )
}

export default SyllabusCreate
