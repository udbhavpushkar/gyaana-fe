import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import Style from "./style.module.css"
import { faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons"

const Collapsable = (props) => {

    const [isOpen, setIsOpen] = useState(props.defaultShow ?? true)

    const handleToggle = () => {
        setIsOpen(prev => !prev)
    }

    return <div className={`d-flex flex-column ${Style.box}`}>
        <div className={`${Style.header} d-flex justify-content-between`}>
            <h2>{props?.heading}</h2>
            {props.disable ? null : <div>
                <FontAwesomeIcon className="pointer" onClick={handleToggle} icon={isOpen ? faChevronCircleUp : faChevronCircleDown} />
            </div>}

        </div>
        {isOpen && <div>{props.children}</div>}
    </div>
}

export default Collapsable