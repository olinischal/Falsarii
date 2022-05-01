import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/authenticate-service";
import MemberData from "../../types/Member";
import { Member } from "../../services/api";
import Account from "./Account";
import { Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import EditAccount from "./EditAccount";
import EditNAFA from "./EditNAFA";
import Security from "./Security";

import { Image } from "react-bootstrap";
import profile from "./profileImage.png";
import { borderColor, fontSize } from "@mui/system";

const Profile = () => {
  const [users, setUsers] = useState<MemberData>({
    emailId: "",
    fname: "",
    middleName: "",
    lname: "",
    maidenName: "",
    password: "",
    phoneNum: "",
  });
  const [isError, setIsError] = useState<boolean>(false);

  const currentUser = getCurrentUser();
  const id: number = currentUser.userId;

  useEffect(() => {
    Member.getAMember(id)
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        setIsError(true);
        console.log("Error");
      });
  }, []);

  // const currentUser = getCurrentUser();

  console.log(getCurrentUser());
  const user = Object.assign({}, users[currentUser.id - 1]);

  const userLevel =
    currentUser.roles &&
    currentUser.roles.map((role: string, index: number) => (
      <li key={index}>{role}</li>
    ));

  const [profilePic, setProfilePic] = useState(profile);
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
                  src={profilePic}
                  alt="Admin"
                  className="rounded-circle"
                  width="70%"
                  height="auto"
                />
                <div className="mt-3">
                  <h4>{user.fname + " " + user.lname}</h4>
                  <p className="text-secondary mb-1">{user.emailId}</p>
                  {/* <p className="text-muted font-size-sm">{user.address}</p> */}
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
                  1000 Adress of Member
              </div>
              <div >
                <i className="fa fa-phone" style={{fontSize:'20px', paddingRight:'15px', paddingBottom:'25px'}}></i>
                  3184568383
              </div>
              <div >
                <i className="fa fa-envelope" style={{fontSize:'20px', paddingRight:'15px', paddingBottom:'25px'}}></i>
                 <a href="#"> member@company.com</a>
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
            <a className="nav-link" href="" target="__blank">
              Billing
            </a>
          </Nav>
          <hr className="mt-0 mb-3" />
          <Routes>
            <Route path="user/" element={<Account user={users} />} />

            <Route
              path="edit_profile/"
              element={<EditAccount user={users} />}
            />
            <Route path="edit_NAFA_details/" element={<EditNAFA />} />
            <Route path="security/" element={<Security />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default Profile;
