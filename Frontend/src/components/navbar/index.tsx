import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../navbar/navbar.css";

const NavigationBar = () => {
  return (
    <Navbar className="color-nav" variant={"light"} expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="menu-items">
            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/members">
              Members
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Communities
            </Nav.Link>
            <Nav.Link as={Link} to="/allevents">
              <div className="dropdown">
                Events
                <div className="dropdown-content">
                  <Nav.Link as={Link} to="/Allevents">
                    All events{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/calendar">
                    Calendar{" "}
                  </Nav.Link>
                </div>
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to="/news">
              News
            </Nav.Link>
            <Nav.Link as={Link} to="/give">
              <div className="dropdown">
                More
                <div className="dropdown-content">
                  <Nav.Link as={Link} to="/give">
                    Donate{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Payment">
                    Other{" "}
                  </Nav.Link>
                </div>
              </div>
            </Nav.Link>

            <Nav.Link as={Link} to="">
              <div className="dropdown">
                Scholarship
                <div className="dropdown-content">
                  <Nav.Link as={Link} to="/addscholarship">
                    Add
                  </Nav.Link>
                  <Nav.Link as={Link} to="/viewscholarship">
                    View
                  </Nav.Link>
                </div>
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
