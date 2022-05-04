import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import { Member } from "../../services/api";
import MemberData from "../../types/Member";

const NewPassword = () => {
  const navigate = useNavigate();

  let { id } = useParams();

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
  const saveclients = (e) => {
    e.preventDefault();

    Member.updateMember(parseInt(String(id)), users)
      .then(() => {
        navigate("/login");
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
    <>
      <form className="card mt-4">
        <div className="card-body">
          <div className="form-group">
            <label className="email-for-pass">Enter new password </label>
            <input
              className="form-control"
              type="password"
              id="email-for-pass"
              onChange={(e) => setUsers({ ...users, password: e.target.value })}
            />
            <label className="email-for-pass">Re-type password </label>
            <input
              className="form-control"
              type="password"
              id="email-for-pass"
            />
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger" onClick={(e) => saveclients(e)}>
            Back to Login
          </button>
        </div>
      </form>
    </>
  );
};

export default NewPassword;
