import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EditArticle = () => {
  const Articles = useSelector(state =>state.Article)
  const {id} = useParams();
  const article = Articles.find(e =>e._id ===id);
  console.log(article,"article");

  const [categorie, setCategorie] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  


  return (
    <div>
      <Toaster position="top-right" />
      <h1>Edit Article</h1>
      <Container style={{ margin: "40px" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group   className="mb-3" controlId="formBasicEmail">
                <Form.Select value={"Femme"}
                
                  onChange={(e) => {}}
                  aria-label="Default select "
                >
                  <option>Choose Category </option>
                  <option  value="Homme">Homme</option>
                  <option  value="Femme">Femme</option>
              
                  
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Type</Form.Label>
                <Form.Control
                placeholder={article.type}
                  onChange={(e) => setType(e.target.value)}
                  type="text"
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
                  type="number"
                  placeholder="220"
                />
              </Form.Group>
              <Button variant="primary" onClick={() => {EditArticle(id,{ categorie, type, color, price, size, quantity })}}>
                Edit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditArticle;
