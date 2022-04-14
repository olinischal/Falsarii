import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.css";
import * as AuthService from "../../services/authenticate-service";

const NavigationBar = () => {
  const navigate = useNavigate();

  let user = AuthService.getCurrentUser();

  const logOut = () => {
    AuthService.logout();
    navigate("/login");
  };

  return (
    <Navbar
      className="color-nav fixed-top"
      bg="dark"
      variant={"dark"}
      expand="sm"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src={require("./aboutNafa.png")} alt="" height="60" rounded />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user ? (
            <>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/members">
                  <span className="text-warning">Member</span>
                </Nav.Link>
                {/* <Nav>
        <NavDropdown
          // id="nav-dropdown-dark-example"
          title={<span className="text-warning">Events</span>}
          menuVariant="dark"
        >
           
          <NavDropdown.Item href="/events"><span className="text-warning">All Events</span></NavDropdown.Item>
          <NavDropdown.Item href="/calendar"><span className="text-warning">Calender</span></NavDropdown.Item>          
        </NavDropdown>
          </Nav> */}
                <Nav.Link href="/events">
                  <span className="text-warning">Events</span>
                </Nav.Link>

                <Nav.Link href="/about">
                  <span className="text-warning">About</span>
                </Nav.Link>

                <Nav.Link href="/team">
                  <span className="text-warning">Team</span>
                </Nav.Link>

                
                <Nav.Link href="/contact">
                  <span className="text-warning">Contact</span>
                </Nav.Link>

                <Nav.Link href="/calendar">
                  <span className="text-warning">Calendar</span>
                </Nav.Link>

                <Nav.Link as={Link} to="/donation">
                  <span className="text-warning">Donate</span>
                </Nav.Link>

                <Nav.Link as={Link} to="/membership">
                  <span className="text-warning">Membership</span>
                </Nav.Link>
                <Nav.Link href="/tshirtSale">
                  <span className="text-warning">Buy Tshirt</span>
                </Nav.Link>
              </Nav>
              {/* // {user ?  */}
              <Nav>
                <Nav.Link as={Link} to="/profile/user">
                  <span className="text-warning">Profile</span>
                </Nav.Link>

                <Nav.Link
                  className="btn btn-success"
                  style={{
                    padding: "5px",
                    margin: "5px",
                    color: "black",
                  }}
                  onClick={logOut}
                >
                  Sign Out
                </Nav.Link>
              </Nav>
            </>
          ) : (
            <>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/members">
                  <span className="text-warning">Members</span>
                </Nav.Link>
                {/* <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={<span className="text-warning">Events</span>}
          menuVariant="dark"
          
        >
          
          <NavDropdown.Item href="/events"><span className="text-warning">All Events</span></NavDropdown.Item>
          <NavDropdown.Item href="/calendar"><span className="text-warning">Calender</span></NavDropdown.Item>          
        </NavDropdown>
          </Nav> */}
                <Nav.Link href="/events">
                  <span className="text-warning">Events</span>
                </Nav.Link>
                <Nav.Link href="/about">
                  <span className="text-warning">About</span>
                </Nav.Link>
                <Nav.Link href="/team">
                  <span className="text-warning">Team</span>
                </Nav.Link>
                <Nav.Link href="/contact">
                  <span className="text-warning">Contact</span>
                  
                </Nav.Link>
                <Nav.Link href="/calendar">
                  <span className="text-warning">Calendar</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/donation">
                  <span className="text-warning">Donate</span>
                </Nav.Link>
                <Nav.Link href="/tshirtSale">
                  <span className="text-warning">Buy Tshirt</span>
                </Nav.Link>
                <Nav.Link href="/searchMember">
                  <span className="text-warning">Search Member</span>
                </Nav.Link>
                
              </Nav>

              <Nav>
                <Nav.Link
                  className="btn btn-success"
                  style={{
                    padding: "5px",
                    margin: "5px",
                    color: "black",
                  }}
                  as={Link}
                  to="/login"
                >
                  Sign in
                </Nav.Link>

                <Nav.Link
                  className="btn btn-info"
                  style={{
                    padding: "5px",
                    margin: "5px",
                    color: "black",
                  }}
                  as={Link}
                  to="/signup"
                >
                  Register
                </Nav.Link>
              </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
