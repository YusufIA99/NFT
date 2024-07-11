import { Form, Col, Button, Container, Row, Card } from 'react-bootstrap';

function Contact() {
  return (
    <div id='Contact'>

 
    <Container className="contact-form-container mt-5">
         <h1 className='text-light text-center'>Contact Us</h1>
      <Card className='custom-card-color'>
        <Card.Body>
          <Form>
            <Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label className='text-light'>Name</Form.Label>
                <Form.Control name="name" type="name" placeholder="Name" />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className='text-light'>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridMobile">
                <Form.Label className='text-light'>Mobile Number</Form.Label>
                <Form.Control name="mobile" placeholder="" />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} id="formGridQuery">
                <Form.Label className='text-light'>Message</Form.Label>
                <Form.Control name="query" as="textarea" rows={3} placeholder=''/>
              </Form.Group>
            </Row>
            
            <Row className="mt-3"> {/* Added mt-3 class here for margin-top */}
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