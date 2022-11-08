import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast, { Toaster } from "react-hot-toast";
import { login } from "../../Api/aticleApi";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {   
    var res = await login({ email, password })
    // Show toast after getting the result
    toast.promise(login({ email, password }), {
      loading: "Connecting...",
      success: <b>LogedIn !</b>,
      error: <b>Check your information .</b>,
    });
    // Getting the token and save it in the localStorage under the name of token as a key
    const token =  res.data.token;
    localStorage.setItem("token",token)
    navigate("/dashboard");

  };
  return (
    <div>
      <Toaster position="top-right" />
      <Form>
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

        <Button variant="primary" onClick={() => handleLogin()}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
