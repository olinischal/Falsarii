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
import UseAuth from "../Authenticate/useAuth";

const Profile = () => {
  const [users, setUsers] = useState<MemberData>({
    firstName: " ",
    maidenName: " ",
    lastName: " ",
    email: " ",
    graduationDate: " ",
    phoneNumber: " ",
    password: " ",
    address: " ",
  });
  const [isError, setIsError] = useState<boolean>(false);
  const { setAuth }: any = UseAuth();

  // const [userEmail, setUserEmail] = useState("");
  // const [userRole, setUserRole] = useState("");
 

  const currentUser = getCurrentUser();
  const id: number = currentUser.id;
  const userEmail = currentUser.email;
  const userRole = currentUser.roles;
  useEffect(() => {
    setAuth({ userEmail, userRole });

  }, [])
  

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

  const userLevel =
    currentUser.roles &&
    currentUser.roles.map((role: string, index: number) => (
      <li key={index}>{role}</li>
    ));

  return (
    <>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-8">
          <div className="container-fluid px-4 mt-2">
            <Nav className="nav nav-borders">
              <Nav.Link className="nav-link ms-0" as={Link} to="/profile/user">
                My Account
              </Nav.Link>
              <NavDropdown title="Edit Account" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/profile/edit_profile">
                  Profile Details
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/profile/edit_NAFA_details">
                  NAFA Details
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="nav-link" as={Link} to="/profile/security">
                Security
              </Nav.Link>
              <a className="nav-link" href="" target="__blank">
                Billing
              </a>
            </Nav>
            <hr className="mt-0 mb-3" />
          </div>
        </div>
      </div>

      <Routes>
        <Route path="user/" element={<Account user={users} />} />

        <Route path="edit_profile/" element={<EditAccount user={users} />} />
        <Route path="edit_NAFA_details/" element={<EditNAFA />} />
        <Route path="security/" element={<Security />} />
      </Routes>
    </>
  );
};
export default Profile;
