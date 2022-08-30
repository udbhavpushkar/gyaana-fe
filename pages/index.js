import React from "react"
import GallerySection from "../components/Gallery/gallery-section"
import ImgaeSlider from "../components/ImgaeSlider"
import Layout from "../components/Layout"
import NewsAndEvents from "../components/NewsAndEvent"
import Counters from "../components/Counters"

export default function Home() {
  return (
    <Layout>
      <ImgaeSlider />
      <GallerySection />
      <NewsAndEvents />
      <Counters />
    </Layout>
  )
}
