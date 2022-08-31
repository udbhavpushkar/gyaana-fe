import React, { useEffect, useState } from "react"
import GallerySection from "../components/Gallery/gallery-section"
import ImgaeSlider from "../components/ImgaeSlider"
import Layout from "../components/Layout"
import NewsAndEvents from "../components/NewsAndEvent"
import Counters from "../components/Counters"

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
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
          <div className="spinner-border text-secondary" style={{ width: "4rem", height: "4rem" }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Layout>
          <ImgaeSlider />
          <GallerySection />
          <NewsAndEvents />
          <Counters />
        </Layout>
      )}
    </>
  )
}
