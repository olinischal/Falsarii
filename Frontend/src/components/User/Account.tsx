import MemberData from "../../types/Member";

import React, { useContext, useState } from "react";

import "./Account.css";
import "./temp.css";
import { Image } from "react-bootstrap";
import Authenticate from "../../Context/Authenticate";
import GetGroups from "../Group/UserGroupList";
import UserGroupsList from "../Group/UserGroupList";

const Account = () => {
  const { userDetail }: any = useContext(Authenticate);

  return (
    <>
      {/* import profile from './profileImage.png'; 



interface userDetails {
  user: MemberData ;
}




const Account: React.FC<userDetails> = ({ user }) => {

  const [profilePic, setProfilePic] = useState(profile);
  const imageHandler =(e) =>{
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState ===2 ){
        setProfilePic(String(reader.result));
      }
    }
    reader.readAsDataURL(e.target.files[0]);( */}

      <div>
        <div className="card mb-4" style={{ fontSize: "20px" }}>
          <div className="card-header">Personal Details</div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {userDetail.fname + " " + userDetail.lname}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {userDetail.emailId}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {userDetail.phoneNum}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {userDetail.streetAddress}
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Spouse</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {"Spouse Name Goes here"}
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div className="card mb-4" style={{ fontSize: "20px" }}>
          <div className="card-header">Educational Details</div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">High School</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {"High School Name Goes Here"}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Graduation Year</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {"Graduation Year Goes Here"}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Interest</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {"Interest List Goes Here"}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">University</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {"University name goes here"}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Groups</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <UserGroupsList />
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-4" style={{ fontSize: "20px", height: "100%" }}>
          <div className="card-header">Membership</div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Membership type</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {"Membership type goes here"}
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
