import React, { useEffect, useState } from "react"
import { getRequest } from "../../../utilities/rest_service"
import style from "./style.module.css"
import { formatDate } from "../../../utilities/date_services"

const History = (props) => {

    const [sent, setSent] = useState([])
    const [received, setReceived] = useState([])

    useEffect(() => {
        fetchMessages("sent")
        fetchMessages("received")
    }, [])

    const fetchMessages = async (type) => {
        try {
            let response = await getRequest(`message/${type}/`)
            if (response.isSuccess) {
                if (type === "sent") {
                    setSent(response.data)
                } else if (type === "received") {
                    setReceived(response.data)
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="col-md-12">

            {sent.length > 0 && <div className="mb-2">
                <div className={`${style.noticeTitle} py-2`}>
                    <h4 className="text-center">Sent History</h4>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Message</th>
                                <th scope="col">Sent To</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sent.map((message, index) => (
                                <tr key={message._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{message.message}</td>
                                    <td>{message.receiver.name}</td>
                                    <td>{formatDate(message.updatedAt)}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>}


            {received.length > 0 && <div className="mb-2">
                <div className={`${style.noticeTitle} py-2`}>
                    <h4 className="text-center">Received History</h4>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Message</th>
                                <th scope="col">Sent To</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {received.map((message, index) => (
                                <tr key={message._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{message.message}</td>
                                    <td>{message.receiver.name}</td>
                                    <td>{formatDate(message.updatedAt)}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>}


        </div>
    )
}

export default History