import MemberData from "../../types/Member";
import React, { useState } from "react";
import "./Account.css";
import { Image } from "react-bootstrap";
import profile from './profileImage.png';



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
    reader.readAsDataURL(e.target.files[0]);
  }
  return (
    <div className="container-fluid mt-2" style={{paddingTop:"50px"}}>
      <div className="row">
        <div className="col-md-4 px-4 mt-0">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <Image
                  src={profilePic}
                  alt="Admin"
                  className="rounded-circle"
                  width="150"
                  height='150'
                />
                <div className="mt-3">
                  <h4>{user.fname + " " + user.lname}</h4>
                  <p className="text-secondary mb-1">{user.emailId}</p>
                  {/* <p className="text-muted font-size-sm">{user.address}</p> */}
                  <input type="file" name="image-upload" id="input-image" accept="image/*" onChange={imageHandler} style={{display:'none'}}/>
                  <div className="label">
                    <label htmlFor="input-image" className="image-upload" ><i className="bi bi-images" ></i>Change Your Profile Photo</label>
                  </div>
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
                  {user.fname + " " + user.lname}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">{user.emailId}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {user.phoneNum}
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
                {/* <div className="col-sm-9 text-secondary">
                  {user.address}
                </div> */}
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
