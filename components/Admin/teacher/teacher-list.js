import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { deleteRequest, getRequest } from "../../../utilities/rest_service"
import TeacherAdd from "./teacher-add"
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import TeacherEdit from "./teacher-edit"
import style from "./teacherList.module.css"
import { faMapMarker, faPhone, faChevronRight, faMagnifyingGlass, faCircleDown } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faInstagram, faGooglePlus, faFacebook } from "@fortawesome/free-brands-svg-icons"
import Footer from "../../../components/Footer"
import TeacherOne from "../../../assets/images/teacherone.jpg.webp"
import TeacherTwo from "../../../assets/images/teacher-3.jpg.webp"

const TeacherList = (props) => {
	const [mode, setMode] = useState("list")
	const [teachersData, setTeacherData] = useState([])
	const [editData, setEditData] = useState(null)
	const [toggleOpen, setToggleOpen] = useState(true)

	useEffect(() => {
		handleGetTeachersList()
	}, [])

	const handleAddTeacherClick = (e) => {
		e.preventDefault()
		setMode("add")
	}

	const handleGetTeachersList = async () => {
		try {
			let response = await getRequest("user/teachers/")
			if (response.isSuccess) {
				setTeacherData(response.data)
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	const handleAppendTeacherList = (data) => {
		let dataList = [...teachersData]
		dataList.unshift(data)
		setTeacherData(dataList)
	}

	const handleDeleteTeacher = async (id, index) => {
		try {
			let response = await deleteRequest(`user/${id}`)
			if (response.isSuccess) {
				let dataList = [...teachersData]
				dataList.splice(index, 1)
				setTeacherData(dataList)
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	const handleEditTeacherClick = (data, index) => {
		setEditData({ data, index })
		setMode("edit")
	}
	const handleToggle = () => {
		setToggleOpen(!toggleOpen)
	}

	const handleUpdateTeacherList = (data, index) => {
		let dataList = [...teachersData]
		if (dataList[index]) {
			dataList[index] = data
			setTeacherData(dataList)
		}
	}
	const techaerDetails = [
		{
			name: "Bianca Wilson",
			img: TeacherOne,
			role: "Teacher",
		},
		{
			name: "Teacher Two",
			img: TeacherTwo,
			role: "ENGLISH TEACHER",
		},
		{
			name: "Teacher Three",
			img: TeacherOne,
			role: "MATHS TEACHER",
		},
		{
			name: "Teacher Four",
			img: TeacherTwo,
			role: "ART TEACHER",
		},
		{
			name: "Teacher Five",
			img: TeacherTwo,
			role: "ENGLISH TEACHER",
		},
		{
			name: "Teacher Six",
			img: TeacherOne,
			role: "ART TEACHER",
		},
		{
			name: "Teacher Seven",
			img: TeacherTwo,
			role: "SCIENCE TEACHER",
		},
		{
			name: "Teacher Eight",
			img: TeacherOne,
			role: "MUSIC TEACHER",
		},
	]

	return (
		<div>Teachers</div>
	)
}

export default TeacherList
