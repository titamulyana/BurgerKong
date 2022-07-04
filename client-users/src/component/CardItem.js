import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ModalDetail from "./ModalDetail";

export default function CardItem({data}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <ModalDetail
          data={data} 
          isModal={showModal}
          closeModal={() => {
            setShowModal(false);
          }}
        />
      )}
      <Card className="mx-1 my-4 shadow " style={{ width: "18rem", backgroundColor: "rgb(247, 246, 242, 0.9)", borderRadius: "20px" }}>
        <Card.Img
          className="my-2"
          style={{ height: "250px", borderRadius: "25%", objectFit: "containt", objectPosition: "top" }}
          variant="top"
          src={data.imgUrl}
        />
        <Card.Body className="row">
          <Card.Title>{data.name}</Card.Title>
          <p>Rp.{data.price}</p>
          <Button onClick={() => setShowModal(true)} variant="warning">
            Detail
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
