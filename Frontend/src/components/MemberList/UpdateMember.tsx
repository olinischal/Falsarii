import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import { Member } from "../../services/api";
import MemberData from "../../types/Member";

const UpdateMember = () => {
  const [users, setUsers] = useState<MemberData>({
    firstName: " ",
    maidenName: " ",
    lastName: " ",
    email: " ",
    graduationDate: " ",
    phoneNumber: " ",
    password: " ",
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
            value={users.firstName}
            onChange={(e) => setUsers({ ...users, firstName: e.target.value })}
            placeholder={users.firstName}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="maidenName"
            value={users.maidenName}
            onChange={(e) => setUsers({ ...users, maidenName: e.target.value })}
            placeholder={users.maidenName}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="lastName"
            value={users.lastName}
            onChange={(e) => setUsers({ ...users, lastName: e.target.value })}
            placeholder={users.lastName}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="location"
            value={users.phoneNumber}
            onChange={(e) =>
              setUsers({ ...users, phoneNumber: e.target.value })
            }
            placeholder={users.phoneNumber}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="graduationDate"
            value={users.graduationDate}
            onChange={(e) => setUsers({ ...users, graduationDate: e.target.value })}
            placeholder={users.graduationDate}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="location"
            value={users.email}
            onChange={(e) =>
              setUsers({ ...users, email: e.target.value })
            }
            placeholder={users.email}
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
