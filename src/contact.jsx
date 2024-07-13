import React, { useState } from "react";
import { Form, Col, Button, Container, Row, Card } from "react-bootstrap";

function Contact() {
  // Step 1: Set up state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
  });
  const [validated, setValidated] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate inputs on submission
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div id="Contact">
      <Container className="contact-form-container mt-5">
        <h1 className="text-light text-center">Contact Us</h1>
        <Card className="custom-card-color">
          <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label className="text-light">Name</Form.Label>
                  <Form.Control
                    required
                    name="name"
                    type="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid name.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-light">Email</Form.Label>
                  <Form.Control
                    required
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} controlId="formGridMobile">
                  <Form.Label className="text-light">Mobile Number</Form.Label>
                  <Form.Control
                    required
                    name="mobile"
                    placeholder=""
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid mobile number.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} id="formGridQuery">
                  <Form.Label className="text-light">Message</Form.Label>
                  <Form.Control
                    required
                    name="query"
                    as="textarea"
                    rows={3}
                    placeholder=""
                    value={formData.query}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mt-3">
                <Col>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Contact;
