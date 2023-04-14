import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { deleteRequest, getRequest, postRequest } from "../../../utilities/rest_service"
import Collapsable from "../../Custom/Collapsable"
import Modal2 from "../../Custom/Modal2"
import SetupForm from "./../../SetupForm/index"
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const formSetupArray = [
    { label: "Academic Year", type: "dropdown", name: "year", list: [] },
    { label: "Class Name", type: "text", name: "name" },
    { label: "Maximum Student", type: "number", name: "maxStudent" },
]

const sectionFormSetupArray = [
    { label: "Section Name", type: "text", name: "name" },
    { label: "Maximum Student", type: "number", name: "maxStudent" },
]

const Grade = () => {

    const [formSetupData, setFormSetupData] = useState(formSetupArray)
    const [classList, setClassList] = useState([])
    const [formData, setFormData] = useState(null)
    const [addSection, setAddSection] = useState(null)
    const [sectionFormData, setSectionFormData] = useState(null)
    const [sectionList, setSectionList] = useState([])

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
                setFormData(null)
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

    const getSectionList = async (id) => {
        try {
            let response = await getRequest(`section/${id}`)
            if (response.isSuccess) {
                setSectionList(response.data)
            } else {
                toast.success("Something went wrong")
            }
        } catch (error) {

        }
    }

    const createSection = async () => {
        try {
            let data = { ...sectionFormData }
            data["grade"] = addSection._id
            let response = await postRequest(`section`, data)
            if (response.isSuccess) {
                getSectionList(addSection._id)
                toast.success("Created Successfully")
                setSectionFormData(null)
            } else {
                toast.error("Something went Wrong")
            }
        } catch (error) {
            console.error(error);
        }
    }

    const deleteSection = async (id) => {
        try {
            let response = await deleteRequest(`section/${id}`)
            if (response.isSuccess) {
                getSectionList(addSection._id)
                toast.success("Deleted Successfully")
            } else {
                toast.error("Something went Wrong")
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleSectionModalOpen = (data) => {
        setAddSection(data)
        getSectionList(data._id)
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
                            <th scope="col">Class Strength</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Section</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classList.map((data, index) => {
                            return (
                                <tr key={`class-${index}`}>
                                    <th scope="row">{index + 1}</th>
                                    <td><a href={`./class/${data._id}`} target="_blank">{data.name}</a></td>
                                    <td>{data?.year?.name}</td>
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
                                    <td><span className="link" onClick={() => { handleSectionModalOpen(data) }}>Section</span></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Modal2 data={addSection} title={`${addSection?.name} Section`} onHide={() => { setAddSection(null) }}>
                    <Collapsable heading="Create Section">
                        <SetupForm
                            data={sectionFormSetupArray}
                            existingData={sectionFormData}
                            setExistingData={setSectionFormData}
                            handleSubmitForm={createSection}
                        />
                    </Collapsable>
                    <Collapsable heading="All Sections">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Class Strength</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sectionList.map((data, index) => {
                                    return (
                                        <tr key={`section-${index}`}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{data.name}</td>
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
                                                        deleteSection(data._id)
                                                    }}
                                                    className={`pointer text-danger`}
                                                    icon={faTrashAlt}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </Collapsable>

                </Modal2>
            </Collapsable>

        </div>
    )
}

export default Grade
