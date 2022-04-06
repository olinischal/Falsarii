import MemberData from "../../types/Member";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router";
import { Member } from "../../services/api";

interface userDetails {
  user: MemberData;
}

const EditAccount: React.FC<userDetails> = ({ user }) => {
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

      const [fullAdress, setFullAddress] = useState({
        streetAddress: " ",
        city: " ",
        postalCode: " "
      })

      const navigate = useNavigate();
      // let city = " ";
      // let postalCode= " ";
      const saveclients = (e) => {
        e.preventDefault();
        setUsers({ ...users, address: `${users.address}, ${fullAdress.city}, ${fullAdress.postalCode}` })
        Member.updateMember(parseInt(users.id), users)
          .then(() => {
            navigate('/profile/user');
            
            window.location.reload();
          })
          .catch((error) => {
            console.log("Something went wrong here.", error);
          });
      };

      useEffect(() => {
        Member.getAMember(parseInt(user.id))
          .then((response) => {
            setUsers(response);
          })
          .catch((error) => {
            console.log("Something went wrong here.", error);
          });
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
                      value={users.firstName}
                      onChange={(e) => setUsers({ ...users, firstName: e.target.value })}
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
                      value={users.lastName}
                      onChange={(e) => setUsers({ ...users, lastName: e.target.value })}
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
                      value={users.email}
                      onChange={(e) => setUsers({ ...users, email: e.target.value })}
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
                      value={users.phoneNumber}
                      
                      onChange={(e) => setUsers({ ...users, phoneNumber: e.target.value })}
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
                    value={users.address}
                    onChange={(e) => setUsers({ ...users, address: e.target.value })}
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
                      value={fullAdress.city}
                      onChange={(e) => setFullAddress({ ...fullAdress, city: e.target.value })}
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
                      value={fullAdress.postalCode}
                      onChange={(e) => setFullAddress({ ...fullAdress, postalCode: e.target.value })}
                    />
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
