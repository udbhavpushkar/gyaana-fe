import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { formatDate } from "../../../utilities/date_services"
import { deleteRequest, getRequest, postRequest } from "../../../utilities/rest_service"
import Collapsable from "../../Custom/Collapsable"
import SetupForm from "./../../SetupForm/index"

const formSetupArray = [
    { label: "Academic Year", type: "dropdown", name: "year", list: [] },
    { label: "Class Name", type: "text", name: "name" },
    { label: "Maximum Student", type: "number", name: "maxStudent" },
]

const Grade = () => {

    const [formSetupData, setFormSetupData] = useState(formSetupArray)
    const [classList, setClassList] = useState([])
    const [formData, setFormData] = useState(null)

    useEffect(() => {
        getYearList()
        getClassList()
    }, [])

    const getYearList = async () => {
        try {
            let response = await getRequest(`academic-year`)
            if (response.isSuccess) {
                let data = [...formSetupData]
                data[0].list = response.data
                setFormSetupData(data)
            }
        } catch (error) {
            console.error(error);
        }
    }

    const getClassList = async () => {
        try {
            let response = await getRequest(`grade`)
            if (response.isSuccess) {
                setClassList(response.data)
            }
        } catch (error) {
            console.error(error);
        }
    }

    const createClass = async () => {
        try {
            let response = await postRequest(`grade`, formData)
            if (response.isSuccess) {
                getClassList()
                toast.success("Created Successfully")
            } else {
                toast.error("Something went Wrong")
            }
        } catch (error) {
            console.error(error);
        }
    }

    const deleteClass = async (id) => {
        try {
            let response = await deleteRequest(`grade/${id}`)
            if (response.isSuccess) {
                getClassList()
                toast.success("Deleted Successfully")
            } else {
                toast.error("Something went Wrong")
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div className="text-center mb-3">
                <h3>Class</h3>
                <hr />
            </div>
            <Collapsable heading="Create Class">
                <SetupForm
                    data={formSetupData}
                    existingData={formData}
                    setExistingData={setFormData}
                    handleSubmitForm={createClass}
                />
            </Collapsable>

            <Collapsable heading="List">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Academic Year</th>
                            <th scope="col">Max Student</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classList.map((data, index) => {
                            return (
                                <tr key={`year-${index}`}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.name}</td>
                                    <td>{data.year.name}</td>
                                    <td>{data.maxStudent}</td>
                                    <td>
                                        <FontAwesomeIcon
                                            onClick={(e) => {
                                                // handleEditClassClick(data, index)
                                            }}
                                            className={`pointer text-info`}
                                            icon={faUserEdit}
                                        />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon
                                            onClick={(e) => {
                                                deleteClass(data._id)
                                            }}
                                            className={`pointer text-danger`}
                                            icon={faTrashAlt}
                                        />
                                    </td>
                                    <td></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Collapsable>

        </div>
    )
}

export default Grade
