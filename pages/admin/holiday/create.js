import React, { useState } from "react"
import AdminLayout from "../../../components/Admin"
import { postRequest } from "../../../utilities/rest_service"
import { handleFormData } from "../../../utilities/form_services"
import { toast } from "react-toastify"


const HolidayCreate = () => {

    const [formData, setFormData] = useState({ type: "holiday" })

    const handleInputChange = (e) => {
        handleFormData(e, formData, setFormData)
    }

    const handleEventSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await postRequest(`event/`, formData)
            if (response.isSuccess) {
                toast.success("Holiday created successfully !")
                e.target.reset()
            } else {
                toast.error("Something went wrong !")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AdminLayout>
            <div className="box-shadow-1 p-2">
                <div className="text-center mb-3">
                    <h3>Create Holiday</h3>
                    <hr />
                </div>
                <div>
                    <form onSubmit={handleEventSubmit} style={{ padding: "30px" }}>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                                Name
                            </label>
                            <div className="col-sm-8 my-2">
                                <input
                                    required
                                    onChange={handleInputChange}
                                    type="text"
                                    name="name"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="start-date" className="col-sm-2 col-form-label">
                                Start Date
                            </label>
                            <div className="col-sm-8 my-2">
                                <input
                                    required
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
                                    required
                                    onChange={handleInputChange}
                                    type="date"
                                    name="endDate"
                                    id="end-date"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                                Description
                            </label>
                            <div className="col-sm-8 my-2">
                                <textarea
                                    onChange={handleInputChange}
                                    type="text"
                                    name="description"
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

export default HolidayCreate
