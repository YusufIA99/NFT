import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Testimonials() {
    const testimonials = [
        {
            name: 'Olivia Cole',
            image: 'Olivia.png', // Replace with the actual image path or URL
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.',
        },
        {
            name: 'Evan White',
            image: 'Evan.png', // Replace with the actual image path or URL
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.',
        },
        {
            name: 'Jessica Page',
            image: 'Jessica.png', // Replace with the actual image path or URL
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.',
        },
    ];

    return (
        <Container className="text-center my-5">
            <p className='custom-text-color'>TESTIMONIALS</p>
            <h2 className="mb-4 text-light">Read What Others Have To Say</h2>
            <Row>
                {testimonials.map((testimonial, index) => (
                    <Col md={4} key={index}>
                        <Card className="mb-4 shadow-sm bg-dark text-white custom-card-color">
                            <Card.Img
                                variant="top"
                                src={testimonial.image}
                                className="rounded-circle mx-auto mt-3"
                                alt={testimonial.name}
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title>{testimonial.name}</Card.Title>
                                <Card.Text>{testimonial.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Testimonials;