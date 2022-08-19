import React, { useState } from "react"
import Image from "next/image"
import ImageOne from "../../assets/images/Draw-a-School.jpg.webp"
import ImageTwo from "../../assets/images/librarypic.jpg"
import ImageThree from "../../assets/images/imageFour.avif"
// import LogoImg33 from "../../assets/images/Draw-a-School.jpg.webp"
import Carousel from "react-bootstrap/Carousel"
import styles from "./imageSlider.module.css"

const ImgaeSlider = () => {
  const [index, setIndex] = useState(0)

  const imgaerURL = [
    {
      image: ImageOne,
      alt: "School",
      heading: "Gyaana International School",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: ImageTwo,
      alt: "School",
      heading: "Gyaana International School",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: ImageThree,
      alt: "School",
      heading: "Gyaana International School",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    // {
    //   image: ImageTwo,
    //   alt: "School",
    //   heading: "Gyaana International School",
    //   description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    // },
  ]

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {imgaerURL.map((item) => (
        <Carousel.Item>
          <Image className={styles.sliderImage} src={item.image} alt={item.alt} height={450} width={1400} />
          <Carousel.Caption>
            <h3 className={styles.sliderHeading}>{item.heading}</h3>
            <p className={styles.sliderDescription}>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ImgaeSlider
