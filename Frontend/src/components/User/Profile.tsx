import React, { useEffect, useState } from 'react';
import { getCurrentUser } from "../../services/authenticate-service";
import MemberData from "../../types/Member";
import { Member } from "../../services/api";
import Account from './Account';
import {Nav, NavDropdown} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import EditAccount from './EditAccount';
import EditNAFA  from './EditNAFA';
import Security from './Security';

const Profile = () => {
  const [users, setUsers] = useState<MemberData[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    Member.getMembers()
      .then((data) => {
        setUsers([...data]);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);



  const currentUser = getCurrentUser();
 
    
    const user = Object.assign({}, users[currentUser.id - 1]);
    const userLevel = currentUser.roles &&
      currentUser.roles.map((role: string, index: number) => <li key={index}>{role}</li>);
 
   

  return (
    <>
    {/* <div className="container">
      <header className="jumbotron">
        <h3>
          Profile
        </h3>
      </header>
     
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
        <br />
        <strong>Name:</strong> 
        {user.firstName + " "+ user.lastName}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {userLevel}
      </ul>
    </div> */}





    {/* <div style={{backgroundImage: 'url(/ProfileCard/bg-pattern-top.svg)'}} className={classes.Background}>
            <Container className="py-5" >
                <Card className={classes.ProfileCard + " mx-auto"} >
                    <Card.Img className={classes.ProfileCardBackgroundImage} alt="" variant="top" src="" />
                    <Image className={classes.ProfileCardImage} alt="User Image" src= {require('./profileImage.png')} height="20"/>
                    <Card.Body className={"text-center " + classes.ProfileCardBody}>
                        <Card.Text className={classes.TextBold + " mb-0"}>
                        {user.firstName + " "+ user.lastName}
                        </Card.Text>
                        <Card.Text className={classes.TextMuted}>
                        {currentUser.email}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className={classes.CardFooter}>
                        <Row xs="1" className="text-center mb-1">
                           
                                
                            
                                <Card.Text className={classes.TextBold + " " + classes.FooterP}>Authority</Card.Text>
                                <Card.Text className={classes.TextMuted}>{userLevel}</Card.Text>
                            
                        </Row>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
 */}
 <div className = "row">
   <div className="col-md-4">
   </div>
   <div className = "col-md-8">
   <div className="container-fluid px-4 mt-2">

 
<Nav className="nav nav-borders">
       <Nav.Link className="nav-link ms-0" as={Link} to="/profile/user">My Account</Nav.Link>
       <NavDropdown title="Edit Account" id="basic-nav-dropdown">
       <NavDropdown.Item as={Link} to="/profile/edit_profile">Profile Detais</NavDropdown.Item>
       <NavDropdown.Item as={Link} to="/profile/edit_NAFA_details">NAFA Details</NavDropdown.Item>

       </NavDropdown>
       
       <Nav.Link className="nav-link" as={Link} to="/profile/security">Security</Nav.Link>
       <a className="nav-link" href=""  target="__blank">Billing</a>
   </Nav>
   <hr className="mt-0 mb-3"/>
   </div>
   </div>
    
   </div>
  

 <Routes>
        
        <Route  path="user/" element={<Account user={user} />}/>
      
        <Route  path="edit_profile/" element={<EditAccount />} />
        <Route  path="edit_NAFA_details/" element={<EditNAFA />} />
        <Route  path="security/" element={<Security />} />
        
      </Routes>
    
      




 


 
 </>





  );
};
export default Profile;