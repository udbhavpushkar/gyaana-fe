import React, { useEffect, useState } from "react"
import SetupForm from "../../SetupForm"
import styles from "./styles.module.css"
import { getRequest, patchRequest, postRequest } from "../../../utilities/rest_service"
import { toast } from "react-toastify"

const Institute = () => {
	const instituteHeader = [
		{ label: "Institute Name", type: "text", name: "name" },
		{ label: "Principal Name", type: "text", name: "principal" },
		{ label: "Institute Address", type: "text", name: "address" },
		{ label: "Institute Email ID", type: "email", name: "email" },
		{ label: "Principal mobile number", type: "text", name: "principalPhone" },
		{ label: "Institute phone", type: "text", name: "phone" },
		{ label: "Institute fax", type: "text", name: "fax" },
		{ label: "Institute Country", type: "text", name: "country" },
		{ label: "Institute Code", type: "text", name: "code" },
		{ label: "City", type: "text", name: "city" },
		{ label: "State", type: "text", name: "state" },
		{ label: "District", type: "text", name: "district" },
		{ label: "Pincode", type: "text", name: "pincode" },
		{ label: "File", type: "file", name: "logo" },
	]

	useEffect(() => {
		getInstitutedata()
	}, [])
	const [instituteData, setInstituteData] = useState(null)

	const getInstitutedata = async () => {
		try {
			let response = await getRequest(`institute`)
			if (response.isSuccess) {
				setInstituteData(response.data)
			}
		} catch (error) {
			console.error(error);
		}
	}

	const createInstituteData = async () => {
		try {
			let response = await postRequest(`institute`, instituteData)
			if (response.isSuccess) {
				setInstituteData(response.data)
				toast.success("Institute created Successfully")
			} else {
				toast.error("Something went Wrong")
			}
		} catch (error) {
			console.error(error);
		}
	}

	const editInstituteData = async () => {
		try {
			let response = await patchRequest(`institute/${instituteData._id}`, instituteData)
			if (response.isSuccess) {
				setInstituteData(response.data)
				toast.success("Institute details Updated Successfully")
			} else {
				toast.error("Something went Wrong")
			}
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<SetupForm
			data={instituteHeader}
			existingData={instituteData}
			setExistingData={setInstituteData}
			pageName="Institue Setup"
			pageHeading="Profile Information"
			handleSubmitForm={instituteData?._id ? editInstituteData : createInstituteData}
			btnName={instituteData?._id ? "Update" : "Create"}
		/>
	)
}

export default Institute
