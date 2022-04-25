import MemberData from "../../types/Member";
import React, { useContext } from "react";
import "./Account.css";
import "./temp.css";
import { Image } from "react-bootstrap";
import Authenticate from "../../Context/Authenticate";



const Account = () => {
  const {userDetail}: any  = useContext(Authenticate);
 
  return (
    <div className="container">
      <div className="row">
      <div className="col-xl-3 col-lg-4 col-md-4 col-xs-12">
          {/* <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <Image
                  src={require("./profileImage.png")}
                  alt="Admin"
                  className="rounded-circle"
                  width="150"
                />
                <div className="mt-3">
                  <h4>{userDetail.fname + " " + userDetail.lname}</h4>
                  <p className="text-secondary mb-1">{userDetail.emailId}</p>
                  <p className="text-muted font-size-sm">{userDetail.address}</p>
                </div>
              </div>
            </div> 
          </div> */}

<div className="social-timeline-left">
                                <div className="card">
                                    <div className="social-profile">
                                    <Image
                  src={require("./profileImage.png")}
                  alt="Admin"
                  
                  width="150"
                />
                                        <div className="profile-hvr m-t-15">
                                            <i className="icofont icofont-ui-edit p-r-10"></i>
                                            <i className="icofont icofont-ui-delete"></i>
                                        </div>
                                    </div>
                                    <div className="card-block social-follower">
                                        <h4>{userDetail.fname + " " + userDetail.lname}</h4>
                                        <h5>Class of {userDetail.graduationDate}</h5>                            
                                      
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-header-text">Membership</h5>
                                    </div>
                                    <div className="card-block user-box">
                                        
                                    </div>
                                </div>

                                <div className="card">
                                   
                                    <div className="card-block friend-box">
                                       <h5 className="card-header-text"> Contact Information <br /> </h5>
                                        {userDetail.phoneNum}   
                                        <br />
                                        {userDetail.emailId}
                                    </div>
                                </div>

                            </div>


        </div>
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header">Account Details</div>
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
                <div className="col-sm-9 text-secondary">{userDetail.emailId}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">{userDetail.phoneNum}</div>
              </div>
              <hr />
             
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">{userDetail.address}</div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
