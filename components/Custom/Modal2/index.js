import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Modal } from "react-bootstrap"
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"

const Modal2 = (props) => {
    return <Modal
        size="lg"
        scrollable
        show={props.data}
        onHide={props.onHide}
    >
        <Modal.Header className="d-flex justify-content-between">
            <div>{props.title}</div>
            <div>
                <FontAwesomeIcon icon={faWindowClose} onClick={props.onHide} />
            </div>
        </Modal.Header>
        <Modal.Body>
            {props.children}
        </Modal.Body>
    </Modal>
}

export default Modal2