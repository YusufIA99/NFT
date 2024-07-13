import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function Hero() {
    return (
        <div id="About">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="text-center text-md-left">
                        <h1 className="text-light">Discover <br />and Collect <br />Rare NFTs</h1>
                        <p className="text-light">The most secure marketplace for buying <br />and selling unique crypto assets.</p>
                        <button className="btn btn-primary me-2">BUY NFTS</button>
                        <button className="btn btn-primary me-2">SELL NFTS</button>
                    </Col>

                    <Col xs={12} md={8} lg={4} className="mx-auto">
                        <Image src="pc.png" alt="" fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;