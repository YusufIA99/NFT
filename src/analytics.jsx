import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";


function Analytics() {
  return (
    <div id="Analytics">
    <Container>
        <Row className="align-items-center"> {/* Adjusted for vertical alignment */}
        <Col xs={12} md={8} lg={4} className="mx-auto">
            <Image src="Analytics.png" alt="" fluid />
          </Col>
          <Col xs={12} md={6} className="text-center text-md-left"> {/* Adjusted for text alignment */}
            <p className="custom-text-color">
              ANALYTICS
            </p>
            <h1 className="text-light">
            Built-in Analytics <br />to Track your Nfts
            </h1>
            <p className="text-light">Use our built-in analytics dashboard to pull <br /> valuable insights and monitor the value of your <br /> Krypto portfolio over time.</p>
           <button className="btn btn-primary me-2">VIEW OUR PRICING</button>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Analytics