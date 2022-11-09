import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigate, useNavigate } from "react-router-dom";
import { createUser } from "../../Api/aticleApi";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Handle the user creation when click on the add button
  const handleCreateUser = () => {
    // First Methode to check the creation of the account
    // try{
    //     const user = await createUser({ name, lastname, email, password })
    //     if(user.status === 200){
    //         alert(user.data)
    //     }
    //     navigate("/login");
        
    // }catch(err){
    //     alert("user alredy there")
    //     console.log(err);
    // }

    //Second Methode with the user of the Toaster
    toast.promise(createUser({ name, lastname, email, password }), {
      loading: "Creating...",
      success: <b>User has been Created !</b>,
      error: <b>Could not Create account .</b>,
    });
    navigate("/login");
  };

  return (
    <div style={{ margin: "40px" }}>
      <Toaster position="top-right" />
      <Container className="align-m">
        <Row className="justify-content-md-center">
        <Col md={{ span: 6 }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name </Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            onChange={(e) => setLastname(e.target.value)}
            type="text"
            placeholder="Enter Your Lastname"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button onClick={() => handleCreateUser()} variant="primary">
          Create Account
        </Button>
      </Form>
      </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Register;
