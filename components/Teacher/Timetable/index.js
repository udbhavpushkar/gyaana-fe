import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import styles from "./style.module.css"
import LoadingSpinner from "../../LoadingSpinner"

const DAY_NAME = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const PERIOD = ["Days/Class", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"]

const Timetable = () => {

    const arr = [
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
    ]

    const [data, setData] = useState(arr)

    const [isLoading, setIsloading] = useState(false)

    useEffect(() => {
        setIsloading(true)
        setTimeout(() => {
            setIsloading(false)
        }, 800)
    }, [])

    return (
        <>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div style={{ backgroundColor: "rgb(198, 173, 198)" }}>
                    <h4 className="text-center" style={{ backgroundColor: "purple", fontFamily: "cursive", color: "white", padding: "10px" }}>
                        Edit Timetable
                    </h4>
                    <div className={`d-flex justify-content-center`}>
                        {PERIOD.map((item, index) => {
                            return (
                                <div className={styles.tableBox} style={{ width: index === 0 ? "130px" : "" }} key={"period_" + index}>
                                    {item}
                                </div>
                            )
                        })}
                    </div>

                    {data.map((day, ind) => (
                        <div key={`${day}${ind}`} className={styles.tableBoxContainer}>
                            <div className={styles.tableBox2} key={"day" + ind}>
                                {DAY_NAME[ind]}
                            </div>
                            {day.map((item, index) => (
                                <div className={styles.tableBox} key={item + index}>
                                    <div>
                                        <input placeholder="Subject" style={{ height: "80px", width: "100%", fontSize: "12px", textAlign: "center", fontWeight: "600" }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                    <div style={{ marginTop: "20px", textAlign: "right", padding: "20px" }}>
                        <button className="btn btn-primary" style={{ marginRight: "20px" }}>
                            Save
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Timetable
