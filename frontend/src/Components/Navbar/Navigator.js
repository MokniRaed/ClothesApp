import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navigator = () => {
  
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/Dashboard">Clothes-Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Dashboard">
              Dashboard
            </Nav.Link>

            <Nav.Link as={Link} to="/add">
              Add Article
            </Nav.Link>
            
          
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigator;
