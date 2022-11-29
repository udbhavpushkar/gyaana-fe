import React, { useState } from "react"
import Image from "next/image"
import ImageOne from "../../assets/images/Draw-a-School.jpg.webp"
import ImageTwo from "../../assets/images/librarypic.jpg"
// import ImageThree from "../../assets/images/imageFour.avif"
import Carousel from "react-bootstrap/Carousel"
import styles from "./imageSlider.module.css"

const ImgaeSlider = () => {
  const [index, setIndex] = useState(0)

  const imgaerURL = [
    {
      image: ImageOne,
      alt: "School one",
      heading: "Gyaana International School",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: ImageTwo,
      alt: "School two",
      heading: "Gyaana International School",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: ImageTwo,
      alt: "School three",
      heading: "Gyaana International School",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: ImageTwo,
      alt: "School four",
      heading: "Gyaana International School",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: ImageOne,
      alt: "School five",
      heading: "Gyaana International School",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ]

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel className=" width-100 center" activeIndex={index} onSelect={handleSelect} interval={2000} wrap={true}>
      {imgaerURL.map((item) => (
        <Carousel.Item key={item.alt}>
          <Image className={styles.sliderImage} src={item.image} alt={item.alt} height={450} width={1400} />
          <Carousel.Caption>
            <div className={styles.textConatiner}>
              <h2 className={styles.sliderHeading}>{item.heading}</h2>
              <p className={styles.sliderDescription}>{item.description}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ImgaeSlider
