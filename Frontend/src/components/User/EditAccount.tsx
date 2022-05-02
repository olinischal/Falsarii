import MemberData from "../../types/Member";
import React, {useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router";
import { Member } from "../../services/api";
import GroupList from "../Group/GroupList";
import Authenticate from "../../Context/Authenticate";
import EditNAFA from "./EditNAFA";



const EditAccount = () => {
    const [users, setUsers] = useState<MemberData>({
      fname: " ",
      middleName: " ",
      maidenName: " ",
      lname: " ",
      emailId: " ",
      graduationDate: " ",
      phoneNum: " ",
      streetAddress: " ",
      city: " ",
      zipCode: " ",
      state: " ",
      password: " ",
      university: " ",
      highSchool: " ",
      gender: " ",
      });

      const {userDetail}: any  = useContext(Authenticate);
      
      const {setSubmit} : any = useContext(Authenticate);

    
      
      const navigate = useNavigate();
      // let city = " ";
      // let postalCode= " ";
      const saveclients = (e) => {
        e.preventDefault();
        Member.updateMember(parseInt(users.userId), users)
          .then(() => {
            setSubmit(true);
            navigate('/profile/user');
           
           window.location.reload();
          })
          .catch((error) => {
            console.log("Something went wrong here.", error);
          });
          


      };
    

      useEffect(() => {
        try{
          setUsers(userDetail);

        } catch(error){
          console.log(error);
        }
            
         
      }, []);
      
      

  return (
    <div className="container-fluid mt-2 px-2">
      <div className="row">
        <div className="col-md-4 px-4 mt-0">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              <img
                className="img-account-profile rounded-circle mb-2"
                src="./profileImage.png"
                alt=""
              />

              <div className="small font-italic text-muted mb-4">
                JPG or PNG no larger than 5 MB
              </div>

              <button className="btn btn-primary" type="button">
                Upload new image
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header">Profile Details</div>
            <div className="card-body">
              <form>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" placeholder="firstName">
                      First name
                    </label>

                    <input
                      className="form-control"
                      id="firstName"
                      type="text"
                      value={users.fname}
                      onChange={(e) => setUsers({ ...users, fname: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="small mb-1" placeholder="inputLastName">
                      Last name
                    </label>
                    <input
                      className="form-control"
                      id="inputLastName"
                      type="text"
                      value={users.lname}
                      onChange={(e) => setUsers({ ...users, lname: e.target.value })}
                    />
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" placeholder="inputOrgName">
                      Email Address
                    </label>
                    <input
                      className="form-control"
                      id="inputOrgName"
                      type="text"
                      value={users.emailId}
                      onChange={(e) => setUsers({ ...users, emailId: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="small mb-1" placeholder="inputLocation">
                      Phone Number
                    </label>
                    <input
                      className="form-control"
                      id="inputLocation"
                      type="text"
                      value={users.phoneNum}
                      
                      onChange={(e) => setUsers({ ...users, phoneNum: e.target.value })}
                    />
                  </div>
                </div>
                {/* <div className="mb-3">
                  <label className="small mb-1">Graduation Date</label>
                  <input
                    className="form-control"
                    id="inputGraduationDate"
                    type="date"
                    value={user.graduationDate}
                    onChange={(e) => setUsers({ ...users, graduationDate: e.target.value })}
                  
                  />
                </div> */}

                <div className="mb-3">
                  <label className="small mb-1" placeholder="inputAddress">
                    Street Address
                  </label>
                  <input
                    className="form-control"
                    id="inputAddress"
                    type="text"
                    placeholder="Enter your street address"
                    value={users.streetAddress == null? " ": users.streetAddress}
                    onChange={(e) => setUsers({ ...users, streetAddress: e.target.value })}
                  />
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" placeholder="inputPhone">
                      City
                    </label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Input City"
                      value={users.city == null? " ": users.city}
                      onChange={(e) => setUsers({ ...users, city: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="small mb-1" placeholder="inputBirthday">
                      Postal Code
                    </label>
                    <input
                      className="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Input Postal code"
                      value={users.zipCode == null? " ": users.zipCode}
                      onChange={(e) => setUsers({ ...users, zipCode: e.target.value })}
                    />
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                  <label className="small mb-1" placeholder="inputBirthday">
                      Group
                    </label>

                   {/* <GroupList /> */}
                  </div>
                  </div>

                  

                <button className="btn btn-primary" type="button" onClick={(e) => saveclients(e)}>
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
