import React, { useEffect, useState } from "react"
import Image from "next/image"
import Style from "./style.module.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const GallerySection = (props) => {
	const [images, setImages] = useState([])

	useEffect(() => {
		fetchImages()
	}, [])

	const fetchImages = () => {
		let data = ["", "", "", "", "", "", "", ""]
		data.fill("https://picsum.photos/200")
		setImages(data)
	}

	return (
		<div className={`px-4 py-2`}>
			<div className={`w-100 text-center mb-3 ${Style.title}`}>Gyaana Gallery</div>
			<div className={`row`}>
				{images.map((image, index) => {
					return (
						<div key={`image_${index}`} className={`col-sm-6 col-md-3 mb-3 text-center`}>
							<Image layout="fixed" src={image} width="200" height="200" className={`${Style.img}`} />
						</div>
					)
				})}
			</div>
			<div className={`${Style.btn}`}>
				<Link href={`/Gallery`}>
					<div className={`align-items-center d-flex justify-content-center`}>
						<div style={{ marginRight: "10px" }}>View all</div>
						<FontAwesomeIcon icon={faArrowRight} />
					</div>
				</Link>
			</div>
		</div>
	)
}

export default GallerySection
