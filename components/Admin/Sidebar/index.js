import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import React, { useRef, useState } from "react"
import styles from "./style.module.css"
import menu from "./menus"

// function MenuItem (props){
//     return
// }

export default function Sidebar(props) {
	const [isChildOpen, setIsChildOpen] = useState("")
	const [isSubChildOpen, setIsSubChildOpen] = useState("")
	// const currentTab = useRef("Dashboard")

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
	// const handleNavLink = (link) => {
	// 	currentTab.current = link
	// }
	return (
		<div>
			{menu.map((item, i) => (
				<div key={item + i} style={{ marginLeft: "10px" }}>
					{item.childs ? (
						<div style={{ cursor: "pointer" }} onClick={() => hanldeChilds(i)}>
							<span className={styles.headerTitle}>{item.name}</span>
							<FontAwesomeIcon
								style={{ marginLeft: "10px" }}
								icon={isChildOpen == i ? faCaretRight : faCaretDown}
							/>
						</div>
					) : (
						<Link href={item.link}>
							<span className={styles.headerTitle}>{item.name}</span>
						</Link>
					)}

					{item.childs &&
						isChildOpen == i &&
						item.childs.map((child, index) => (
							<div
								key={child + index}
								style={{
									marginLeft: "20px",
									fontStyle: "italic",
									marginTop: "-0px",
								}}
							>
								{child.childs ? (
									<div
										style={{ cursor: "pointer" }}
										onClick={() => hanldeSubChilds(index)}
									>
										<span className={styles.headerTitle}>{child.name}</span>
										<FontAwesomeIcon
											style={{ marginLeft: "10px", cursor: "pointer" }}
											icon={
												isSubChildOpen == index ? faCaretRight : faCaretDown
											}
										/>
									</div>
								) : (
									<Link href={child.link}>
										<span
											className={styles.headerTitle}
											style={{ marginTop: "-5px" }}
											// onClick={() => setCurrentTab(child.name)}
										>
											{child.name}
										</span>
									</Link>
								)}

								{child.childs &&
									isSubChildOpen == index &&
									child.childs.map((subChild, i) => (
										<div
											key={subChild + i}
											style={{
												marginLeft: "20px",
												cursor: "pointer",
											}}
										>
											<Link href={subChild.link}>
												<p
													style={{ marginTop: "-5px" }}
													className={styles.headerTitle}
												>
													{subChild.name}
												</p>
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
