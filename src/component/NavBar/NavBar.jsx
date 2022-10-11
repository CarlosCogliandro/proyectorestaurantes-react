import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

function NavBar() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb">
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                src="https://th.bing.com/th/id/R.5610b267b9e96dbf26866a27212e0b43?rik=rOyA81jAYowFBg&pid=ImgRaw&r=0"
                width="60"
                height="30"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Navbar.Brand href="/">
                    <img
                      src="https://th.bing.com/th/id/R.5610b267b9e96dbf26866a27212e0b43?rik=rOyA81jAYowFBg&pid=ImgRaw&r=0"
                      width="60"
                      height="30"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="/">Inicio</Nav.Link>
                  <Nav.Link href="/nosotros">Nosotros</Nav.Link>
                  <NavDropdown
                    title="Restaurantes"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/buenosaires">
                      Buenos Aires
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/tempora">Témpora</NavDropdown.Item>
                    <NavDropdown.Item href="/langolo">
                      L´angolo
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/contacto">Contacto</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
