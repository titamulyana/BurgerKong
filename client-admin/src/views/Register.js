import SideBar from "../components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Modal, Form, Row, Table, card, Navbar, Container, NavDropdown, FormControl, Nav } from "react-bootstrap";
import Layout from "../components/Layout";
import { registerUsers } from "../redux/action/userAction";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(registerUsers(register, navigate));
  };

  return (
    <Layout>
      <>
        <div className="d-flex justify-content-center align-items-center">
          <div className="card w-100 py-3 px-4 mx-3 my-5">
            <Form onSubmit={submitHandle}>
              <h2 className="text-center">Add Admin</h2>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={(e) => setRegister((state) => ({ ...state, username: e.target.value }))} type="text" placeholder="username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(e) => setRegister((state) => ({ ...state, email: e.target.value }))} type="email" placeholder="example: admin@gmail.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => setRegister((state) => ({ ...state, password: e.target.value }))} type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control onChange={(e) => setRegister((state) => ({ ...state, address: e.target.value }))} type="text" placeholder="example: Kuningan" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control onChange={(e) => setRegister((state) => ({ ...state, phoneNumber: e.target.value }))} type="text" placeholder="example: 0881-000-111-222" />
              </Form.Group>
              <Button variant="warning" type="submit">
                Sign Up
              </Button>
            </Form>
          </div>
        </div>
      </>
    </Layout>
  );
}
