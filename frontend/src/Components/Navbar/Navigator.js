import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

const Navigator = () => {
  const navigate = useNavigate();
  //get user details from the store
  const user = useSelector((state) => state.User);
  const session = localStorage.getItem("token");
  console.log(user.name,"usernames");

  // logout function
  const handleLogout = () => {
    //remove the token
    localStorage.removeItem("token");
    //navigate to the login page
    navigate("/login");
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        {session ? (
          <Container>
            <Navbar.Brand as={Link} to="/Dashboard">
              Clothes-Store
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/add">
                Add Article
              </Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Signed in as:</Navbar.Text>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={user.name}
                
              >
                {" "}
                <NavDropdown.Item onClick={() => handleLogout()}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        ) : (
          //  if do not authorazed
          <Container>
            <Navbar.Brand>Clothes-Store</Navbar.Brand>
            <Nav variant="pills">
              <Nav.Item className="justify-content-end">
                <Nav.Link as={Link} to="/login">
                  LogIn
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/createaccount">
                  SignUp
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        )}
      </Navbar>
    </div>
  );
};

export default Navigator;
