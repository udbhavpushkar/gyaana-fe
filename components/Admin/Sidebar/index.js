import Link from "next/link"
import React from "react"
import styles from "../style.module.css"
import menu from "./menus"

// function MenuItem (props){
//     return 
// }

export default function Sidebar(props) {


    return <div className={`${styles.linkContainer}`}>
        {menu[props.role].map((item, index) => {
            if (item.link) {
                return <Link href={item.link} style={{ marginBottom: "10px" }} key={`nav_${index}`}>
                    <div className={styles.adminHeaderLinks}>{item.name}</div>
                </Link>
            } else {
                return <div>
                    <div className={styles.adminHeaderLinks}>{item.name}</div>
                    <div style={{ paddingLeft: "10px" }}>
                        {item?.list?.map((subItem, subIndex) => {
                            if (subItem.link) {
                                return <Link href={subItem.link} style={{ marginBottom: "5px" }} key={`sub_nav_${index}_${subIndex}`}>
                                    <div className={styles.adminHeaderLinks}>{subItem.name}</div>
                                </Link>
                            } else {
                                return <div>
                                    <div className={styles.adminHeaderLinks}>{subItem.name}</div>
                                    <div style={{ paddingLeft: "10px" }}>
                                        {subItem?.list?.map((subSubItem, subSubIndex) => {
                                            return <Link href={subSubItem.link} key={`sub_nav_${index}_${subIndex}_${subSubIndex}`}>
                                                <div className={styles.adminHeaderLinks}>{subSubItem.name}</div>
                                            </Link>
                                        })}
                                    </div>

                                </div>
                            }
                        })}
                    </div>
                </div>
            }
        })}
    </div>
}