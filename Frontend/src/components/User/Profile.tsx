
import React, { useContext, useEffect, useState } from "react";

import { getCurrentUser } from "../../services/authenticate-service";

import { Member } from "../../services/api";
import Account from "./Account";
import { Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import EditAccount from "./EditAccount";

import Security from "./Security";
import Authenticate from "../../Context/Authenticate";


import { Image } from "react-bootstrap";
import { borderColor, fontSize } from "@mui/system";
import Activity from "./Activity";

const Profile = () => {


  const {setUserDetail}: any  = useContext(Authenticate);
  const {userDetail} : any = useContext(Authenticate);
  const [isError, setIsError] = useState<boolean>(false);  
  const currentUser = getCurrentUser();  
  const id:number = currentUser.userId;
  
  useEffect(() => {
    Member.getAMember(id)
      .then((res) => {
        
        setUserDetail(res);
        
      })
      .catch((err) => {
        setIsError(true);

        console.log("Error Could not retireve Profile Details");
      });
  }, []);
  

  


 


  const user = Object.assign({}, userDetail[currentUser.id - 1]);

  const userLevel =
    currentUser.roles &&
    currentUser.roles.map((role: string, index: number) => (
      <li key={index}>{role}</li>
    ));

  const [profilePic, setProfilePic] = useState('');
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfilePic(String(reader.result));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <div style={{ paddingTop: "80px", display: "flex", color:'black', backgroundColor:'#FFFFF4'}}>
        <div className="card" style={{ paddingLeft: "30px", width: "25%", border:'none', boxShadow:'none', backgroundColor:'#FFFFF4' }}>
          <div
            className=""
            style={{  }}
          >
            <div>
              <div className="d-flex flex-column align-items-center text-center">
                <Image
                  src={require('./profileImage.png')}
                  alt="Admin"
                  className="rounded-circle"
                  width="70%"
                  height="auto"
                />
                <div className="mt-3">
                  <h4>{userDetail.fname + " " + userDetail.lname}</h4>
                  <p className="text-secondary mb-1">{userDetail.emailId}</p>
                  <p className="text-muted font-size-sm">{userDetail.address}</p> 
                   <input
                    type="file"
                    name="image-upload"
                    id="input-image"
                    accept="image/*"
                    onChange={imageHandler}
                    style={{ display: "none" }}
                  />
                  <div className="label">
                    <label htmlFor="input-image" className="image-upload">
                      <i className="bi bi-images"></i>Change Your Profile Photo
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div style={{ paddingTop: "30px", fontSize:'20px'}}>
              <div >
                <i className="fa fa-map-marker" style={{fontSize:'20px', paddingRight:'15px', paddingBottom:'25px'}}></i>
                  {userDetail.city}, {userDetail.state}
              </div>
              <div >
                <i className="fa fa-phone" style={{fontSize:'20px', paddingRight:'15px', paddingBottom:'25px'}}></i>
                  {userDetail.phoneNum}
              </div>
              <div >
                <i className="fa fa-envelope" style={{fontSize:'20px', paddingRight:'15px', paddingBottom:'25px'}}></i>
                 <a href="#"> {userDetail.emailId}</a>
              </div>
              
          </div>
        </div>



        <div style={{ width: "75%" }}>
          <Nav className="nav nav-borders" style={{backgroundColor:'#FFECB3',fontSize:'20px', paddingLeft:'10px'}}>
            <Nav.Link className="nav-link ms-0" as={Link} to="/profile/user">
              My Account
            </Nav.Link>
            <Nav.Link
              className="nav-link ms-0"
              as={Link}
              to="/profile/edit_profile"
            >
              Edit
            </Nav.Link>

            <Nav.Link className="nav-link" as={Link} to="/profile/security">
              Security
            </Nav.Link>
           
          </Nav>
          <hr className="mt-0 mb-3" />
          <Routes>
            <Route path="user/" element={<Account />} />

            <Route
              path="edit_profile/"
              element={<EditAccount  />}
            />
           
            <Route path="security/" element={<Security />} />
            
            
          </Routes>
        </div>
      </div>

    </>
  );
};
export default Profile;
