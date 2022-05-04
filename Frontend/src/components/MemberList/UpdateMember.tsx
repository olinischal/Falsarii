import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import { Member } from "../../services/api";
import MemberData from "../../types/Member";

const UpdateMember = () => {
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
    dateOfBirth: " ",
  });

  const navigate = useNavigate();

  let { id } = useParams();

  const saveclients = (e) => {
    e.preventDefault();

    Member.updateMember(parseInt(String(id)), users)
      .then(() => {
        navigate("/members");
        window.location.reload();
      })
      .catch((error) => {
        console.log("Something went wrong here.", error);
      });
  };

  useEffect(() => {
    Member.getAMember(parseInt(String(id)))
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => {
        console.log("Something went wrong here.", error);
      });
  }, []);

  return (
    <div className="container">
      <h3>Update Member</h3>
      <hr />
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="firstName"
            value={users.fname}
            onChange={(e) => setUsers({ ...users, fname: e.target.value })}
            placeholder={users.fname}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="maidenName"
            value={users.middleName}
            onChange={(e) => setUsers({ ...users, middleName: e.target.value })}
            placeholder={users.middleName}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="lastName"
            value={users.lname}
            onChange={(e) => setUsers({ ...users, lname: e.target.value })}
            placeholder={users.lname}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="location"
            value={users.phoneNum}
            onChange={(e) => setUsers({ ...users, phoneNum: e.target.value })}
            placeholder={users.phoneNum}
          />
        </div>

        {/* <div className="form-group">
          <input
            type="date"
            className="form-control col-4"
            id="graduationDate"
            value={users.graduationDate}
            onChange={(e) => setUsers({ ...users, graduationDate: e.target.value })}
            placeholder={users.graduationDate}
          />
        </div> */}

        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="location"
            value={users.emailId}
            onChange={(e) => setUsers({ ...users, emailId: e.target.value })}
            placeholder={users.emailId}
          />
        </div>

        <div>
          <button className="btn btn-primary" onClick={(e) => saveclients(e)}>
            Save
          </button>
        </div>
      </form>
      <hr />
      <Link to={"/members"}>Back to List</Link>
    </div>
  );
};

export default UpdateMember;
