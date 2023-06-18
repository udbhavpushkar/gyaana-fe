import React, { useEffect, useState } from "react"
import AdminLayout from "../../../components/Admin"
import ClassSelection from "../../../components/Admin/ClassSelection"
import { postRequest } from "../../../utilities/rest_service"
import { toast } from "react-toastify"

const NoticeCreate = () => {

    const [activeSection, setActiveSection] = useState()
    const [message, setMessage] = useState("")

    const handleSendNotice = async (e) => {
        //handle api call
        e.preventDefault()
        try {
            let payload = { message, receiver: activeSection }
            let response = await postRequest(`message`, payload)
            if (response.isSuccess) {
                console.log(response.data)
                toast.success("Sent Successfully")
                e.target.reset()
            } else {
                toast.error("Something went wrong !")
            }
        } catch (error) {
            console.error(error);
        }
    }

    return <AdminLayout>
        <div className="box-shadow-1">
            <div className="text-center mb-3">
                <h3>Send Notice</h3>
                <hr />
            </div>
            <div>
                <form onSubmit={handleSendNotice} style={{ padding: "30px" }}>
                    <ClassSelection setActiveSection={setActiveSection} />
                    {activeSection && <> <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                            Message
                        </label>
                        <div className="col-sm-8 my-2">
                            <textarea
                                onChange={(e) => { setMessage(e.target.value) }}
                                type="text"
                                name="message"
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
                                Send
                            </button>
                        </div>
                    </>}
                </form>
            </div>
        </div>
    </AdminLayout>
}

export default NoticeCreate