
import MemberData from "../../types/Member";

import React, {useState, useEffect, useContext} from "react";

import { useNavigate } from "react-router";
import { Member } from "../../services/api";
import GroupList from "../Group/GroupList";
import Authenticate from "../../Context/Authenticate";

import { Button, Modal } from "react-bootstrap";




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


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [heading, setHeading] = useState("");
  const[description, setDescription] = useState("");



  const navigate = useNavigate();

  const saveclients = (e) => {
    setShow(false);
    e.preventDefault();
    Member.updateMember(parseInt(users.userId), users)
      .then(() => {
        navigate("/profile/user");

        window.location.reload();
      })
      .catch((error) => {
        console.log("Something went wrong here.", error);

      });
  };


      const {userDetail}: any  = useContext(Authenticate);
      
      const {setSubmit} : any = useContext(Authenticate);

    
      
     
    

      useEffect(() => {
        try{
          setUsers(userDetail);

        } catch(error){
          console.log(error);
        }
            
         
      }, []);
      

  // useEffect(() => {
  //   Member.getAMember(parseInt(user.userId))
  //     .then((response) => {
  //       setUsers(response);
  //     })
  //     .catch((error) => {
  //       console.log("Something went wrong here.", error);
  //     });
  // }, []);

  function handlePopUp(title:string, desc:string){
      
    setDescription(desc);
    setHeading(title);
    setShow(true);
    
  }


  return (
    <>
    <Modal show={show} onHide={()=>setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="warning" onClick={saveclients}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    <div >
      <div className='card mb-4' style={{ height:"100%", border:'none', boxShadow:'none' ,backgroundColor:'#FFFFF4'}}>
      <div >
      <button
        style={{
          textAlign: "center",
          marginRight:'8px'
        }}
        className="btn btn-warning"
        type="button"
        // onClick={(e) => saveclients(e)}
        onClick={()=>handlePopUp("Save?", "Are you sure you want to proceed ahead and save? ")}
      >
        Save Changes
      </button>
      <button
        style={{
          textAlign: "center",
        }}
        className="btn btn-secondary"
        type="button"
        onClick={(e)=> navigate('/profile/user')}
      >
        Discard Changes
      </button>
      </div>
      </div>
      <div className="card mb-4" style={{ fontSize: "20px", height: "100%",}}>
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
                  onChange={(e) =>
                    setUsers({ ...users, fname: e.target.value })
                  }
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
                  onChange={(e) =>
                    setUsers({ ...users, lname: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="row gx-3 mb-3">
              <div className="col-md-6">
                <label className="small mb-1" placeholder="">
                  Middle Name
                </label>
                <input
                  className="form-control"
                  id="middleName"
                  type="text"
                  value={users.middleName === null ? " ": users.middleName}
                  onChange={(e) =>
                    setUsers({ ...users, middleName: e.target.value })
                  }
                />
              </div>

              <div className="col-md-6">
                <label className="small mb-1" placeholder="inputLocation">
                  Miaden Name
                </label>
                <input
                  className="form-control"
                  id="inputLocation"
                  type="text"
                  placeholder="Enter Maiden Name"
                  value={users.maidenName === null ? " ": users.maidenName}
                  onChange={(e) =>
                    setUsers({ ...users, maidenName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="row gx-3 mb-3" style={{ width: "40%" }}>
              <label className="small mb-1">Date of Birth</label>
              <input
                className="form-control"
                type="date"
                id="birthday"
                name="birthday"
              ></input>
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
                  onChange={(e) =>
                    setUsers({ ...users, emailId: e.target.value })
                  }
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
                  onChange={(e) =>
                    setUsers({ ...users, phoneNum: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="row gx-3 mb-3">
            <div className="col-md-6">
                <label className="small mb-1" placeholder="inputPhone">
                  Street Address
                </label>
                <input
                  className="form-control"
                  id="inputPhone"
                  type="text"
                  value={users.streetAddress === null? " " : users.streetAddress}
                  onChange={(e) =>
                    setUsers({ ...users, streetAddress: e.target.value })
                  }
                />
              </div>


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
                  value={users.city === null? " " : users.city}
                  onChange={(e) =>
                    setUsers({ ...users, city: e.target.value })
                  }
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
                  value={users.zipCode === null? " " : users.zipCode}
                  onChange={(e) =>
                    setUsers({ ...users, zipCode: e.target.value })
                  }
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card mb-4" style={{ fontSize: "20px", height: "100%" }}>
        <div className="card-header">Family Details</div>
        <div className="card-body">
          <form>
            <div className="row gx-3 mb-3">
              <div className="col-md-6">
                <label className="small mb-1" placeholder="firstName">
                  Spouse First name
                </label>

                <input
                  className="form-control"
                  id="spouseFirstName"
                  type="text"
                  placeholder="Enter First Name"
                />
              </div>

              <div className="col-md-6">
                <label className="small mb-1" placeholder="inputLastName">
                  Spouse Last name
                </label>
                <input
                  className="form-control"
                  id="inputLastName"
                  type="text"
                  placeholder="Input Last Name"
                />
              </div>
            </div>

            <div className="row gx-3 mb-3">
              <div className="col-md-6">
                <label className="small mb-1" placeholder="">
                  Spouse Middle Name
                </label>
                <input
                  className="form-control"
                  id=""
                  type="text"
                  placeholder="Enter Middle Name"
                />
              </div>

              <div className="col-md-6">
                <label className="small mb-1" placeholder="inputLocation">
                  Spouse Miaden Name
                </label>
                <input
                  className="form-control"
                  id="inputLocation"
                  type="text"
                  placeholder="Enter Maiden Name"
                />
              </div>
            </div>

            <div className="row gx-3 mb-3">
              <div className="col-md-6">
                <label className="small mb-1" placeholder="inputOrgName">
                  Spouse Email Address
                </label>
                <input
                  className="form-control"
                  id="inputOrgName"
                  type="text"
                  placeholder="Enter Email Address"
                />
              </div>

              <div className="col-md-6">
                <label className="small mb-1" placeholder="inputLocation">
                  Spouse Phone Number
                </label>
                <input
                  className="form-control"
                  id="inputLocation"
                  type="text"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card mb-4" style={{ fontSize: "20px", height: "100%" }}>
        <div className="card-header">Education Details</div>
        <div className="card-body">
          <form>
            <div className="row gx-3 mb-3">
              <div className="col-md-6">
                <label className="small mb-1" placeholder="inputFirstName">
                  High School
                </label>

                <input
                  className="form-control"
                  id="inputFirstName"
                  type="text"
                  placeholder="Enter High school name"
                />
              </div>

              <div className="col-md-6">
                <label className="small mb-1" placeholder="inputLastName">
                  University
                </label>
                <input
                  className="form-control"
                  id="inputLastName"
                  type="text"
                  placeholder="Enter University name"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="small mb-1" placeholder="inputEmailAddress">
                Interests
              </label>
              <input
                className="form-control"
                id="inputEmailAddress"
                type="email"
                placeholder="Enter Interest"
              />
            </div>

            <div className="row gx-3 mb-3">
              <div className="col-md-6">
                <label className="small mb-1" placeholder="inputPhone">
                  Graduation Year
                </label>
                <br />
                <input
                  className="form-control"
                  id="year"
                  type="text"
                  placeholder="Enter Graduation year"
                />
              </div>

              <div className="col-md-6">
                <label className="small mb-1" placeholder="inputBirthday">
                  Friend of the Year
                </label>

                <input
                  className="form-control"
                  id="inputBirthday"
                  type="text"
                  name="birthday"
                  placeholder="Enter Friend Name"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
   
    
    </div>
  </>  
  );
};

export default EditAccount;
