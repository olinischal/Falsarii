import { useContext, useEffect, useState } from "react";
import Authenticate from "../../Context/Authenticate";
import { getScholarshipDonateList, Member } from "../../services/api";
import MemberData from "../../types/Member";

const ListOfDonors = ({ scholarship }) => {
  const [donorList, setDonorList] = useState([]);
  const [members, setMembers] = useState<MemberData[]>([]);
  useEffect(() => {
    getScholarshipDonateList(scholarship.scholarshipId)
      .then((res) => {
        setDonorList(res.data);
      })
      .catch((error) => {
        console.log("Could not retrieve donor list.", error);
      });
  }, []);

  useEffect(() => {
    Member.getMembers()
      .then((data) => {
        setMembers([...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let user: String[] = [];
  donorList.forEach((val) => {
    members.forEach((id) => {
      if (id.userId === Number(val[0])) {
        user.push(id.fname + " " + id.lname);
      }
    });
  });

  return (
    <div className="card mb-4">
      <div
        className="card-header "
        style={{ backgroundColor: "#ffc40c", color: "#353839" }}
      >
        Donators list side bar
      </div>
      <div className="card-body">
        {user.map((val, key) => {
          return <div key={key}>{val}</div>;
        })}
      </div>
    </div>
  );
};

export default ListOfDonors;
