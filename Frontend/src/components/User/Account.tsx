import MemberData from "../../types/Member";
import React from "react";
import "./Account.css";
import { Image } from "react-bootstrap";




interface userDetails {
  user: MemberData ;
}



const Account: React.FC<userDetails> = ({ user }) => {
  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-md-4 px-4 mt-0">
          <div className="card mb-4 mb-xl-0">
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
                  <h4>{user.firstName + " " + user.lastName}</h4>
                  <p className="text-secondary mb-1">{user.email}</p>
                  <p className="text-muted font-size-sm">Address</p>
                </div>
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
                  {user.firstName + " " + user.lastName}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">{user.email}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {user.phoneNumber}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Mobile</h6>
                </div>
                <div className="col-sm-9 text-secondary">800080000</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  Monroe, Louisiana, LA
                </div>
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
