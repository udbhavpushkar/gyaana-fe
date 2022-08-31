import React, { useEffect, useState } from "react"
import Layout from "./../../components/Layout/index"
import styles from "./contact.module.css"
import Image from "next/image"

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true)

  const onclick = (item) => {
    console.log(item)
  }
  const newsData = [
    {
      heading: "Address",
      desc: "Gyana Internaational School, Faizabad (UP)",
    },
    {
      heading: "Contact",
      desc: "+91 889900119988",
    },
    {
      heading: "Email",
      desc: "gyaana@gmail.com",
    },
    {
      heading: "Website",
      desc: "www.gyaana.co",
    },
  ]

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 700)
  }, [])
  return (
    <Layout>
      {isLoading ? (
        <div className={styles.spinnerWrapper}>
          <div className="spinner-border text-secondary" style={{ width: "4rem", height: "4rem" }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className={styles.newsWrapper}>
          <div className={styles.newsHeading}>
            <p>Contact</p>
          </div>
          <div className="row">
            <div>
              <ul className="list-group">
                {newsData.map((item) => (
                  <li className={`list-group-item ${styles.listContainer}`} style={{ borderBottom: "2px dotted rgb(170, 224, 123)" }}>
                    <div className={`row ${styles.newsContentContainer}`}>
                      <div className="col-md-8 ">
                        <h4 onClick={() => onclick(item)} className={`center ${styles.newsHeadingText}`}>
                          {item.heading}
                        </h4>
                        <p style={{ color: "black" }}>{item.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Contact
