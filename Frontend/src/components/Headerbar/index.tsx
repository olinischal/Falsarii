import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import * as AuthService from "../../services/authenticate-service";

const Headerbar = () => {
  const headerbar = useNavigate();

  let user = AuthService.getCurrentUser();

  const logOut = () => {
    AuthService.logout();
    headerbar("/login");
  };

  return (
    <Navbar className="color-nav2" bg="#C879FF" variant={"dark"} expand="sm">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <Image
            className="img"
            src={require("./NAFA_Logo.PNG")}
            alt="NAFA Main Logo"
            height="70"
            width="70"
            fa-pull-right="100"
            rounded
          />
        </Navbar.Brand>

        {user ? (
          <Nav>
            <Nav.Link as={Link} to="/profile/user">
              Profile
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
        ) : (
          <Nav>
            <Nav.Link
              className="btn btn-success"
              style={{
                padding: "10px",
                margin: "15px 15px 15px 10px",
                color: "black",
              }}
              as={Link}
              to="/login"
            >
              <h5>Sign in</h5>
            </Nav.Link>

            <Nav.Link
              className="btn btn-info"
              style={{
                padding: "10px",
                margin: "15px 15px 15px 10px",
                color: "black",
              }}
              as={Link}
              to="/signup"
            >
              <h5>Register</h5>
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default Headerbar;
