import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.css";
import * as AuthService from "../../services/authenticate-service";
import UseAuth from "../Authenticate/useAuth";

const UserNav = () => {
  const navigate = useNavigate();
  const { setAuth }: any = UseAuth();

  const logOut = async () => {
    AuthService.logout();
    setAuth({});
    navigate("/login");
  };

  return (
    <>
      <Nav className="me-auto">
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Events"
            menuVariant="dark"
          >
            <NavDropdown.Item href="/events">All Events</NavDropdown.Item>
            <NavDropdown.Item href="/calendar">Calendar</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact Us
        </Nav.Link>
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Donate"
            menuVariant="dark"
          >
            <NavDropdown.Item href="/events">Donate</NavDropdown.Item>
            <NavDropdown.Item href="/scholarshipList">
              Scholarships
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {/* <Nav.Link as={Link} to="/payment">
                  Donate
                </Nav.Link> */}

        <Nav.Link as={Link} to="/membership">
          Membership
        </Nav.Link>
      </Nav>
      {/* // {user ?  */}
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
    </>
  );
};

export default UserNav;
