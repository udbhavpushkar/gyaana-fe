import React, { useState } from "react";
import { postRequest } from "../../../utilities/rest_service";
import History from "./history";
import style from "./style.module.css"

const Notice = (props) => {
    const [tabName, setTabName] = useState(1)

    const handleTab = (num) => {
        setTabName(num)
    }

    const sendMessage = async (e) => {
        e.preventDefault()
        try {
            let formdata = { message: e.target.message.value, type: "group" }
            let response = await postRequest(`message/`, formdata)
            if (response.isSuccess) {
                console.log(response.data);
            }
            e.target.reset()
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <div>
                <div className="my-4">
                    <button className={tabName == 1 ? style.activeTab : style.tabButton} onClick={() => handleTab(1)}>
                        Add Notice
                    </button>
                    <button className={tabName == 2 ? style.activeTab : style.tabButton} onClick={() => handleTab(2)}>
                        History
                    </button>
                </div>
                <div>
                    {tabName === 1 && (
                        <div>
                            <div className={`${style.noticeTitle} py-2`}>
                                <h3 className="text-center">Add Notice</h3>
                            </div>
                            <form onSubmit={sendMessage}>
                                <div className="col-md-6">
                                    <div>
                                        <label className="form-label">Notice</label>
                                        <textarea className="form-control" placeholder="Enter Notice" name="message"></textarea>
                                    </div>
                                    <div>
                                        <label htmlFor="inputState" className="form-label">
                                            Send To
                                        </label>
                                        <select id="inputState" className="form-select">
                                            <option value="group">Whole Class</option>
                                        </select>
                                    </div>
                                    <div className="text-center my-4">
                                        <button type="submit" className="btn btn-success">Add</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    )}
                </div>
                <div>
                    {tabName === 2 && (
                        <History />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Notice