import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";


function Appstore() {
  return (
    <div>
       <Container>
        <Row className="align-items-center"> {/* Adjusted for vertical alignment */}
          <Col xs={12} md={6} className="text-center text-md-left"> {/* Adjusted for text alignment */}
            <p className="text-light">
              GET OUR APP.
            </p>
            <h1 className="text-light">
              Browse Nfts From <br />Your Smartphone
            </h1>
           <button className="btn btn-primary me-2">Download</button>
          </Col>
          <Col xs={12} md={8} lg={4} className="mx-auto">
            <Image src="Phone.png" alt="" fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Appstore;
