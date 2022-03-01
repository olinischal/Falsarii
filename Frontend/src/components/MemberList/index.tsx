import { useEffect, useState } from "react";
import MemberData from "../../types/Member";
import { Member } from "../../services/api";
import Profile from "../User/Profile";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const MemberList = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState<MemberData[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Member.getMembers()
      .then((data) => {
        setMembers([...data]);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  const handleDelete = (id) => {
    try {
      Member.deleteMember(id).then(() => {
        navigate("/members");
        window.location.reload();
      });
    } catch (error) {
      console.log("Error...");
    }
  };
  return (
    <div className="container">
      <h3>List of Members</h3>
      <div>
        <input
          type="text"
          placeholder="Search Members"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {members
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.firstName
                .toLocaleLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div key={key}>
                {/* <p>{val.firstName}</p>{" "} */}
                <hr />
      <div>
        {/* <Link to="/update" className="btn btn-primary mb-2">Add Member </Link> */}
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>PhoneNumber</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            
              <tr key={val.id}>
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.phoneNumber}</td>
                <td>{val.email}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={"/update/" + `${val.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={(e) => {
                      handleDelete(val.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
           
          </tbody>
        </table>
      </div>

              </div>
            );
          })
          }
      </div>

      
      
    </div>
  );
};

export default MemberList;
