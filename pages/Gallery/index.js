import React, { useEffect, useState } from "react"
import Layout from "./../../components/Layout/index"
import Image from "next/image"
import styles from "./styles.module.css"

const Gallery = () => {
	const [images, setImages] = useState([])
	useEffect(() => {
		fetchImages()
	}, [])

	const fetchImages = () => {
		let data = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
		data.fill("https://picsum.photos/200")
		setImages(data)
	}
	return (
		<Layout>
			<div className="p-2" style={{ backgroundColor: "purple" }}>
				<h3 className="text-center" style={{ color: "white" }}>
					Welcome To Gyaana Gallery
				</h3>
				<div class="container-fluid px-4 my-4 ">
					<div className="row">
						{images.map((image, index) => {
							return (
								<div key={`image_${index}`} className={`col-sm-6 col-md-3 mb-3 text-center py-1 ${styles.imgWrapper}`}>
									<Image src={image} width="500" height="500" className={styles.img} />
									<p className={styles.imgDesc}>Image {index + 1} Description</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Gallery
