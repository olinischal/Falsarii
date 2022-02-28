import { useEffect, useState } from "react";
import MemberData from "../../types/Member";
import { Member } from "../../services/api";
import Profile from "../User/Profile";
import {useNavigate} from "react-router-dom";


import { Link } from "react-router-dom";

const MemberList = () => {
  
  const navigate = useNavigate();
  const [members, setMembers] = useState<MemberData[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {

    Member.getMembers()
      .then((data) => {
        setMembers([...data]);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  const handleDelete = id => {
    try {     
      Member.deleteMember(id)
      .then(() => {
        navigate("/members");
        window.location.reload();
      });
    } catch (error) {
      console.log("Error...");
    }
  }
  return (
 
    
    <div className='container'>
      <h3>List of Members</h3>
      <hr />
      <div>
        {/* <Link to="/update" className="btn btn-primary mb-2">Add Member </Link> */}
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>PhoneNumber</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              members.map(member => (
                <tr key={member.id}>
                <td>{member.firstName}</td>
                  <td>{member.lastName}</td>
                  <td>{member.phoneNumber}</td>
                  <td>{member.email}</td>
                  <td>
                    <Link className="btn btn-info" to={'/update/'+`${member.id}`}>Update</Link>
                    <button className="btn btn-danger ml-2" onClick={(e) =>{
                      handleDelete(member.id)
                    }} >Delete</button>
                  </td>
                </tr>

              ))
            }
          </tbody>

        </table>
      </div>
    </div>
      
            
   
  );
};


export default MemberList;
