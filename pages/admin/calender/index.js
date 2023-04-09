import React, { useEffect, useState } from "react"

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { getRequest } from "../../../utilities/rest_service";
import AdminLayout from "../../../components/Admin";

const Calendar = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async () => {
        try {
            const response = await getRequest(`event/`)
            if (response.isSuccess) {

                let data = response.data
                function renameKey(obj, oldKey, newKey) {
                    obj[newKey] = obj[oldKey];
                    delete obj[oldKey];
                }
                data.forEach(obj => {
                    renameKey(obj, 'name', 'title')
                    renameKey(obj, 'startDate', 'start')
                    renameKey(obj, 'endDate', 'end')
                });
                setEvents(data)



            }
        } catch (error) {
            console.log(error);
        }
    }

    return <AdminLayout>
        <div className="App">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
            />
        </div>
    </AdminLayout>
}

export default Calendar