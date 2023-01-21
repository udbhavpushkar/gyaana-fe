import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import React, { useState } from "react"
import styles from "../style.module.css"
import menu from "./menus"

// function MenuItem (props){
//     return
// }

export default function Sidebar(props) {
	const [isChildOpen, setIsChildOpen] = useState("")
	const [isSubChildOpen, setIsSubChildOpen] = useState("")

	const hanldeChilds = (i) => {
		if (isChildOpen == i) {
			setIsChildOpen("")
		} else {
			setIsChildOpen(i)
		}
	}
	const hanldeSubChilds = (i) => {
		if (isSubChildOpen == i) {
			setIsSubChildOpen("")
		} else {
			setIsSubChildOpen(i)
		}
	}
	return (
		<div>
			{menu.map((item, i) => (
				<div style={{ marginLeft: "5px" }}>
					<Link href={item.link}>
						<span>{item.name}</span>
					</Link>
					{item.childs && (
						<FontAwesomeIcon
							style={{ marginLeft: "10px", cursor: "pointer" }}
							onClick={() => hanldeChilds(i)}
							icon={isChildOpen == i ? faCaretRight : faCaretDown}
						/>
					)}
					{item.childs &&
						isChildOpen == i &&
						item.childs.map((child, index) => (
							<div style={{ marginLeft: "20px", fontStyle: "italic" }}>
								<Link href={child.link}>
									<span>{child.name}</span>
								</Link>
								{child.childs && (
									<FontAwesomeIcon
										onClick={() => hanldeSubChilds(index)}
										style={{ marginLeft: "10px", cursor: "pointer" }}
										icon={isSubChildOpen == index ? faCaretRight : faCaretDown}
									/>
								)}
								{child.childs &&
									isSubChildOpen == index &&
									child.childs.map((subChild) => (
										<div style={{ marginLeft: "20px" }}>
											<Link href={subChild.link}>
												<p>{subChild.name}</p>
											</Link>
										</div>
									))}
							</div>
						))}
					<hr />
				</div>
			))}
		</div>
	)
}

// return <div className={`${styles.linkContainer}`}>
//         {menu[props.role].map((item, index) => {
//             if (item.link) {
//                 return <Link href={item.link} style={{ marginBottom: "10px" }} key={`nav_${index}`}>
//                     <div className={styles.adminHeaderLinks}>{item.name}</div>
//                 </Link>
//             } else {
//                 return <div>
//                     <div className={styles.adminHeaderLinks}>{item.name}</div>
//                     <div style={{ paddingLeft: "10px" }}>
//                         {item?.list?.map((subItem, subIndex) => {
//                             if (subItem.link) {
//                                 return <Link href={subItem.link} style={{ marginBottom: "5px" }} key={`sub_nav_${index}_${subIndex}`}>
//                                     <div className={styles.adminHeaderLinks}>{subItem.name}</div>
//                                 </Link>
//                             } else {
//                                 return <div>
//                                     <div className={styles.adminHeaderLinks}>{subItem.name}</div>
//                                     <div style={{ paddingLeft: "10px" }}>
//                                         {subItem?.list?.map((subSubItem, subSubIndex) => {
//                                             return <Link href={subSubItem.link} key={`sub_nav_${index}_${subIndex}_${subSubIndex}`}>
//                                                 <div className={styles.adminHeaderLinks}>{subSubItem.name}</div>
//                                             </Link>
//                                         })}
//                                     </div>

//                                 </div>
//                             }
//                         })}
//                     </div>
//                 </div>
//             }
//         })}
//     </div>
