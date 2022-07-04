import React from "react";
import { Navbar, Container, Offcanvas, Nav, Form, NavDropdown, FormControl, Button } from "react-bootstrap";
import logo from "../../src/logo.png";

export default function NavBarUser() {
  return (
    <Navbar style={{backgroundColor: 'rgb(255, 227, 169)'}} sticky="top" expand="lg">
      <Container fluid>
        <Navbar.Brand className="px-3 row">
          <div className="justify-content-between" style={{ fontFamily: "cursive" }}>
            <img src={logo} style={{ height: "40px", flex: "1", resizeMode: "contain" }} />
            Burger Kong
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
          <Form className="d-flex">
          <Nav.Link style={{textDecoration: 'none', fontWeight: 'bold', color: 'rgb(247, 126, 33)'}}>Home</Nav.Link>
          <Nav.Link style={{textDecoration: 'none', fontWeight: 'bold', color: 'rgb(247, 126, 33)'}}>Items</Nav.Link>
          <Nav.Link style={{textDecoration: 'none', fontWeight: 'bold', color: 'rgb(247, 126, 33)'}}>Category</Nav.Link>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
