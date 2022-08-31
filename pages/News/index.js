import React from "react"
import styles from "./news.module.css"
import NewsImg from "../../assets/images/images.jpg"
import Image from "next/image"
import Layout from "./../../components/Layout/index"

const News = () => {
  const newsData = [
    {
      heading: "Gyaana Admission Open 2022- 2023.",
      desc: "This article discusses the history of education, tracing the evolution of the formal teaching of knowledge and skills from prehistoric and ancient times to the present, and considering the various philosophies that have inspired the resulting systems. Other aspects of education are treated in a number of articles.",
      img: NewsImg,
    },
    {
      heading: "Admission open for Classes Nur to 12th.",
      desc: "This article discusses the history of education, tracing the evolution of the formal teaching of knowledge and skills from prehistoric and ancient times to the present, and considering the various philosophies that have inspired the resulting systems. Other aspects of education are treated in a number of articles.",
      img: NewsImg,
    },
    {
      heading: "Play School available here.",
      desc: "This article discusses the history of education, tracing the evolution of the formal teaching of knowledge and skills from prehistoric and ancient times to the present, and considering the various philosophies that have inspired the resulting systems. Other aspects of education are treated in a number of articles.",
      img: NewsImg,
    },
    {
      heading: "Proper Guidence is provided to each Child.",
      desc: "This article discusses the history of education, tracing the evolution of the formal teaching of knowledge and skills from prehistoric and ancient times to the present, and considering the various philosophies that have inspired the resulting systems. Other aspects of education are treated in a number of articles.",
      img: NewsImg,
    },
    {
      heading: "Transport is now available.",
      desc: "This article discusses the history of education, tracing the evolution of the formal teaching of knowledge and skills from prehistoric and ancient times to the present, and considering the various philosophies that have inspired the resulting systems. Other aspects of education are treated in a number of articles.",
      img: NewsImg,
    },
    {
      heading: "Top className results for the past 10 years.",
      desc: "This article discusses the history of education, tracing the evolution of the formal teaching of knowledge and skills from prehistoric and ancient times to the present, and considering the various philosophies that have inspired the resulting systems. Other aspects of education are treated in a number of articles.",
      img: NewsImg,
    },
    {
      heading: "Branches in more than 42 cities.",
      desc: "This article discusses the history of education, tracing the evolution of the formal teaching of knowledge and skills from prehistoric and ancient times to the present, and considering the various philosophies that have inspired the resulting systems. Other aspects of education are treated in a number of articles.",
      img: NewsImg,
    },
  ]
  return (
    <Layout>
      <div className={styles.newsWrapper}>
        <div className={styles.newsHeading}>
          <p>News</p>
        </div>
        <div className="row">
          <div>
            <ul className="list-group">
              {newsData.map((item) => (
                <li className={`list-group-item ${styles.listContainer}`} style={{ borderBottom: "2px dotted rgb(170, 224, 123)" }}>
                  <div className={`row ${styles.newsContentContainer}`}>
                    <div className="col-md-4">
                      <Image className={styles.newsImage} src={item.img} alt={item.alt} height={200} />
                    </div>
                    <div className="col-md-8">
                      <h4 className={styles.newsHeadingText}>{item.heading}</h4>
                      <p style={{ color: "black" }}>{item.desc}</p>
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

export default News
