import React, { useEffect, useState } from "react"
import Style from "./style.module.css"
import { formatDate } from "../../../../utilities/date_services"

//props.data will contain data about employee
const Profile = ({ data }) => {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        if (data) {
            const empData = [
                {
                    label: "Name",
                    value: `${data.userId?.firstName} ${data?.userId?.lastName}`
                },
                {
                    label: "Email",
                    value: data?.userId?.email
                },
                {
                    label: "Employee No.",
                    value: data.employeeNo
                },
                {
                    label: "Joining Date",
                    value: formatDate(data?.joiningDate)
                },
                {
                    label: "Position",
                    value: data?.position?.name
                },
                {
                    label: "Mobile Number",
                    value: data?.mobile
                },
                {
                    label: "Address",
                    value: data.address
                },
                {
                    label: "Pincode",
                    value: data.pincode
                },
                {
                    label: "Religion",
                    value: data.religion
                },
                {
                    label: "Caste",
                    value: data.caste
                },
                {
                    label: "Nationality",
                    value: data?.nationality
                },
                {
                    label: "Blood Group",
                    value: data?.blood_group
                },
                {
                    label: "Indentification Mark",
                    value: data.identification_mark
                },
                {
                    label: "Father Name",
                    value: data?.fatherName
                },
                {
                    label: "Mother Name",
                    value: data?.motherName
                },
                {
                    label: "Spouse Name",
                    value: data?.spouseName
                },

            ]
            setUserData(empData)
        }

    }, [data])

    return <div>
        {userData?.map((field, index) => {
            return <div key={`emp_info_${index}`} className={Style.wrapper}>
                <div className={Style.label}>{field.label} : </div>
                <div className={Style.text}>{field.value}</div>
            </div>
        })}

    </div>
}

export default Profile