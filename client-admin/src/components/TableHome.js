import React, { useState, useEffect } from "react";
import { Table, Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import ModalEdit from "./ModalEdit";
import { useDispatch, useSelector } from "react-redux";
import { getFoods, delFoods } from "../redux/action/foodAction";

export default function TableHome({}) {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [isShowModal, setIsShowModal] = useState(false);

  const [editData, setEditData] = useState()

  useEffect(() => {
    dispatch(getFoods());
  }, []);
  let Data = store.foodData.foods;
  return (
    <div className="shadow">
      <Navbar bg="light" expand="lg">
        <Container className="">
          <Navbar.Brand style={{ fontFamily: "cursive" }}>Foods list</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex ms-auto">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="warning">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isShowModal && (
        <ModalEdit
          isModal={isShowModal}
          data={editData}
          closeModal={() => {
            setIsShowModal(false);
          }}
        />
      )}

      <Table striped>
        <thead>
          <tr className="text-center">
            <th>No</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th>Create By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {Data.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.Category.name}</td>
                <td>Rp. {el.price}</td>
                <td>
                  <img src={el.imgUrl} style={{ height: "50px", width: "50px", borderRadius: "50px" }} />
                </td>
                <td>{el.authorId}</td>
                <td>
                  <Button onClick={() => {setIsShowModal(true); setEditData(el)}} className="mx-1" variant="warning">
                    Edit
                  </Button>
                  <Button onClick={() => dispatch(delFoods(el.id))} className="mx-1" variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
