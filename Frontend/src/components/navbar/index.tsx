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
    <Navbar className='color-nav' bg="dark" variant={"dark"} expand="sm">
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
         
          
          
        { user? (
          user.roles[0] === 'ROLE_USER'? 
            <UserNav />: <AdminNav />
          
           
        ):(
         <>
          
          <Nav className="me-auto">
          
          
            <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Events"
          menuVariant="dark"
          
        >
          
          <NavDropdown.Item href="/eventList">All Events</NavDropdown.Item>
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
           
            <NavDropdown.Item href="/scholarshipList">
              Scholarships
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
