import React, { useEffect, useState } from "react"
import styles from "./countersSection.module.css"

const Counters = () => {
  // const [student, setStudent] = useState(0)

  // const increment = () => {
  //   setStudent(student + 1)
  //   console.log(student)
  // }

  // useEffect(() => {
  //   for (let i = 0; i < 50; i++) {
  //     setStudent(student + 1)
  //   }
  // }, [])

  const section = [
    {
      name: "Teachers",
      count: 10,
    },
    {
      name: "Campus",
      count: 17,
    },
    {
      name: "Students",
      count: 120,
    },
    {
      name: "Teaching",
      count: 105,
    },
  ]

  return (
    <div className={styles.counterWrapper}>
      <p style={{ textAlign: "center", marginBottom: "2.3rem", fontSize: "30px", fontWeight: 600 }}> 20 Years of Experience </p>
      <p style={{ textAlign: "center", backgroundColor: "wheat", padding: "5px" }}>
        Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country
      </p>
      <div className="w-100 text-center mb-3">
        <div className="row">
          {section.map((item, index) => (
            <div key={`${item.name} ${index}`} className={`col-sm-6 col-md-3 mb-2 text-center ${styles.countsContainer}`}>
              <p className={styles.countNumber}>{item.count}</p>
              <p style={{ fontSize: "20px" }}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Counters
