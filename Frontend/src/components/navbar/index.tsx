import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import './index.css'
import * as AuthService from "../../services/authenticate-service";

import UserNav from "./UserNav";
import AdminNav from "./AdminNav";


const NavigationBar = () => {
  const navigate = useNavigate();
 

 
  let user = AuthService.getCurrentUser();
  



  return (
    <Navbar className="color-nav absolute-top"
    bg="dark"
    variant={"dark"}
    expand="sm">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <Image 
            src= {require("./aboutNafa.png")}
            alt=""
            height="60"
            rounded            
          />
        </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
          
          
        { user? (
          user.roles[0] === 'ROLE_USER'? 
            <UserNav />: <AdminNav />
          
           
        ):(
         <>
          
          <Nav className="me-auto">
          
          
            <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={<span className="text-warning">Events</span>}
          menuVariant="dark"
          
        >
          
          <NavDropdown.Item href="/eventList"><span className="text-warning">All Events</span></NavDropdown.Item>
          <NavDropdown.Item href="/calendar"><span className="text-warning">Calendar</span></NavDropdown.Item>          
        </NavDropdown>
          </Nav>
           
            <Nav.Link as={Link} to="/about">
            <span className="text-warning">About</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
            <span className="text-warning">Contact Us</span>
            </Nav.Link>
            <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title={<span className="text-warning">Donate</span>}
            menuVariant="dark"
          >
           
            <NavDropdown.Item href="/scholarshipList">
            <span className="text-warning">Scholarships</span>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
            
            </Nav>

             <Nav>
            
            <Nav.Link className ="btn btn-success" style={{
              padding: "5px",
              margin: "5px",
              color: "black"
            }}as={Link} to="/login">
              Sign in
            </Nav.Link>

            <Nav.Link className ="btn btn-info" style={{
              padding: "5px",
              margin: "5px",
              color: "black"
            }}as={Link} to="/signup">
              Register
            </Nav.Link>
            </Nav>
            </>

        ) }
         
        </Navbar.Collapse> 
         
        
        
      </Container>
    </Navbar>

 

  );
};

export default NavigationBar;