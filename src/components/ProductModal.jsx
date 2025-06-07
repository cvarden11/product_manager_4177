import React from "react";
import { Modal , Button } from "react-bootstrap";
const ProductModal = ({
show,
onClose,
onSubmit,
title,
children, 
submitLabel,
})=>{return(
    <Modal show={show} onHide={onClose}>
        <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>

        <Modal.Footer>
            <Button variant ='secondary' onClick={onClose}>
                Close
            </Button>
            <Button variant ='primary' onClick={onSubmit}>
                {submitLabel}
            </Button>
        </Modal.Footer>
    </Modal>

    )
};

export default ProductModal;