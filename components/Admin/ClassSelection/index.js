import React, { useEffect, useState } from "react"
import { getRequest } from "../../../utilities/rest_service"

const ClassSelection = (props) => {

    const [academicYear, setAcademicYear] = useState([])
    const [activeYear, setActiveYear] = useState()
    const [grades, setGrades] = useState([])
    const [activeGrades, setActiveGrades] = useState()
    const [sectionList, setSectionList] = useState([])

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
            console.error(error);
        }
    }

    return <>
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
                    className={`form-control`}
                    onChange={(e) => {
                        props.setActiveSection(e.target.value)
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
    </>
}

export default ClassSelection