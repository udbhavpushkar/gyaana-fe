import React, { useEffect, useState } from "react"
import GallerySection from "../components/Gallery/gallery-section"
import ImgaeSlider from "../components/ImgaeSlider"
import Layout from "../components/Layout"
import NewsAndEvents from "../components/NewsAndEvent"
import Counters from "../components/Counters"
import LoadingSpinner from "../components/LoadingSpinner"
import Enquiry from "../components/Enquiry"

export default function Home() {
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
		}, 600)
	}, [])
	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<Layout>
					<ImgaeSlider />
					<GallerySection />
					<Enquiry />
					<NewsAndEvents />
					<Counters />
				</Layout>
			)}
		</>
	)
}
