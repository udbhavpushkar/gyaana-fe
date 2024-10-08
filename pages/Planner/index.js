import { useState } from "react"
import Calendar from "react-calendar"
// import "./App.css"
import "react-calendar/dist/Calendar.css"
import styles from "./styles.module.css"

const Planner = () => {
  const [date, setDate] = useState(new Date())

  return (
    <div className="app">
      <h1 className="text-center">School Planner</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  )
}

export default Planner
