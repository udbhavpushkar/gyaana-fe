import React, { useState, useEffect } from "react"
import styles from "./style.module.css"
import NewsImg from "../../assets/images/images.jpg"
import Image from "next/image"
import Layout from "../../components/Layout/index"
import { getRequest } from "../../utilities/rest_service"

const Notice = () => {
	const [noticeData, setNoticeData] = useState([])

	useEffect(() => {
		handleGetNoticeList()
	}, [])

	const handleGetNoticeList = async () => {
		try {
			let response = await getRequest("notice/?limit=6")
			if (response.isSuccess) {
				setNoticeData(response.data)
			}
		} catch (e) {
			console.log("Error", e)
		}
	}

	return (
		<Layout>
			<div className={styles.newsWrapper}>
				<div className={styles.newsHeading}>
					<p>Notices</p>
				</div>
				<div className="row">
					<div>
						<ul className="list-group">
							{noticeData.map((item) => (
								<li className={`list-group-item ${styles.listContainer}`} style={{ borderBottom: "2px dotted rgb(170, 224, 123)" }}>
									<div className={`row ${styles.newsContentContainer}`}>
										<div className="col-md-4">
											<Image className={styles.newsImage} src={NewsImg} alt={item.alt} height={200} />
										</div>
										<div className="col-md-8">
											<h4 className={styles.newsHeadingText}>{item.title}</h4>
											<p style={{ color: "black" }}>{item.description}</p>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Notice
