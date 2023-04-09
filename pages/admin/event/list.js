import React, { useEffect, useState } from "react"
import AdminLayout from "../../../components/Admin"
import Collapsable from "../../../components/Custom/Collapsable"
import { deleteRequest, getRequest } from "../../../utilities/rest_service"
import { formatDateAndTime } from "../../../utilities/date_services"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { toast } from "react-toastify"


const EventList = () => {
    const [eventsList, setEventsList] = useState([])

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async (e) => {
        try {
            let response = await getRequest(`event/?type=event`)
            if (response.isSuccess) {
                setEventsList(response.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await deleteRequest(`event/${id}`)
            if (response.isSuccess) {
                fetchEvents()
                toast.success("Deleted !")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AdminLayout>

            <Collapsable heading="Events List">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventsList.map((data, index) => {
                            return <tr key={data._id}>
                                <td>{index + 1}</td>
                                <td>{data?.name}</td>
                                <td>{data?.startDate && formatDateAndTime(data?.startDate)}</td>
                                <td>{data?.endDate && formatDateAndTime(data?.endDate)}</td>
                                <td>{data?.description}</td>
                                <td><FontAwesomeIcon onClick={() => { handleDelete(data._id) }} className="text-danger pointer" icon={faTrash} /></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </Collapsable>
        </AdminLayout>
    )
}

export default EventList
