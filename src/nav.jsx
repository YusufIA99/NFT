import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary text-white">
        <Container>
          <Navbar.Brand href="#" className="text-white">KRYPTO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className='bg-light'/>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 text-white"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#hero" className="text-white">About</Nav.Link>
              <Nav.Link href="#Analytics" className="text-white">Pricing</Nav.Link>
              <Nav.Link href="#Contact" className="text-white">Contact</Nav.Link>
              <Nav.Link href="/" className="text-white">Buy NFTs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation


