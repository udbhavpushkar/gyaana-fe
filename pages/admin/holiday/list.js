import React, { useEffect, useState } from "react"
import AdminLayout from "../../../components/Admin"
import Collapsable from "../../../components/Custom/Collapsable"
import { getRequest } from "../../../utilities/rest_service"
import { formatDate, formatDateAndTime } from "../../../utilities/date_services"


const HolidayList = () => {
    const [eventsList, setEventsList] = useState([])

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async (e) => {
        try {
            let response = await getRequest(`event/?type=holiday`)
            if (response.isSuccess) {
                setEventsList(response.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AdminLayout>

            <Collapsable heading="Holiday List">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventsList.map((data, index) => {
                            return <tr key={data._id}>
                                <td>{index + 1}</td>
                                <td>{data?.name}</td>
                                <td>{data?.startDate && formatDate(data?.startDate)}</td>
                                <td>{data?.endDate && formatDate(data?.endDate)}</td>
                                <td>{data?.description}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </Collapsable>
        </AdminLayout>
    )
}

export default HolidayList
