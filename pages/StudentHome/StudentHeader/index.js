import React from "react"
import Image from "next/image"
import GyaanaImage from "../../../assets/images/unnamed.jpg"
import Link from "next/link"

const StudentHeader = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "purple" }}>
        <Link href="/">
          <a className="navbar-brand">
            <Image src={GyaanaImage} height={80} width={80} />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Student Profile
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Timetable
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Assignments
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Notice
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                School Planner
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default StudentHeader
