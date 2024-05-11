import { useState } from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";

const Navigation = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <Navbar className="p-s-2" sticky="top" bg="light" expand="lg" variant="light">
      <Container className="justify-content-end gap-3 flex-nowrap" fluid>
        <Navbar.Brand className="text-primary fw-bold" id="logo" href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="pe-3">
              <NavDropdown
                title={
                  <span className="text-primary fw-semibold">
                    Product
                  </span>
                }
                className="text-primary fw-semibold"
                show={show1}
                onMouseOver={() => setShow1(true)}
                onMouseLeave={() => setShow1(false)}
              >
                <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Something else here</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <span className="text-primary fw-semibold">
                    Integrations
                  </span>
                }
                className="text-primary fw-semibold"
                show={show2}
                onMouseOver={() => setShow2(true)}
                onMouseLeave={() => setShow2(false)}
              >
                <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Something else here</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <span className="text-primary fw-semibold">
                    Solutions
                  </span>
                }
                className="text-primary fw-semibold"
                show={show3}
                onMouseOver={() => setShow3(true)}
                onMouseLeave={() => setShow3(false)}
              >
                <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link className="text-primary fw-semibold underline" href="#action4">Pricing</Nav.Link>
              </Nav.Item>
              <NavDropdown
                title={
                  <span className="text-primary fw-semibold">
                    Resources
                  </span>
                }
                show={show4}
                onMouseOver={() => setShow4(true)}
                onMouseLeave={() => setShow4(false)}
              >
                <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link className="text-primary fw-semibold underline" href="#action6">Enterprise</Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Nav className="d-flex flex-row justify-content-between gap-3 align-items-center">
          <Nav.Link className="text-primary fw-semibold underline icon-link" href="#action1">
          <i className="bi bi-person-fill"></i>
            Log In
          </Nav.Link>
          <Nav.Link className="text-primary fw-semibold" href="#action2">
            <Button variant="primary" className="text-white fw-semibold underline">Sign Up</Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;