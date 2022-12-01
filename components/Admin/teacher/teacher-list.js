import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { deleteRequest, getRequest } from "../../../utilities/rest_service"
import TeacherAdd from "./teacher-add"
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import TeacherEdit from "./teacher-edit"
import style from "./teacherList.module.css"
import { faMapMarker, faPhone, faChevronRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faInstagram, faGooglePlus, faFacebook } from "@fortawesome/free-brands-svg-icons"
import Footer from "../../../components/Footer"

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
			img: "../../../assets/images/teacher-1.jpg.webp",
			role: "Teacher",
		},
		{
			name: "Teacher Two",
			img: "../../../assets/images/teacher-1.jpg.webp",
			role: "ENGLISH TEACHER",
		},
		{
			name: "Teacher Three",
			img: "../../../assets/images/teacher-1.jpg.webp",
			role: "MATHS TEACHER",
		},
		{
			name: "Teacher Four",
			img: "../../../assets/images/teacher-1.jpg.webp",
			role: "ART TEACHER",
		},
		{
			name: "Teacher Five",
			img: "../../../assets/images/teacher-1.jpg.webp",
			role: "ENGLISH TEACHER",
		},
		{
			name: "Teacher Six",
			img: "../../../assets/images/teacher-1.jpg.webp",
			role: "ART TEACHER",
		},
		{
			name: "Teacher Seven",
			img: "../../../assets/images/teacher-1.jpg.webp",
			role: "SCIENCE TEACHER",
		},
		{
			name: "Teacher Eight",
			img: "../../../assets/images/teacher-1.jpg.webp",
			role: "MUSIC TEACHER",
		},
	]

	return (
		<>
			<nav class={`navbar navbar-expand-lg navbar-dark bg-dark ${style.ftcoNavbarLight}`} id="ftco-navbar">
				<div class={` ${style.navContainer} container d-flex align-items-center px-4 `}>
					<button
						onClick={handleToggle}
						style={{ color: "white" }}
						class="navbar-toggler collapsed"
						type="button"
						data-toggle="collapse"
						data-target="#ftco-nav"
						aria-controls="ftco-nav"
						aria-expanded={toggleOpen}
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span> Menu
					</button>
					<form action="#" class={`${style.searchform} ${style.orderLgLast}`}>
						<div class="form-group d-flex">
							<input type="text" class={`${style.searchInput} form-control pl-3`} placeholder="Search" />
							<button type="submit" placeholder="" class={`form-control ${style.search} ${style.searchInput}`}>
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</button>
						</div>
					</form>
					<div className={`${toggleOpen ? "collapse" : ""} navbar-collapse`} id="ftco-nav">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item">
								<a href="index.html" class={`${style.headerLink} nav-link pl-0`}>
									Home
								</a>
							</li>
							<li class="nav-item">
								<a href="about.html" class={`${style.headerLink} nav-link pl-0`}>
									About
								</a>
							</li>
							<li class="nav-item">
								<a href="courses.html" class={`${style.headerLink} nav-link pl-0`}>
									Courses
								</a>
							</li>
							<li class="nav-item active">
								<a href="teacher.html" class={`${style.headerLink} nav-link pl-0`}>
									Staff
								</a>
							</li>
							<li class="nav-item">
								<a href="blog.html" class={`${style.headerLink} nav-link pl-0`}>
									Blog
								</a>
							</li>
							<li class="nav-item">
								<a href="contact.html" class={`${style.headerLink} nav-link pl-0`}>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div>
				<section className={style.heroWrap}>
					<div className={style.overlay}></div>
					<div class="container">
						<div className={`row no-gutters slider-text ${style.textContainer}`}>
							<div class="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
								<h1 className={`mb-2 ${style.certifiedText}`}>Certified Teacher</h1>
								<p class={style.breadcrumbs}>
									<span class="mr-2">
										<a className={style.headerLinks} href="index.html">
											HOME
											<FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faChevronRight} />
										</a>
									</span>
									<span className={style.teacherLink}>
										TEACHER <FontAwesomeIcon icon={faChevronRight} />
									</span>
								</p>
							</div>
						</div>
					</div>
				</section>
				{/* {mode === "list" && (
				<>
					<div className={`d-flex justify-content-between`} style={{ padding: "10px 20px" }}>
						<p>Teacher List</p>
						<div>
							<button onClick={handleAddTeacherClick}>+Add Teacher</button>
						</div>
					</div>
					<div>
					<table className="table">
					<thead>
					<tr>
					<th scope="col">#</th>
					<th scope="col">Teacher Name</th>
					<th scope="col">Email</th>
									<th scope="col">Contact</th>
									<th scope="col">Edit</th>
									<th scope="col">Delete</th>
								</tr>
								</thead>
							<tbody>
							{teachersData.map((teacher, index) => {
								return (
										<tr key={`teacher-list-${index}`}>
											<th scope="row">{index + 1}</th>
											<td>{teacher.name}</td>
											<td>{teacher.email}</td>
											<td>{teacher.mobile}</td>
											<td>
												<FontAwesomeIcon
												onClick={(e) => {
													handleEditTeacherClick(teacher, index)
													}}
													className={`pointer text-info`}
													icon={faUserEdit}
													/>
													</td>
											<td>
												<FontAwesomeIcon
													onClick={(e) => {
														handleDeleteTeacher(teacher._id, index)
													}}
													className={`pointer text-danger`}
													icon={faTrashAlt}
													/>
													</td>
													</tr>
													)
												})}
							</tbody>
						</table>
					</div>
				</>
			)}
			{mode === "add" && <TeacherAdd addToList={handleAppendTeacherList} setMode={setMode} />}
			{mode === "edit" && <TeacherEdit updateList={handleUpdateTeacherList} data={editData} setMode={setMode} />} */}
				<section class={`${style.sectionWrapper} bg-light`}>
					<div class="container-fluid px-4 ">
						<div class="row">
							{techaerDetails.map((item) => (
								<div className={`col-md-6 col-lg-3 ${style.ftcoAnimate} ${style.fadeInUp} ${style.ftcoAnimated}`}>
									<div class={style.staff}>
										<div class={`${style.imgWrap} d-flex align-items-stretch`}>
											<div className={`align-self-stretch ${style.teacherImage} ${style.imgProfile}`}></div>
										</div>
										<div class="text pt-3 text-center" style={{ position: "relative" }}>
											<h3 className={style.teacherName}>{item.name}</h3>
											<span class={`${style.position} mb-2`}>{item.role}</span>
											<div class="faded">
												<p className={style.teacherDescription}>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
												<ul class={`${style.ftcoSocial} text-center`}>
													<li className={`${style.listIcons} ${style.ftcoAnimate} ${style.fadeInUp} ${style.ftcoAnimated}`}>
														<a className={style.listLinks} href="#">
															<FontAwesomeIcon icon={faTwitter} />
														</a>
													</li>
													<li className={`${style.listIcons} ${style.ftcoAnimate} ${style.fadeInUp} ${style.ftcoAnimated}`}>
														<a className={style.listLinks} href="#">
															<FontAwesomeIcon icon={faGooglePlus} />
														</a>
													</li>
													<li className={`${style.listIcons} ${style.ftcoAnimate} ${style.fadeInUp} ${style.ftcoAnimated}`}>
														<a className={style.listLinks} href="#">
															<FontAwesomeIcon icon={faInstagram} />
														</a>
													</li>
													<li className={`${style.listIcons} ${style.ftcoAnimate} ${style.fadeInUp} ${style.ftcoAnimated}`}>
														<a className={style.listLinks} href="#">
															<FontAwesomeIcon icon={faFacebook} />
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	)
}

export default TeacherList
