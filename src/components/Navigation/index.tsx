import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="tiktuk logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          TikTuk
        </Navbar.Brand>
        <Nav className="m-auto py-1">
          <Nav.Link as={Link} to="/">
            Trending
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
