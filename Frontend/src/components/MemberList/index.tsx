import { useEffect, useState } from "react";
import MemberData from "../../types/Member";
import { Member } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const MemberList = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState<MemberData[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("firstName");

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
    <div className="container" style={{paddingTop: "100px"}}>
      <h3>List of Members</h3>
      <div>
        <input
          type="text"
          placeholder="Search Members"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {searchType}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                setSearchType("firstName");
              }}
            >
              First Name
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setSearchType("email");
              }}
            >
              Email
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setSearchType("graduationDate");
              }}
            >
              Grad Date
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {members
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.fname
                .toLocaleLowerCase()
                .includes(searchTerm.toLowerCase()) &&
              searchType === "firstName"
            ) {
              return val;
            } else if (
              val.emailId
                .toLocaleLowerCase()
                .includes(searchTerm.toLowerCase()) &&
              searchType === "email"
            ) {
              return val;
            } else if (
              val.graduationDate.includes(searchTerm) &&
              searchType === "graduationDate"
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div key={key}>
                <hr />
                <div>
                  {/* <Link to="/update" className="btn btn-primary mb-2">Add Member </Link> */}
                  <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                      <tr>
                        <th>First Name</th>
                        <th>Maiden Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Graduation Date</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key={val.userId}>
                        <td>{val.fname}</td>
                        <td>{val.middleName}</td>
                        <td>{val.lname}</td>
                        <td>{val.phoneNum}</td>
                        <td>{val.graduationDate}</td>
                        <td>{val.emailId}</td>
                        <td>
                          <Link
                            className="btn btn-info"
                            to={"/update/" + `${val.userId}`}
                          >
                            Update
                          </Link>
                          <button
                            className="btn btn-danger ml-2"
                            onClick={(e) => {
                              handleDelete(val.userId);
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
          })}
      </div>
    </div>
  );
};

export default MemberList;
