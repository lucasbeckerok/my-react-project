import CartWidget from "./CartWidget";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Hanno Tienda Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
              <NavDropdown title="Tienda" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Categoria 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Mi cuenta</NavDropdown.Item>
              </NavDropdown>
              <CartWidget/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
  

export default NavBar;