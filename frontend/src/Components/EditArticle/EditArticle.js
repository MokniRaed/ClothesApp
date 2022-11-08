import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { editAticles } from "../../Api/aticleApi";

const EditArticle = () => {

  const Articles = useSelector(state =>state.Article)
  const navigate = useNavigate()
  const {id} = useParams();
  const article = Articles.find(e =>e._id ===id);


  const [categorie, setCategorie] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleEdit = (article) => {
    
    toast.promise(editAticles(id,article), {
      loading: "Editing...",
      success: <b>Article Edited!</b>,
      error: <b>Could not Edit.</b>,
    });
  };
  


  return (
    <div>
      <Toaster position="top-right" />
      <h1>Edit Article</h1>
      <Container style={{ margin: "40px" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form novalidate>
              <Form.Group   className="mb-3" controlId="formBasicEmail">
                <Form.Select defaultValue={article.categorie}
                
                  onChange={(e) => setCategorie(e.target.value)}
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
                defaultValue={article.type}
                  onChange={(e) => setType(e.target.value)}
                  type={article.type}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  onChange={(e) => setColor(e.target.value)}
                  type="text"
                  defaultValue={article.color}
                  required
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Size</Form.Label>
                <Form.Control
                  onChange={(e) => setSize(e.target.value)}
                  type="number"
                  defaultValue={article.size}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  onChange={(e) => setQuantity(e.target.value)}
                  type="number"
                  defaultValue={article.quantity}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  defaultValue={article.price}
                  required
                />
              </Form.Group>
              <Button  variant="primary" onClick={() => {handleEdit({ categorie, type, color, price, size, quantity })}}>
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
