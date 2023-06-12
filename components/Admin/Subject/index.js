import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { deleteRequest, getRequest, postRequest } from "../../../utilities/rest_service"
import Collapsable from "../../Custom/Collapsable"
import SetupForm from "./../../SetupForm/index"
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const formSetupArray = [
    { label: "Subject Name", type: "text", name: "name" },
]


const Subject = () => {

    const [formSetupData, setFormSetupData] = useState(formSetupArray)
    const [subjectList, setSubjectList] = useState([])
    const [formData, setFormData] = useState(null)

    useEffect(() => {
        getSubjectList()
    }, [])

    const handleAddSubSubjectClick = () => {
        let formArray = [...formSetupData]
        formArray.push({ label: `Sub - Subject ${formArray.length}`, type: "text", name: `subSubject${formArray.length}` })
        setFormSetupData(formArray)
    }

    const getSubjectList = async () => {
        try {
            let response = await getRequest(`subject`)
            if (response.isSuccess) {
                setSubjectList(response.data)
            }
        } catch (error) {
            console.error(error);
        }
    }

    const createSubject = async () => {
        try {
            let realFormData = { ...formData }
            realFormData["subSubjects"] = []
            Object.keys(formData).forEach((key) => {
                if (key.includes("subSubject")) {
                    realFormData["subSubjects"].push({ name: realFormData[key] })
                }
            })

            let payload = JSON.stringify(realFormData)

            let response = await postRequest(`subject`, payload)
            if (response.isSuccess) {
                getSubjectList()
                toast.success("Created Successfully")
                setFormData(null)
                setFormSetupData(formSetupArray)
            } else {
                toast.error("Something went Wrong")
            }
        } catch (error) {
            console.error(error);
        }
    }

    const deleteSubject = async (id) => {
        try {
            let response = await deleteRequest(`subject/${id}`)
            if (response.isSuccess) {
                getSubjectList()
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
                <h3>Subject</h3>
                <hr />
            </div>
            <Collapsable heading="Create Subject">
                <SetupForm
                    data={formSetupData}
                    existingData={formData}
                    setExistingData={setFormData}
                    handleSubmitForm={createSubject}
                />
                <div className="btn btn-outline-info" onClick={handleAddSubSubjectClick}>Add Sub-Subject</div>
            </Collapsable>

            <Collapsable heading="List">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            {/* <th scope="col">Edit</th> */}
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjectList.map((data, index) => {
                            return (
                                <tr key={`class-${index}`}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.name}
                                        <br />
                                        {data.subSubjects.length > 0 && `(${data.subSubjects.map((sub, ind) => {
                                            return sub.name
                                        })})`}
                                    </td>
                                    {/* <td>
                                        <FontAwesomeIcon
                                            onClick={(e) => {
                                                handleEditClassClick(data, index)
                                            }}
                                            className={`pointer text-info`}
                                            icon={faUserEdit}
                                        />
                                    </td> */}
                                    <td>
                                        <FontAwesomeIcon
                                            onClick={(e) => {
                                                deleteSubject(data._id)
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

        </div>
    )
}

export default Subject
