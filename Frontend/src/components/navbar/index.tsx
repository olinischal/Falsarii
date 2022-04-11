import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <Image 
            src= {require("./NAFA_Logo.PNG")}
            alt=""
            height="40"
            rounded            
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/members">
              Members
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className ="btn btn-success" style={{
              padding: "5px",
              margin: "5px",
              color: "black"
            }}as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className ="btn btn-info" style={{
              padding: "5px",
              margin: "5px",
              color: "black"
            }}as={Link} to="/signup">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
