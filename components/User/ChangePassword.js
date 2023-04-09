import React, { useState } from "react"
import { handleFormData } from "../../utilities/form_services"
import { postRequest } from "../../utilities/rest_service"
import { toast } from "react-toastify"

const ChangePassword = () => {

    const [formData, setFormData] = useState({})

    const handleInputChange = (e) => {
        handleFormData(e, formData, setFormData)
    }

    const handleChangePassword = async (e) => {
        e.preventDefault()
        try {
            if (formData.newPassword === formData.confirmNewPassword) {
                const response = await postRequest(`user/change-password`, formData)
                if (response.isSuccess) {
                    console.log(response.data);
                    toast.success("Password Changed !")
                } else {
                    toast.error("Please check current password")
                }
            } else {
                toast.error("Please confirm password")
            }

        } catch (error) {
            console.log(error);
        }
    }

    return <div>
        <form onSubmit={handleChangePassword} style={{ padding: "30px" }}>
            <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                    Current Password
                </label>
                <div className="col-sm-8 my-2">
                    <input
                        required
                        onChange={handleInputChange}
                        type="password"
                        name="currentPassword"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                    New Password
                </label>
                <div className="col-sm-8 my-2">
                    <input
                        required
                        onChange={handleInputChange}
                        type="password"
                        name="newPassword"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                    Confirm New Password
                </label>
                <div className="col-sm-8 my-2">
                    <input
                        required
                        onChange={handleInputChange}
                        type="password"
                        name="confirmNewPassword"
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
}

export default ChangePassword