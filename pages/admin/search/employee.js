import React, { useEffect, useState } from "react"
import AdminLayout from "../../../components/Admin"
import { getRequest } from "../../../utilities/rest_service"

const FILTER_FIELDS = ["firstName", "email", "employeeNo", "category"]

const EmployeeAdmission = () => {
    const [academicYear, setAcademicYear] = useState([])
    const [subjects, setSubjects] = useState([])
    const [category, setCategory] = useState([])
    const [position, setPosition] = useState([])
    const [activeCategory, setActiveCategory] = useState([])

    useEffect(() => {
        getAcademicYearList()
    }, [])

    const getAcademicYearList = async () => {
        try {
            let response = await getRequest(`academic-year`)
            if (response.isSuccess) {
                setAcademicYear(response.data)
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AdminLayout>
            <div>
                <div className="text-center mb-3">
                    <h3>Search Employee</h3>
                    <hr />
                </div>
                <div>
                    <div>
                        <div class="form-group row">
                            <label
                                for="exampleFormControlSelect1"
                                class="col-sm-2 col-form-label"
                            >
                                Filter fields
                            </label>
                            <div class="col-sm-8 my-2">
                                <select
                                    className={` form-control`}
                                    id="subject-list"
                                >
                                    {FILTER_FIELDS.map((data, index) => {
                                        return <option key={index} value={data} className={` form-control`}>{data}</option>
                                    })}

                                </select>
                            </div>
                        </div>
                    </div>
                    <form style={{ padding: "30px" }}>
                        <h4>Official Details-</h4>
                        <div class="form-group row">
                            <label
                                for="exampleFormControlSelect1"
                                class="col-sm-2 col-form-label"
                            >
                                Academic Year
                            </label>
                            <div class="col-sm-8 my-2">
                                <select
                                    className={` form-control`}
                                    id="year-list"
                                >
                                    {academicYear.map((data) => {
                                        return <option value={data._id} className={` form-control`}>{data.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">
                                Employee Number
                            </label>
                            <div class="col-sm-8 my-2">
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label
                                for="exampleFormControlSelect1"
                                class="col-sm-2 col-form-label"
                            >
                                Joining Date
                            </label>
                            <div class="col-sm-8 my-2">
                                <input type="date" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label
                                for="exampleFormControlSelect1"
                                class="col-sm-2 col-form-label"
                            >
                                Subject
                            </label>
                            <div class="col-sm-8 my-2">
                                <select
                                    className={` form-control`}
                                    id="subject-list"
                                >
                                    {subjects.map((data) => {
                                        return <option value={data._id} className={` form-control`}>{data.name}</option>
                                    })}

                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label
                                for="exampleFormControlSelect1"
                                class="col-sm-2 col-form-label"
                            >
                                Category
                            </label>
                            <div class="col-sm-8 my-2">
                                <select
                                    onChange={(e) => {
                                        setActiveCategory(e.target.value)
                                    }}
                                    className={` form-control`}
                                    id="category-list"
                                >
                                    {category.map((data) => {
                                        return <option value={data._id} className={` form-control`}>{data.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label
                                for="exampleFormControlSelect1"
                                class="col-sm-2 col-form-label"
                            >
                                Position
                            </label>
                            <div class="col-sm-8 my-2">
                                <select
                                    className={` form-control`}
                                    id="position-list"
                                >
                                    {position.map((data) => {
                                        return <option value={data._id} className={` form-control`}>{data.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <h4>Personal Details-</h4>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">
                                First Name
                            </label>
                            <div class="col-sm-8 my-2">
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">
                                Last Name
                            </label>
                            <div class="col-sm-8 my-2">
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">
                                Date of Birth
                            </label>
                            <div class="col-sm-8 my-2">
                                <input type="date" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label
                                for="exampleFormControlSelect1"
                                class="col-sm-2 col-form-label"
                            >
                                Gender
                            </label>
                            <div class="col-sm-8 my-2">
                                <select
                                    className={` form-control`}
                                    id="exampleFormControlSelect1"
                                >
                                    <option className={` form-control`}>Male</option>
                                    <option className={` form-control`}>Female</option>
                                    <option className={` form-control`}>other</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">
                                Aadhar Number
                            </label>
                            <div class="col-sm-8 my-2">
                                <input type="number" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label
                                for="exampleFormControlSelect1"
                                class="col-sm-2 col-form-label0"
                            >
                                Marital Status
                            </label>
                            <div class="col-sm-8 my-2">
                                <select
                                    className={` form-control`}
                                    id="exampleFormControlSelect10"
                                >
                                    <option className={` form-control`}>Married</option>
                                    <option className={` form-control`}>Unmarried</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">
                                Nationality
                            </label>
                            <div class="col-sm-8 my-2">
                                <input type="text" class="form-control" placeholder="India" />
                            </div>
                        </div>
                        <div className="text-center my-4">
                            <button style={{ width: "150px" }} className="btn btn-success">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default EmployeeAdmission
