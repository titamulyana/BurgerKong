import { useEffect, useState } from "react";
import { Button, Modal, Form, render } from "react-bootstrap";

export default function ModalDetail({isModal, closeModal, data}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    useEffect(() => {
        setShow(isModal)
    }, [])

    return (
      <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Title className="text-center">Foods Detail</Modal.Title>
          <Modal.Body className="row">
            <div className="col-6" >
                <img  style={{ height: "250px", width: '220px', objectFit: "containt", objectPosition: "top" }} 
                src={data.imgUrl} />
            </div>
            <div className="col-6" >
                <p>Name : {data.name}</p>
                <p>Description : {data.description}</p>
                <p>Price : Rp. {data.price}</p>
                <p>Category : {data.Category.name}</p>
                <p>Ingredients : {data.Ingredient.name}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
