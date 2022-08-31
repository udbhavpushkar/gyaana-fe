import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./newsAndEvents.module.css"
import { faCircleRight } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const NewsAndEvents = () => {
  const newsAndEvent = [
    "Gyaana Admission Open 2022- 2023.",
    "Admission open for Classes Nur to 12th.",
    "Play School available here.",
    "Proper Guidence is provided to each Child.",
    "Transport is now available.",
    "Top className results for the past 10 years.",
    "Branches in more than 42 cities.",
  ]
  return (
    <div className={styles.newsContainer}>
      <div className="container">
        <div style={{ color: "white", fontWeight: 600, fontSize: "24px", fontFamily: "cursive" }} className="w-100 text-center mb-3 ">
          In the news
        </div>

        <div className="col-xs-12">
          <ul className="list-group">
            {newsAndEvent.map((item, index) => (
              <li key={`litile - ${index}`} className="list-group-item" style={{ fontFamily: "cursive" }}>
                {/* <FontAwesomeIcon icon={faArrowTurnDownRight} /> */}
                <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faCircleRight} />

                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`mt-3 ${styles.btn}`}>
        <Link href="News">
          <div className="align-items-center d-flex justify-content-center">
            <div style={{ marginRight: "10px" }}>View all</div>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NewsAndEvents
