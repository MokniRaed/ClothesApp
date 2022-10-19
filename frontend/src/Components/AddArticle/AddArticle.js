import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { addArticle } from "../../Api/aticleApi";

const AddArticle = () => {
  const navigate = useNavigate();
  const [categorie, setCategorie] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = (article) => {
    console.log("clicked", article);
    const add = addArticle(article);
    console.log(add,"response from server");
    navigate("/dashboard");
  };

  return (
    <div>
      <Container style={{ margin: "40px" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select
                  onChange={(e) => setCategorie(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>Open this select </option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  onChange={(e) => setType(e.target.value)}
                  type="text"
                  placeholder="Robe.."
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  onChange={(e) => setColor(e.target.value)}
                  type="text"
                  placeholder="Red"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  placeholder="150"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Size</Form.Label>
                <Form.Control
                  onChange={(e) => setSize(e.target.value)}
                  type="number"
                  placeholder="10"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  onChange={(e) => setQuantity(e.target.value)}
                  type="number"
                  placeholder="quantity"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  placeholder="220"
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={() =>
                  handleAdd({ categorie, type, color, price, size, quantity })
                }
              >
                Add
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddArticle;
