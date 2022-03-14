import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import './index.css'
import * as AuthService from "../../services/authenticate-service";

const NavigationBar = () => {
  const navigate = useNavigate();
  

  let user = AuthService.getCurrentUser();
  
  const logOut = () => {
    AuthService.logout();
    navigate('/login');

  };


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
         
          
          
        { user ? (
           <><Nav className="me-auto">

                <Nav.Link as={Link} to="/members">
                  Members
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact Us
                </Nav.Link>
                <Nav.Link as={Link} to="/payment">
                  Donate
                </Nav.Link>

                <Nav.Link as={Link} to="/membership">
                  Membership
                </Nav.Link>
              </Nav>
                {/* // {user ?  */}
                <Nav>
                  <Nav.Link as={Link} to="/profile/user">
                    Profile
                  </Nav.Link>

                  <Nav.Link className="btn btn-success" style={{
                    padding: "5px",
                    margin: "5px",
                    color: "black"
                  }} onClick={logOut}>
                    Sign Out
                  </Nav.Link>
                </Nav>
                </>
        ):(
         <>
          
          <Nav className="me-auto">
          
          <Nav.Link as={Link} to="/members" >
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
