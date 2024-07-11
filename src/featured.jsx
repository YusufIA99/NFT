
import Container from 'react-bootstrap/Container';

function Featured() {
    return (
        // Added pt-5 for additional top padding
        <div className="py-4 pt-5">
            <Container>
                <div className="text-center mb-4">
                    <h5 className="text-light">FEATURED ON</h5>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-5">
                    <img src="Tech.png" alt="TechCrunch" className="img-fluid" style={{ maxWidth: '100px', opacity: 0.8 }} />
                    <img src="Fast.png" alt="Fast Company" className="img-fluid" style={{ maxWidth: '100px', opacity: 0.8 }} />
                    <img src="Mit.png" alt="MIT" className="img-fluid" style={{ maxWidth: '100px', opacity: 0.8 }} />
                    <img src="Forbes.png" alt="Forbes" className="img-fluid" style={{ maxWidth: '100px', opacity: 0.8 }} />
                </div>
            </Container>
        </div>
    );
}

export default Featured;
