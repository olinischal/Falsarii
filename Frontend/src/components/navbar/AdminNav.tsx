import { useContext } from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.css";
import * as AuthService from "../../services/authenticate-service";

import Authenticate from "../../Context/Authenticate";

const AdminNav = () => {
  const navigate = useNavigate();
  const { setAuth }: any = useContext(Authenticate);

  const logOut = () => {
    AuthService.logout();
    setAuth({});
    navigate("/login");
  };

  return (
    <>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/searchMember">
          <span className="text-warning">Members</span>
        </Nav.Link>
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title={<span className="text-warning">Events</span>}
            menuVariant="dark"
          >
            <NavDropdown.Item href="/events">
              <span className="text-warning">Create Events</span>
            </NavDropdown.Item>
            <NavDropdown.Item href="/calendarDisplay">
              <span className="text-warning">Calender</span>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav.Link as={Link} to="/about">
          <span className="text-warning">About</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          <span className="text-warning">Contact Us </span>
        </Nav.Link>

        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title={<span className="text-warning">Donate</span>}
            menuVariant="dark"
          >
            <NavDropdown.Item href="/scholarships">
              <span className="text-warning">Create Scholarship</span>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav.Link as={Link} to="/membership">
          <span className="text-warning">Membership</span>
        </Nav.Link>
      </Nav>
      {/*  {user ?  */}
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
  );
};

export default AdminNav;
